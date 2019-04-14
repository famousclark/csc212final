//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');

//define the schema for our user model
var userSchema = new mongoose.Schema({
	//_id:{ type: Number, default: 1 },
	name:  {
        type: String,
        required: 'Full name can\'t be empty'
    },
	email:  {
        type: String,
        required: 'Email can\'t be empty',
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: 'Password name can\'t be empty',
        minlength : [4,'Password must be at least 4 character long']
    },
    meals:[{
        date: Date,
        meal_id: String
    }],
    d_plan:{
        plan: String,
        balance:String
    },
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
    diet:String, // especial dietary restrictions
    profile_pic: String


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
//custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);