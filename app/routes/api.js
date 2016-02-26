var User = require('../models/users').User;
var Expense = require('../models/expense').Expense;

module.exports = function (app) {
    var someFunc = function () {};

    app.get('/someUrl', someFunc);

    app.post('/api/user', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        var newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };

        User.create(newUser, function (err, user) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(user);
            }
        });
    });
    
    app.post('/api/expense', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        var newExpense = {
            user:           req.body.user,
            vendor:         req.body.vendor,
            type:           req.body.type,
            Totalamount:    req.body.amount,
            datePurchased:  req.body.date,
            picture:        req.body.picture
        };

        Expense.create(newExpense, function (err, expense) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(expense);
            }
        });
    });


    app.get('/api/user/:id', function (req, res) {
        console.log(req.params);

        var findById = {
            _id: req.params.id
        };

        User.findOne(findById, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        });
    });

    // get all
    app.get('/api/users', function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.json(err);
            } else {
                res.send(users);
            }
        });
    });

};
