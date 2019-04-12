//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//define the schema for our user model
var userSchema = mongoose.Schema({
	_id:{ type: Number, default: 1 },
	name: String,
	email: String,
    password: String,
    meals:[{
        date: Date,
        meal_id: String
    }],
    balance:String,
    spend_goal:[{
        amount: String,
        effective: Date,
        expires: Date
    }],
    nutri_goal:[{
        calories: Number,
        carbs: Number,
        fiber:Number,
        effective: Date,
        expires: Date
    }],
    avatar: String


});


//methods ======================
//generating a hash
userSchema.methods.generateHash = function(password) {
 return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = function(password) {
 return bcrypt.compareSync(password, this.password);
};

//create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);