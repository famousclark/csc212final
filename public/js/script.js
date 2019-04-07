var home = require('../app/controllers/home');

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

}
