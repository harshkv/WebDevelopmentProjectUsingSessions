var express = require('express');
var session = require('express-session');
var app = express();
app.listen(8057);
console.log('Listening to port 8080')
app.set('view engine', 'ejs');
app.use('/css', express.static('./css'));
app.use('/Images', express.static('./Images'));
app.use(session({secret: 'personname'}));
var catalogController = require('./controller/catalogController.js');
var profileController = require('./controller/profileController.js');


app.use('/',profileController);
app.use('/catalogController',catalogController);
app.use('/catalogController/categories',catalogController);
app.use('/catalogController/categories/item/:itemCode',catalogController);
app.use('/catalogController/about',catalogController);
app.use('/catalogController/contact',catalogController);
app.use('/catalogController/feedback/:itemCode',catalogController);
app.use('/myitems',profileController);
// app.use('/profileController',profileController);
app.use('/save/:itemCode',profileController);
app.use('/deleteItem/:itemCode',profileController);
app.use('/updateRating/:itemCode',profileController);
app.use('/updateMadeit/:itemCode',profileController);
module.exports = app ;
