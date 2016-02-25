
var expenseentity = require('../models/expense').expense;
//var User = require('../../models/users').User;

//module.exports = function(request, reply){

module.exports = function(db){

	console.log("HELLO WORLD");
	
	//var exampleexpense = {"user": "56514e10950cbe2f18f7ab8e","type": "food", "Totalamount": "80","dateSubmitted": "1-1-2016","location": "Chicago, Illinois" ,"picture": "6584fgtyguy86756" };

	expenseentity.user = "userid"; 
	expenseentity.type = "dinner";
	expenseentity.Totalamount = 35;
	expenseentity.location = "India";
	expenseentity.dateSubmitted = Date();
	expenseentity.picture = "pcturebinarary";

console.log(expenseentity);

    db.collection('expense').insert(expenseentity);
}