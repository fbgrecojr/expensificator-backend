
//var expenseentity = require('../models/expense');
var mongoose = require('mongoose');
var expenses = mongoose.model('expense');
//var User = require('../../models/users').User;

//module.exports = function(request, reply){

	function readAll(collection, cb){
		collection.find({}, cb);
	}

	function printAccount(account){
		if(!account){
			console.log("Couldn't find account");
		}
		console.log("Account from Array");
	}

	function printAccounts(accounts, cb){
		accounts.each(function(err,account){
			if(err) return cb(err);
			printAccount(hero);
		});
	}

	function get_accounts(cb, collection){
			function processAccounts(err, accounts){
				if(err) return cb(err);

				accounts.each(function(err,account){
					if(err) return cb(err)
					if(hero){
						printAccount(hero);
					} else{
						collection.db.close();
						cb();
					}
				})
			}
			readAll(collection, processAccounts);
		}
	}

module.exports = function(db){
	var collection = db.collection('expense');

	get_accounts(function(err, collection){
		if(err) {
			console.log("had an error!", err);
			process.exit(1);
		}
	});



	//if(err) {return console.dir(err);}

	//console.log('got here');
	/*db.collection('expense').findOne({user: 'userid'}).toArray(function (err, result){
		if(err){
			console.log(err);
		}else if (result.length) {
			console.log('Found:', result);
		}else{
			console.log('No document(s) found with defined "find" criteria!');
		}
	});*/

	/*db.collection('expense').find({user: "userid2"}, function(err, user){
		if( err || !user) console.log("No users found");
		else user.forEach(function(allExpenses){
			console.log(user);
		});
		
	});*/

	////THIS WORKS
	/*var collection = db.collection('expense');
	collection.findOne({user:"userid2"}, function(err,exp){
		if(err) console.log("No users found");
		else
		console.log(exp)
	});*/

	/*expenses.findOne({user:"userid2"}, 'user Totalamount', function(err, exp)
	{
		if (err) console.log("No users found");
		console.log('%s %s', exp.user, exp.Totalamount);

	});*/

//console.log(allItems);
}