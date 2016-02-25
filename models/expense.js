var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

// example expense:
// var exampleexpense = {
//     "user": "56514e10950cbe2f18f7ab8e",
//		"_id": "expense123"
//     "items": {{"water", 5},{"chips",6}};
//     "type": "Groceries",
//     "Totalamount": "75",
//		"dateSubmitted" = "1-1-2016",
//		"location" = "Chicago, Illinois" ,
//		"picture" = "6584fgtyguy86756"
// };

var expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    type: {type: String},
    totalAmount: {type: Number},
    location: {type: String},
    dateSubmitted: { type: String },
    picture: {type: String}
});

expenseSchema.index({ expense: '_id' });

var expense = Mongoose.model('expense', expenseSchema);

module.exports = {
    expense: expense
};