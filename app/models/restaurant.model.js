
//load the things we need
var mongoose = require('mongoose');

//define the schema for our restaurant model
var restaurantSchema = mongoose.Schema({
	_id:{ type: Number, default: 1 },
	name: String,
    type: String,
    location: String,
    campus: String,
    r_code: String
});


//methods ======================


//create the model for users and expose it to our app
module.exports = mongoose.model('restaurants', restaurantSchema);