var mongoose = require('mongoose');

var home = require('../controllers/home');

var ctrlRestaurant = require('../controllers/restaurant.controller');
var ctrlUser = require('../controllers/user.controller');


//mongoose.model('restaurants');

//you can include all your controllers

module.exports = (app, passport, router) => {
  
  router
    .route('/login')
    .get(home.login)
    .post(passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

  router
    .route('/signup')
    .get(home.signup)
    .post(passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

  router
    .route('/')
    .get(home.loggedIn, home.home);//home
  router
    .route('/home')
    .get(home.loggedIn, home.home);//home


    // process the login form

    //routes for restaurants
    router.get('/api/restaurant/get/all', ctrlRestaurant.getAllRestaurants);
    router.get('/api/restaurant/get/', ctrlRestaurant.getRestaurant);
    router.post('/api/restaurant/add', ctrlRestaurant.saveRestaurant);
    router.post('/api/restaurant/edit', ctrlRestaurant.editRestaurant);
    router.post('/api/restaurant/delete', ctrlRestaurant.deleteRestaurants);
    

    //routes for user
    router.post('/api/user/add', ctrlUser.saveUser);
    router.get('/api/user/get/all', ctrlUser.getAllUsers);
    router.get('/api/user/get/', ctrlUser.getUserByEmail);
    router.post('/api/user/edit', ctrlUser.editUser);
    router.post('/api/user/delete', ctrlUser.deleteUser);

    router.post('/api/user/add/meal', ctrlUser.addMeal);
    router.post('/api/user/delete/meal', ctrlUser.deleteMeal);
    router.get('/api/user/get/meal/all', ctrlUser.getMeals);

    router.post('/api/user/edit/dplan', ctrlUser.editDiningPlan);

    router.post('/api/user/add/spendgoal', ctrlUser.addSpendGoal);
    router.get('/api/user/get/spendgoal/all', ctrlUser.getSpendGoals);

    router.post('/api/user/add/nutrigoal', ctrlUser.addNutriGoal);
    router.get('/api/user/get/nutrigoal/all', ctrlUser.getNutriGoals);





}
