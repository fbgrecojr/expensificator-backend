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

var mileageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    totalMileage: {type: Number},
    dateSubmitted: { type: String }
});

mileageSchema.index({ mileage: '_id' });

var mileage = Mongoose.model('mileage', mileageSchema);

module.exports = {
    Mileage: mileage
};