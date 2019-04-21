const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const restaurants = require("./routes/api/restaurants");
const meals = require("./routes/api/meals");
const cors = require('cors');


const app = express();

app.use(cors());
// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// DB Config
const db = require("./config/database").mongoURL;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/restaurants", restaurants);
app.use("/api/meals", meals);
app.use("/api/reviews", reviews);



const seed = require("./seed/seeder");




const port = process.env.PORT || 5000; // process.env.port is Heroku's port when we're ready to deploy
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
//mongoose.connect(config.DB,{ useNewUrlParser: true });
