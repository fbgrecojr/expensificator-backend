var Mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var config = require('./config');

var options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeOutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeOutMS: 30000
        }
    }
};

// var mongodburi = 'mongodb://user:password@host:port/db'
var mongodburi = 'mongodb://' +
 config.database.username + ':' +
   config.database.password + '@' +
    config.database.host + ':' +
    config.database.port + '/' +
    config.database.db;

 //var mongodburi = 'mongodb://admin:admin@ds017258.mlab.com:17258/expensificator';   

var mongooseUri = uriUtil.formatMongoose(mongodburi);

Mongoose.connect(mongooseUri, options);

var db = Mongoose.connection;

db.on('error', console.error.bind('console', 'connection error'));

db.once('open', function callback(){
    console.log('database connected');
});

var expense_data = {
    user: '769786saf443543saf79809hgf',
    items: '{"water", 5},{"chips",6}',
    type: 'Groceries',
    Totalamount: 11.50,
    location: 'Los Angeles, California',
    dateSubmitted: '2-25-2016',
    picture: '234fdlkj34sr3084lkdfj'
/*var expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    items: { {type: String }, {type: Number} },
    type: {type: String},
    totalAmount: {type: Number},
    location: {type: String},
    dateSubmitted: { type: String },
    picture: {type: String}
});*/
};

var expense = new expense(expense_data);

expense.save(function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
});

expense.find({type:'Groceries'}, function(error,data){
    console.log(data);
    res.json(data);
})

exports.Mongoose = Mongoose;

exports.db = db;