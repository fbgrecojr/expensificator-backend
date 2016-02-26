var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

// example user:
// var exampleUser = {
//     "firstName": "Jane",
//     "lastName": "Doe"
// };

var userSchema = new Schema({ // all validation done in handler via Joi
    firstName: { type: String },
    lastName: { type: String }
});

// methods ============

var user = Mongoose.model('user', userSchema);

module.exports = {
    User: user
};
