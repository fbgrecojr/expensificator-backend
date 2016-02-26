var expensefind = require('../models/expense').test;

module.exports = function(db, request){

	console.log("In find all");

	// Get the documents collection
    var collection = db.collection('expense');
console.log(collection);
    // Insert some users
    collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }

	//console.log (db.collection('expense').find());

	//console.log(expensefind);

	//expensefind.find({user: "user123"})
	  //     .sort({ dateSubmitted: -1 })
        //    .exec(function(err, exp){
          //      if (!err) {
            //        console.log(exp);
              //  	} else {
                //    return "Error";}
                //})
      }
 )};

//var query = expense.find();

//query.sort({dateSubmitted: 'desc'})
//	.limit(12)
//	.exec(function(err, results){
//console.log(results);

//	});

//var myCursor = db.collection('expense').find();
//console.log(myCursor);
//console.log (db.collection('expense').find());
//db.collection('expense').find({user: "user123"}, function(err, item){
//	console.log(item);
//});

//var myDocument = myCursor.hasNext() ? myCursor.next() : null;

//console.log(myCursor);

//var myDocument = myCursor.next();

//if (myDocument) {
  //  var myamount = myDocument.amount;
   // var myvendor= myDocument.vendor;
    //console.log(myamount);
    //console.log(myvendor);
    //print (tojson(myamount));
//}