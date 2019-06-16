var express = require('express');
var router = express.Router();
var itemDb = require('../utility/itemDb');
var items = itemDb.getItems();
var categories = itemDb.getCategories();
var theUser = require('./../models/user');


router.get('/',function(request, response, next) {
   if(request.session.theUser){
     response.render('index',{userdata:request.session.theUser});
   }else{
     response.render('index',{userdata:""});
   }
});

router.get('/categories',function(request, response, next) {
    var data= {
        categories: categories,
        items: items}
    if(request.session.theUser){
      response.render('categories',{data:data , userdata:request.session.theUser});    }
    else{
      response.render('categories',{data:data , userdata:""});    }
});

router.get('/categories/item/:itemCode', function(request, response, next) {
  var itemCode = request.params.itemCode;
  if(!itemDb.checkItem(itemCode) ){
      var data= {
          categories: categories,
          items: items
        }
        if(request.session.theUser){
          response.render('categories',{data:data, userdata:request.session.theUser});
        }
        else{
            response.render('categories',{data:data, userdata:""});
          }

    }
    else{
      var item = itemDb.getItem(itemCode);
      var data= {
        item: item
        }

    if(request.session.theUser){
      response.render('item',{data:data, userdata:request.session.theUser});
    }
    else{
      response.render('item',{data:data, userdata:""});
    }
    }
});

router.get('/about',function(req, res, next) {
  if(req.session.theUser){
    res.render('about',{userdata:req.session.theUser});
  }else{
    res.render('about',{userdata:""});
  }
});


router.get('/contact',function(req, res, next) {
  if(req.session.theUser){
    res.render('contact',{userdata:req.session.theUser});
  }else{
    res.render('contact',{userdata:""});
  }
});

module.exports = router ;
