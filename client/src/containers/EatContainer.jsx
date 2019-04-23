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
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as ActionCreators from '../actions/Actions';

import dfo from '../images/dfo.jpg';
// import douglass from '../images/douglass.jpg';
// import med from '../images/med.jpg';
// import pit from '../images/pit.jpg';
// import forest from '../images/forest.jpg';


import Toolbar from '@material-ui/core/Toolbar';

import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';


var readyToLoad = false;

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
    icon: {
      fontSize: 120,
      paddingTop: "50px",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto"
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

      this.state = {
        value: 0,
        allRestaurants: null
      };
  }

  loadAsyncRestaurantData = () =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getAllRestaurants();
      resolve(this.props.restaurantInfo);
    }, 1000)
  });

  loadAsyncMealData = (userEmail) =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getMeal();
      resolve(this.props.userInfo);
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

  componentDidMount() {
    this.handleLoadAsync();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render(){
    const { classes, theme, dir, open, allRestaurants} = this.props;

    const screenHeight = window.innerHeight - 56*2;


    if (this.readyToLoad && allRestaurants!= null) {
      var section = (
          <section className={classes.content}>
            <div style={{flexGrow: 1, background: "linear-gradient(rgba(119,229,227,0), rgba(242, 0, 88,1))", minHeight:('' + screenHeight+'px')}}>
              <Grid container spacing={24}>

                <Grid item xs={12} sm={6}>
                  <Typography align="center" variant="body1" style={{padding: "40px" }}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={dfo}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Douglas
                          </Typography>
                          <Typography component="p">
                            Premium dinning hall at the Universty of Rochester
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Menu
                        </Button>
                        <Button size="small" color="primary">
                          Review
                        </Button>
                      </CardActions>
                    </Card>
                  </Typography>
                </Grid>
              </Grid>

            {/*
            <SwipeableViews
              className={classes.tabsContainer}
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}>
            */}

                {/*
                <List className={classes.root}>
                  <ListItem alignItems="flex-center">
                    <Paper levation={5}>
                      <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={dfo} />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography component="span" className={classes.inline} color="textPrimary">
                                Ali Connors
                              </Typography>
                              {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                          }/>
                      </Typography>
                    </Paper>
                  </ListItem>
                </List>

                <Paper levation={5}>
                  <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={dfo}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Danforth
                          </Typography>
                          <Typography component="p">
                            Loreum ipseum
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Typography>
                </Paper>
                <Paper style={{ background: "#DDD"}} elevation={2}>
                  <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={douglass}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Douglass
                          </Typography>
                          <Typography component="p">
                            Lunch Hours until 3:30PM
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Typography>
                </Paper>
                <Paper style={{ background: "#DDD"}} elevation={2}>
                  <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={med}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Medical Center
                          </Typography>
                          <Typography component="p">
                            Open until 6 PM
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Typography>
                </Paper>
                <Paper style={{ background: "#DDD"}} elevation={2}>
                  <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={pit}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Pit
                          </Typography>
                          <Typography component="p">
                            Open until 11 PM
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Typography>
                </Paper>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <Paper levation={5}>
                  <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                    Your Balance
                  </Typography>
                </Paper>
                <Paper style={{ background: "#DDD"}} elevation={2}>
                  <Typography style={{ padding: "24px" }} paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                    elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                    hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                    velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                    Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                    viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                    Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                    at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                    ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                  </Typography>
                </Paper>
              */}

            {/*
            </SwipeableViews>
            */}
            </div>
          </section>
      ) 
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
      //<CssBaseline />
      <TabContainer className={classes.root} dir={dir}>
          <AppBar
            position="static"
            color="primary"
            elevation="0"
            classes={{
              colorPrimary: classes.colorPrime
            }}
            className={classes.appBar}>
            <Typography
              align="center"
              variant="h6"
              style={{ padding: "12px" }}>
                UR EATS
            </Typography>
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
    allRestaurants: state.app.allRestaurants
  }
}

function mapActionCreatorsToProps(dispatch: Object) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(styles, {withTheme: true })(EatContainer));
