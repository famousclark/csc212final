
//load the things we need
var mongoose = require('mongoose');

//define the schema for our meal model
var mealSchema = mongoose.Schema({
    _id:{ type: Number, default: 1 },
    meal_id: String,
    name: String,
    description:String,
    r_code: String,//restaurant code
    allergens: [String],
    serve_amount: Number,// amount of serving
    nutrition:{
        calories: Number,
        calories_fat: Number, 
        fat: {
            total: Number, 
            saturated: Number, 
            trans: Number
        }, 
        cholesterol: Number, 
        sodium: Number, 
        carbs:{
            total: Number, 
            fiber: Number, 
            sugars: Number
        }, 
        proteins: Number
    },
    image:String,
    price:String

});


//methods ======================



//create the model for users and expose it to our app
module.exports = mongoose.model('meals', mealSchema);