var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var api = require('./routes/api');
var database = require('./config/database');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

//test
