var User = require('../models/users').User;
var Expense = require('../models/expense').Expense;
var Mileage = require('../models/mileage').Mileage;

module.exports = function (app) {
    var someFunc = function () {};

    app.get('/someUrl', someFunc);

    //add user
    app.post('/api/user', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        var newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            password: req.body.password
        };

        User.create(newUser, function (err, user) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(user);
            }
        });
    });
    
    //add expense
    app.post('/api/expense', function (req, res) {
        
        console.log(req.body);

        var newExpense = {
            user:           req.body.user,
            vendor:         req.body.vendor,
            type:           req.body.type,
            Totalamount:    req.body.amount,
            datePurchased:  req.body.date,
            picture:        req.body.picture,
            notes:          req.body.notes
        };

     
        Expense.create(newExpense, function (err, expense) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(expense);
            }
        });
    });


    app.post('/api/expenseemail', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        
         User.findOne({email: req.body.user}, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                
                var useruniqueid = user._id;
               
                 var newExpense = {
                    user:           useruniqueid,
                    vendor:         req.body.vendor,
                    type:           req.body.type,
                    Totalamount:    req.body.amount,
                    datePurchased:  req.body.date,
                    notes:          req.body.notes,
                    picture:        req.body.picture
                };

                console.log("expense");
                console.log(newExpense);

                Expense.create(newExpense, function (err, expense) {
                    if (err){
                        res.status(500).json(err);
                    } else {
                        res.status(201).json(expense);
                    }
                });
            }
        });   
    });

    //add mileage
    app.post('/api/mileage', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        var calcMileage = req.body.endingMileage - req.body.startingMileage;
        var today = new Date();
        var dd = today.getDate(); 
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear(); 

        var today = mm+'/'+dd+'/'+yyyy;

        var newMileage = {
            user:         req.body.user,
            totalMileage: calcMileage,
            dateSubmitted: today
        };

        Mileage.create(newMileage, function (err, mileage) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(mileage);
            }
        });
    });

    /*
    "expenseChanges":
    {
    "vendor": "this is changed again!!",
    "datePurchased": "01/01/11"
    }
    */
    app.put('/api/updateexpense/:id', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body.expenseChanges);
        var query = {_id: req.params.id};
        var update = req.body.expenseChanges;

        Expense.update(query, update, function (err, expense) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(expense);
            }
        });
    });

    //submit expense - update date submitted
    app.put('/api/submitexpense/', function (req, res) {
         // var newUser = new User(req.body);
        console.log(req.body);
        var today = new Date();
        var dd = today.getDate(); 
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear(); 

        var today = mm+'/'+dd+'/'+yyyy;

        var update = {dateSubmitted: today},
        options = { multi: true };

        console.log(req.body.expenseIDs);
        var query = {_id: {$in: req.body.expenseIDs}};
        Expense.update(query, update, options, function (err, expense) {
                if (err){
                    res.status(500).json(err);
                } else {
                    res.status(201).json(expense);
                }
            });
        });

    //delete expense
    app.delete('/api/expense/:id', function (req, res) {
        // var newUser = new User(req.body);
        console.log(req.body);
        var findById = {
            _id: req.params.id
        };
        
        Expense.remove(findById, function (err, expense) {
            if (err){
                res.status(500).json(err);
            } else {
                res.status(201).json(expense);
            }
        });
    });

    //retrieve user info
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

    app.get('/api/useremail/:email', function (req, res) {
        console.log(req.params);
        User.findOne({email: req.params.email}, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        });
    });
    
    //retrieve user's expenses
    app.get('/api/expense/:userId', function (req, res) {
        console.log(req.params);
        
        User.findOne({ _id: req.params.userId }, function(err, user){
            if (!err) {
                Expense.find({
                   $or: [
                       { user: user._id }
                   ]
                }).populate('user').exec(function(err, item){
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(item);
                    }
                });
            }
        });
    });

    //retrieve user's mileage
    app.get('/api/mileage/:userId', function (req, res) {
        console.log(req.params);
        
        User.findOne({ _id: req.params.userId }, function(err, user){
            if (!err) {
                Mileage.find({
                   $or: [
                       { user: user._id }
                   ]
                }).populate('user').exec(function(err, item){
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(item);
                    }
                });
            }
        });
    });

    
    app.get('/api/expenseemail/:email', function (req, res) {
        console.log(req.params);

        User.findOne({ email: req.params.email}, function(err, user){
            if (!err) {
                console.log(user);
                Expense.find({

                   $or: [
                       { user: user._id }
                   ]
                }).populate('user').exec(function(err, item){
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(item);
                    }
                });
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
