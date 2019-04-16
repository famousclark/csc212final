const express = require("express");
const router = express.Router();

var ctrlRestaurant = require('../../controllers/restaurant.controller');

router.get('/get/all', ctrlRestaurant.getAllRestaurants); /* Returns all restaurants. JSON body payload format :: {}*/
router.get('/get/', ctrlRestaurant.getRestaurant); /* Returns a restaurant matching the given restaurant code. JSON body payload format :: {"r_code":"someString"}*/
router.post('/add', ctrlRestaurant.saveRestaurant); /* Adds a new restaurant. JSON body payload format :: {"r_code":"someString", "name":"someString", "location":"someString", "campus":"someString", "type":"someString"}*/
router.post('/edit', ctrlRestaurant.editRestaurant); /* Edits a  restaurant matching the given restaurant code. JSON body payload format :: {"r_code":"someString", "name":"someString", "location":"someString", "campus":"someString", "type":"someString"}*/
router.post('/delete', ctrlRestaurant.deleteRestaurant); /* Deletes a restaurant matching the given restaurant code. JSON body payload format :: {"r_code":"someString"}*/




module.exports = router;