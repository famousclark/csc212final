import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';
import Table from '@material-ui/core/Table';
import { TableRow, TableCell } from "@material-ui/core";

import * as ActionCreators from '../actions/Actions';

var readyToLoad = false;

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
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
  details: {
    fontSize : "20px",
    color: "white",
  },
  detailHeading:{
    fontSize: "16px",
    paddingTop: "24px",
  }

});

class BudgetContainer extends Component {

  readyToLoad = false;

  constructor(props){
    super(props);
    // (this : any).handleChange = this.handleChange.bind(this);
    // (this : any).handleChangeIndex = this.handleChangeIndex.bind(this);
    (this : any).handleLoadAsync = this.handleLoadAsync.bind(this);

      this.state = {
        userInfo: null
      };
  }
  loadAsyncUserData = (userEmail) =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getUser(userEmail);
      resolve(this.props.userInfo);
    }, 5000)
  });

  loadAsyncMealData = (userEmail) =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.getMeal(userEmail);
      resolve(this.props.userInfo);
    }, 1000)
  });

  handleLoadAsync = async () => {
    this._asyncRequest = this.loadAsyncUserData("1111@gmail.com")
    .then(
      userInfo => {
        this.readyToLoad = true;
        this.setState({userInfo});
    }
    )
    .then( () => {
      setTimeout ( () => {

        console.log( this.props.userInfo);
        console.log(this.state.userInfo);
      }, 1000)
    });
  }

  componentDidMount() {
    this.handleLoadAsync();
    //console.log(this.state);
    /*
    fetch("localhost:5000/api/users/get/",
    { method: 'GET',
      body: '{email : "1111@gmail.com"}',
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
      */
  }

  render(){
    const { classes, theme, dir, open, userInfo} = this.props;
    //const { userInfo } = this.props;


      if (this.readyToLoad && userInfo.d_plan != null) {
        console.log(userInfo);
        return(
          <TabContainer className={classes.root} dir={dir}>
            <AppBar
              position="static"
              color="white"
              elevation="0"
              className={classes.appBar}>
              <Typography
                align="center"
                variant="h6"
                style={{ padding: "12px" }}>
                  UR EATS
              </Typography>
            </AppBar>
            <section className={classes.content}>
              <div style={{background: "linear-gradient(rgba(119,229,227,0), rgba(242, 0, 88,1))"}}>
                {/* <Paper elevation={0}> */}
                <Typography align="center" variant="body1" style={{padding: "40px" }}>
                  Declining Left to Spend Today:
                  <Typography align="center" variant="h2" style={{ padding: "24px" }}>
                  $ 6.65
                  </Typography>
                </Typography>

                <Typography align="center" style={{ padding: "24px" }}>
                    You are doing great, {userInfo.name}. Keep up UR healthy eats
                </Typography>


                {/* <Paper style={{}} elevation={2}> */}
                <Table className={classes.table}>
                  <TableRow>
                    <TableCell style={{padding: "0px 0px 20px 20px"}}>
                    <div className={classes.detailHeading}>
                      Meal Plan
                      <div className={classes.details}>Option A Declining</div>
                    </div>
                    </TableCell>
                    <TableCell style={{padding: "0px 0px 20px 20px"}}>
                      <div className={classes.detailHeading}>
                      Daily Budget
                      <div className={classes.details}> 30.00</div>
                      </div>

                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{padding: "0px 0px 20px 20px"}}>
                      <div className={classes.detailHeading}>
                    Declining
                     <div className={classes.details}>
                      {userInfo.d_plan.balance}
                     </div>
                     </div>
                    </TableCell>
                    <TableCell style={{padding: "0px 0px 20px 20px"}}>
                      <div className={classes.detailHeading}>
                      Swipes
                      <div className={classes.details}> 0</div>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>

                {/* <Typography style={{ padding: "24px" }}>
                   Meal Plan
                   <span style={{float:"right"}}>Option A Declining</span>
                  </Typography>
                  <Typography style={{ padding: "24px" }}>
                   Daily Budget
                   <span style={{float:"right"}}>30.00</span>
                  </Typography>
                  <Typography style={{ padding: "24px" }}>
                   URos
                   <span style={{float:"right"}}>32.12</span>
                  </Typography>
                  <Typography style={{ padding: "24px" }}>
                   Declining
                   <span style={{float:"right"}}>980.30</span>
                  </Typography>
                  <Typography style={{ padding: "24px" }}>
                   Swipes
                   <span style={{float:"right"}}>0</span>
                  </Typography> */}
                {/* </Paper> */}
              </div>

            </section>
          </TabContainer>
        );
      }else{
        return(
          <div>loading</div>
        );
      }


  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.app.userInfo,
    mealInfo: state.app.mealInfo,
    restaurantInfo: state.app.restaurantInfo
  }
}

function mapActionCreatorsToProps(dispatch: Object) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(styles,{ withTheme: true })(BudgetContainer));
