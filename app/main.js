var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var api = require('./routes/api');
var database = require('./config/database');
var bodyParser = require('body-parser');

//<<<<<<< Updated upstream
//require('../config/database');
//var expense = require('../models/expense').expense;

// var exp = require('../modules/createexpense');
// var find = require('../modules/find');

//some function

// var request = {
//   user : "user456",
//   vendor: "Walmart" ,
//   type :"dinner",
//   Totalamount: 300,
//   location : "India123",
//   datePurchased: "1-1-2016",
//   picture : "pcturebinarary"
// };

// exp(database.db, request);
// find(database.db);

//>>>>>>> Stashed changes

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// require api routes
require('./routes/api')(app);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
    res.json({
        'this': 'that',
        'something': 'something-else'
    });
});

app.post('/poster', function (req, res) {
    res.json({ 'cool': 'dude' }).status(200);
});

/*app.post('/saveExpense', function(req, res){
  var exp = new expense(req.body);

  expense.save(function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
  });
});

app.post('/findExpense', function(req,res){
  var exp = new expense(req.body);

  expense.find({type:'Groceries'}, function(error,data){
    console.log(data);
    res.json(data);
  });
}); */

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

//test
