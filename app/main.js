var express = require('express'),
    app = express(),
    port = process.env.PORT || 8081;
require('../config/database');

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
