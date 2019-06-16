var User = require('../models/user');
module.exports.getUsers = function () {

    let users = [];
    for (let i = 0; i < data.length; i++) {
        let user = new User(
            data[i].UserID,
            data[i].FirstName,
            data[i].LastName,
            data[i].EmailAddress,
            data[i].Password,
            data[i].Address,
            data[i].City,
            data[i].State,
            data[i].ZipCode,
            data[i].Country);
        users.push(user);
    }
    return users;
};
module.exports.getUser = function (userId) {
        for (let i = 0; i < data.length; i++) {
          if(data[i].UserID == userId){
            let user = new User(
              data[i].UserID,
              data[i].FirstName,
              data[i].LastName,
              data[i].EmailAddress,
              data[i].Password,
              data[i].Address,
              data[i].City,
              data[i].State,
              data[i].ZipCode,
              data[i].Country)
              return user;
            }
          }
    
};

//hardcoded

var data = [
    {
      UserID: 1,
      FirstName: "Harshitha",
      LastName: "Keshavaraju Vijayalakshmi",
      EmailAddress: "hkeshava@uncc.edu",
      Password: "harshitha",
      Address:"11011 apt A, Graduate Lane",
      City:"Charlotte",
      State:"North Carolina",
      ZipCode: 28262,
      Country:"USA"
    },

    {
      UserID: 2,
      FirstName: "Jeevitha",
      LastName: "Keshavaraju Vijayalakshmi",
      EmailAddress: "jkeshava@uncc.edu",
      Password: "jeevitha",
      Address:"11012 apt A, Graduate Lane",
      City:"Bangalore",
      State:"Karnataka",
      ZipCode: 560047,
      Country:"India"
    }
];
