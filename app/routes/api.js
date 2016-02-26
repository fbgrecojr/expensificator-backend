var User = require('../models/users').User;

module.exports = function (app) {
    var someFunc = function () {};

    app.get('/someUrl', someFunc);

    app.post('/user', function (req, res) {

    });
};
