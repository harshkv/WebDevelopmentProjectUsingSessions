var express = require('express');
var routers = express.Router();
var userDB = require('../utility/userDB');
var users = userDB.getUsers();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = module.exports = express();
var itemDb = require('../utility/itemDb');
var UserProfile = require('./../models/UserProfile');
var UserItem = require('./../models/UserItem');
var eachUser = require('./../models/user');
var userProfileObject;
var userItemObject;


routers.get('/myitems',urlencodedParser,function(request, response, next) {
    if(request.session.theUser){
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data , userdata: request.session.theUser});
    }
  else {
    eachUser = userDB.getUser(1);
    console.log("user created: ",eachUser);
    request.session.theUser = eachUser;
    userProfileObject = new UserProfile(request.session.theUser._userID);
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
    console.log("data",data);
    response.render('myitems',{saveData:data, userdata:request.session.theUser} );

    }
});

routers.get('/signin',urlencodedParser, function(request, response , next){
  if(!request.session.theUser){
    eachUser = userDB.getUser(1);
    console.log("user created: ",eachUser);
    request.session.theUser = eachUser;
    userProfileObject = new UserProfile(request.session.theUser._userID);
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
    response.render('myitems',{saveData: data, userdata:request.session.theUser} );
   }else{
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data, userdata: request.session.theUser});
  }
});



routers.get('/save/:itemCode',urlencodedParser,function(request, response, next) {
    if(request.session.theUser){
    var item = itemDb.getItem(request.params.itemCode);
    userItemObject = new UserItem(item,0,false);
    userProfileObject.addItem(userItemObject);
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data, userdata: request.session.theUser});

  }
  else{
    eachUser = userDB.getUser(1);
    console.log("user created from items page: ",eachUser);
    request.session.theUser = eachUser;
    userProfileObject = new UserProfile(request.session.theUser._userID);
    request.session.userProfile = userProfileObject;
    var item = itemDb.getItem(request.params.itemCode);
    userItemObject = new UserItem(item,0,false);
    userProfileObject.addItem(userItemObject);
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data , userdata:request.session.theUser});
  }


});

routers.post('/deleteItem/:itemCode',urlencodedParser,function(request, response, next) {
  var itemCode = request.params.itemCode;
  if(!itemDb.checkItem(itemCode) ){
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data, userdata:request.session.theUser});
  }
  else{
    userProfileObject.removeItem(request.params.itemCode);
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
    response.render('myitems',{saveData : data, userdata:request.session.theUser});
  }
});


routers.post('/updateRating/:itemCode',urlencodedParser,function(request, response, next) {
  if(request.session.theUser){
    userProfileObject.updateRating(request.body.myList,request.params.itemCode)
    request.session.userProfile = userProfileObject;
    data = userProfileObject.getItems();
      console.log("data in save item: ",request.session);
  response.render('myitems',{saveData : data, userdata: request.session.theUser});
  }
else {
    response.render('myitems',{saveData :data, userdata: request.session.theUser});
  }
});

routers.post('/updateMadeit/:itemCode',urlencodedParser,function(request, response, next) {
  if(request.session.theUser){
    userProfileObject.updateMadeit(request.body.madeitList, request.params.itemCode)
    data = userProfileObject.getItems();
     response.render('myitems',{saveData : data , userdata: request.session.theUser});
  }
  else {
    response.render('myitems',{saveData :data, userdata: request.session.theUser});
  }
});


routers.get('/feedback/:itemCode', function(request, response, next) {
    var itemCode = request.params.itemCode;
    if(!itemDb.checkItem(itemCode) ){
      if(request.session.theUser){
        data = userProfileObject.getItems();
      response.render('myitems',{saveData : data , userdata: request.session.theUser});
      }
      else {
        response.render('myitems',{saveData :data, userdata: request.session.theUser});
      }

}
else {
      if(request.session.theUser){
        var item = itemDb.getItem(itemCode);
        var data= {
          item: item
        }
        response.render('feedback',{data:data,userdata: request.session .theUser});
      }else{
      eachUser = userDB.getUser(1);
      console.log("user created from feedback page: ",eachUser);
      request.session.theUser = eachUser;
      userProfileObject = new UserProfile(request.session.theUser._userID);
      var itemCode = request.params.itemCode;
      var item = itemDb.getItem(itemCode);
      var data= {
         item: item
     }
      response.render('feedback',{data : data , userdata:request.session.theUser});


}
}});

routers.post('/feedback/:itemCode', function(request, response, next) {
    if(request.session.theUser){
      var itemCode = request.params.itemCode;
      var item = itemDb.getItem(itemCode);
     var data= {
         item: item
     }
      response.render('feedback',{data:data,userdata: request.session.theUser });
    }else{
      eachUser = userDB.getUser(1);
      console.log("user created from items page: ",eachUser);
      request.session.theUser = eachUser;
      userProfileObject = new UserProfile(request.session.theUser._userID);
      var itemCode = request.params.itemCode;
      var item = itemDb.getItem(itemCode);
     var data= {
         item: item
     }
      response.render('feedback',{data : data , userdata:request.session.theUser});

}
});


routers.get('/signout',function(request,response,next) {
  if(request.session){
  userProfileObject.emptyProfile(request);
  response.render('index',{userdata : ""});
}
else {
    response.render('index',{userdata : ""});
}
});

module.exports = routers ;
