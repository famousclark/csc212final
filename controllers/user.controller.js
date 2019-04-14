
const User = require('../models/user.model') ;


module.exports.saveUser = (req,res,next) => {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.meals = [];
    user.d_plan = req.body.d_plan;
    spend_goal=[];
    user.nutri_goal= [];
    user.diet= req.body.diet;
    user.profile_pic= "some url";


    user.save((err, user) => {
        if(!err) {
            res.send(user);
        }
        else {
            return next(err);
        }
    });
}

module.exports.getAllUsers = (req,res) => {

    User.find().sort('-name').find(function (err, users) {
        if(!err) {
            res.send(users)
        }
        else{
            return next(err);
        }
    });

}

module.exports.getUserByEmail = (req, res, next) => {
    User.findOne({ email: req.email },
        (err, user) => {
            if(!user)
                return res.status(404).json({ status: false, message: 'User record not found' });
            else 
                return res.status(200).send(user);
        }
    );
}



module.exports.editUser = (req,res,next) => {


    User.findOneAndUpdate(
        { email: req.body.email }, 
        { $set: { 
                  name : req.body.name,
                  email : req.body.email,
                  password : req.body.password,
                  meals : req.body.meals,
                  d_plan : req.body.d_plan,
                  spend_goal : req.body.spend_goal,
                  nutri_goal : req.body.nutri_goal,
                  diet : req.body.diet,
                  profile_pic : req.body.profile_pic,

               } 
        }, function (err, user) {


            if (!err) {
                res.send(user);
        }
            else {
              res.send(user);
            }
          }
        
        );

}

module.exports.deleteUser  = (req,res,next) => {

    User.remove({ email: req.body.email }, function(err) {
        if (!err) {
                res.status(200).json(true);
        }
        else {
              res.status(500).json(false);
        }
    });


}
