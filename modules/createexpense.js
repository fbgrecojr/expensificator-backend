
var expenseentity = require('../models/expense').test;
//var User = require('../../models/users').User;

//module.exports = function(request, reply){

module.exports = function(db, request){

	console.log("HELLO WORLD");
	
	//var exampleexpense = {"user": "56514e10950cbe2f18f7ab8e","type": "food", "Totalamount": "80","dateSubmitted": "1-1-2016","location": "Chicago, Illinois" ,"picture": "6584fgtyguy86756" };
 
	expenseentity.user = request.user;
	expenseentity.vendor = request.vendor;
	expenseentity.type = request.type;
	expenseentity.Totalamount = request.Totalamount;
	expenseentity.location = request.location;
	expenseentity.dateSubmitted = Date();
	expenseentity.datePurchased = request.datePurchased;
	expenseentity.picture = request.picture;

console.log(expenseentity);

    
    db.collection('expense').insert(expenseentity);

    
}