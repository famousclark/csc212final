import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Assignment from '@material-ui/icons/Assignment';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import { TableRow, TableCell } from "@material-ui/core";

import * as ActionCreators from '../actions/Actions';

import wok from '../images/wok.jpg';
import grill from '../images/grill.jpg';
import starbucks from '../images/starbucks.jpg';
import rocky from '../images/rocky.jpg';
import pizza from '../images/pizza.jpg';
import freshens from '../images/freshens.jpg';
import dfo from '../images/dfo.jpg';
import douglass from '../images/douglass.jpg';

// import forest from '../images/forest.jpg';

import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';


var readyToLoad = false;
var readyToLoadMeals = false;
var readyToLoadReviews = false;

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

{/* ==============================================
  Here is where css should go, attributes use camel case (marginLeft => good, margin-left => bad)
  ==============================================*/}
  const styles = theme => ({
    root: {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
       overflow: 'hidden',
       backgroundColor: theme.palette.background.paper,
     },
     gridList: {
       width: 500,
       height: 450,
     },
    inline: {
      display: 'inline',
    },
    appBar: {
      top: 'auto',

    },
    details: {
      fontSize : "20px",
      color: "white",
    },
    detailHeading:{
      fontSize: "16px",
      paddingTop: "24px",
    },
    icon: {
      fontSize: 120,
      paddingTop: "50px",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto"
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
    },
    progress: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-120px",
      zIndex: 1,
      margin: theme.spacing.unit * 2,
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    tabsContainer: {
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto"
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    colorPrime:{
      background: "#fff"
    },
    progress: {
      margin: "45% 45%",
      color: "white",
      // margin: theme.spacing.unit * 2,
    },
    selectButton: {
      textAlign:"center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "40%",
      height: "50px"
    }
});

{/* ==============================================
  Here is where css should go, attributes use camel case (marginLeft => good, margin-left => bad)
  ==============================================*/}

class EatContainer extends Component {

  constructor(props: Object){
    super(props);
    (this : any).handleChange = this.handleChange.bind(this);
    (this : any).handleChangeIndex = this.handleChangeIndex.bind(this);
    (this : any).handleLoadAsync = this.handleLoadAsync.bind(this);
    (this : any).handleLoadMealsAsync = this.handleLoadMealsAsync.bind(this);
    (this : any).handleLoadReviewsAsync = this.handleLoadReviewsAsync.bind(this);
    (this : any).handleImageLoad = this.handleImageLoad.bind(this);
    (this : any).handleMenu = this.handleMenu.bind(this);
      this.state = {
        value: 0,
        allRestaurants: null,
        allMeals: null,
        isNutri: false
      };
  }


  decodeToken  = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  getLoggedInUserEmail = () =>{
    var email = this.decodeToken(localStorage.getItem('token')).email;
    return email;
  }

  changeAsyncMacro = (carb, protein, fat) =>  new Promise( (resolve, reject) => {
    var email = this.getLoggedInUserEmail();
    var c_total = this.props.userInfo.macros.total;
    var c_carb = this.props.userInfo.macros.carb;
    var c_protein = this.props.userInfo.macros.protein;
    var c_fat = this.props.userInfo.macros.fat;

    var new_total = c_total - (carb *4)-(protein * 4) -(fat *9 );
    var new_carb = c_carb - (carb *4);
    var new_protein = c_protein - (protein * 4);
    var new_fat = c_fat - (fat *9 );

    var payload = {
      email : email,
      macros:{
        total: new_total,
        fat : new_fat ,
        protein :new_protein,
        carb: new_carb
      }
    }
    setTimeout( () => {
      this.props.editUser(payload);
    }, 1000)
  });

  loadAsyncRestaurantData = () =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getAllRestaurants();
      resolve(this.props.restaurantInfo);
    }, 1000)
  });

  loadAsyncMealsData = (r_code) =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getAllMealsByRestaurant(r_code);
      resolve(this.props.allMeals);
    }, 1000)
  });

  loadAsyncResetMealsData = () =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.resetMeals();
      resolve(this.props.allMeals);
    }, 1000)
  });

  loadAsyncReviewsData = () =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getAllReviews();
      resolve(this.props.allReviews);
    }, 1000)
  });

  handleLoadAsync = async () => {
    this._asyncRequest = this.loadAsyncRestaurantData()
    .then(
      allRestaurants => {
        this.readyToLoad = true;
        this.setState({allRestaurants});
    }
    )
    .then( () => {
      setTimeout ( () => {

        console.log( this.props.restaurantInfo);
        console.log(this.state.restaurantInfo);
      }, 1000)
    });
  }

  handleLoadMealsAsync = async (r_code) => {
    this._asyncRequest = this.loadAsyncMealsData(r_code)
    .then(
      allMeals => {
        this.readyToLoadMeals = true;
        this.setState({allMeals});
    }
    )
    .then( () => {
      setTimeout ( () => {

        console.log( this.props.restaurantInfo);
        console.log(this.state.restaurantInfo);
      }, 1000)
    });
  }

  handleLoadReviewsAsync = async () => {
    this._asyncRequest = this.loadAsyncReviewsData()
    .then(
      allReviews => {
        this.readyToLoadReviews = true;
        this.setState({allReviews});
    }
    )
    .then( () => {
      setTimeout ( () => {

        console.log( this.props.restaurantInfo);
        console.log(this.state.restaurantInfo);
      }, 1000)
    });
  }

  handleResetMealsAsync = async () => {
    this._asyncRequest = this.loadAsyncResetMealsData()
    .then(
      allMeals => {
        this.readyToLoadMeals = true;
        this.setState({allMeals});
    }
    )
    .then( () => {
      setTimeout ( () => {

        console.log( this.props.restaurantInfo);
        console.log(this.state.restaurantInfo);
      }, 1000)
    });
  }


  componentDidMount() {
    this.handleLoadAsync();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleRest = () => {
    this.handleResetMealsAsync();
  }

  handleImageLoad = (image_name) => {
    var image = "";
    switch (image_name) {
      case "Wok on Up":
        image = wok;
        break;

      case "The Grill":
        image = grill;
        break;

      case "Starbucks":
        image = starbucks;
        break;

      case "Rocky's Sub Shop":
        image = rocky;
        break;

      case "Pizza Pi":
        image = pizza;
        break;

      case "Freshens":
        image = freshens;
        break;

      case "Douglass":
        image = douglass;
        break;

      case "Danforth Dining":
        image = dfo;
        break;

      default:
        image = wok;
    }
    return image
  }

  handleMenu = (r_code) => {
    this.handleLoadMealsAsync(r_code);
  }

  handleShowReviews = () => {
    this.handleLoadReviewsAsync();
  }

  render(){
    const { classes, theme, dir, open, allRestaurants, allMeals} = this.props;

    const screenHeight = window.innerHeight - 56*2;
    var meals="";

    if (this.readyToLoad && allRestaurants!= null) {

      console.log(allRestaurants);
      console.log(allMeals);

      if(this.readyToLoadMeals && (allMeals.length > 0)){
        console.log(allMeals);
        meals = (
          <div>
          {allMeals.map( meal => (
            <div key={meal._id} >
              <Typography align="center" variant="body1" style={{padding: "40px", paddingTop: "5rem"}}>
                {meal.name}
                <Typography align="center" variant="h2" style={{ padding: "24px" }}>
                {meal.price}
                </Typography>
              </Typography>
              <Typography align="center" style={{ padding: "24px" }}>
                {meal.allergens}
              </Typography>
              <Table style={{marginBottom: "3rem"}} className={classes.table}>
                <TableRow>
                  <TableCell style={{padding: "0px 0px 20px 20px"}}>
                    <div className={classes.detailHeading}>
                      Total Fat
                      <div className={classes.details}>
                        {meal.nutrition.fat.total}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{padding: "0px 0px 20px 20px"}}>
                    <div className={classes.detailHeading}>
                      Total Carbs
                      <div className={classes.details}>
                        {meal.nutrition.carbs.total}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{padding: "0px 0px 20px 20px"}}>
                    <div className={classes.detailHeading}>
                      Calories
                     <div className={classes.details}>
                      {meal.nutrition.calories}
                     </div>
                   </div>
                  </TableCell>
                  <TableCell style={{padding: "0px 0px 20px 20px"}}>
                    <div className={classes.detailHeading}>
                      Cholesterol
                      <div className={classes.details}>
                        {meal.nutrition.cholesterol}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>



              </Table>

              <Typography align="center"  style={{ padding: "24px" }}>
                <Button
                  variant="contained"
                  style={{backgroundColor:"rgba(108, 0, 245, 0.54)", color: "white"}}
                  className={classes.selectButton}
                  onClick={() => this.changeAsyncMacro(meal.nutrition.carbs.total,meal.nutrition.fat.total ,meal.nutrition.proteins)}>
                  Select
                </Button>

              </Typography>
            </div>
            ))}
          </div>
        );

      }

      var listItems = allRestaurants.map( item => (
        <Grid key={item._id} item xs={12} sm={6}>
          <Typography align="center" variant="body1" style={{padding: "40px" }}>
            <Card className={classes.card}>
              <CardActionArea >
                <CardMedia
                  className={classes.media}
                  image={this.handleImageLoad(item.name)}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography component="p">
                    Location: {item.location}
                  </Typography>
                  <Typography component="p">
                    Type: {item.type}
                  </Typography>
                  <Typography component="p">
                    Campus: {item.campus}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => this.handleMenu(item.r_code)}>
                  Menu
                </Button>
                {/*
                <Button size="small" color="primary">
                  Review
                </Button>
                */}
              </CardActions>
            </Card>
          </Typography>
        </Grid>
      ));

      var section = (
        <section className={classes.content}>
          <div style={{flexGrow: 1, background: "linear-gradient(rgba(119,229,227,0), rgba(242, 0, 88,1))", minHeight:('' + screenHeight+'px')}}>
            {(allMeals.length > 0) ? meals :
              <Grid container spacing={24}>
                {listItems}
              </Grid>
            }
          </div>
        </section>
      );
    } else {

      var section = (
        <div style={{background: "linear-gradient(rgba(119,229,227,0), rgba(242, 0, 88,1))", minHeight:('' + screenHeight+'px')}}>
          <div>
            <CircularProgress className={classes.progress} />
           </div>
        </div>
      );
    }

    return(
      <TabContainer className={classes.root} dir={dir}>
          <AppBar
            position="fixed"
            color="primary"
            elevation="0"
            classes={{
              colorPrimary: classes.colorPrime
            }}
            className={classes.appBar}>
            <Toolbar className={classes.toolbar}>

              <Typography
                align="center"
                variant="h6"
                style={{ padding: "12px", marginTop: "15px" }}>
                  UR EATS
              </Typography>
              {(allMeals.length > 0) ?
                <IconButton color="primary" onClick={() => this.handleRest()}>
                  <ArrowBack />
                </IconButton>
              :
                <IconButton color="primary" onClick={() => this.handleShowReviews()}>
                  <Assignment />
                </IconButton>
              }
            </Toolbar>
          </AppBar>
          {section}
      </TabContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.app.userInfo,
    mealInfo: state.app.mealInfo,
    allRestaurants: state.app.allRestaurants,
    allMeals: state.app.allMeals,
    allReviews: state.app.allReviews
  }
}

function mapActionCreatorsToProps(dispatch: Object) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(styles, {withTheme: true })(EatContainer));
