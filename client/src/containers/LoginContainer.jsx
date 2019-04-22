import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as ActionCreators from '../actions/Actions';


import {bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CssBaseline from '@material-ui/core/CssBaseline';
import SwipeableViews from 'react-swipeable-views';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import BudgetIcon from '@material-ui/icons/Assessment'
import EatIcon from '@material-ui/icons/Restaurant';
import CommunityIcon from '@material-ui/icons/People'
import ProfileIcon from '@material-ui/icons/Person'
import LogOutIcon from '@material-ui/icons/ExitToApp'
import TextField from '@material-ui/core/TextField';

import BudgetContainer from './BudgetContainer';
import EatContainer from './EatContainer';
import CommunityContainer from './CommunityContainer';
import { log } from "util";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
     marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  topper: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "rgba(0,0,0,.5)",
    width: drawerWidth,
  },
  drawerHeader: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  fabHolder: {
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    margin: '0 auto'
  },
  colorPrimary: {
    color: "#fff"
  },
  button:{
    width: "100px",
    margin: "10px",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "195px",
  },
  icon: {
    fontSize: 180,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logInbutton: {
    margin: "15% 22%",
    textAlign:"center",
  }
});

class LoginContainer extends Component {

  constructor(props: Object){
    super(props);
    (this : any).handleChange = this.handleChange.bind(this);
    (this : any).handleChangeIndex = this.handleChangeIndex.bind(this);
  //  (this : any).handleLoadAsync = this.handleLoadAsync.bind(this);

    (this : any)
      .state = {
        value: 1,
        open: false,
        wide: false,
        isLoggedIn: true,
        email: "",
        password: "",
        confirmPassword: "",
        name:"",
        d_plan:"",
      };

  }

  onHandleLogin = (event) => {
  //  event.preventDefault();

  //  let email = event.target.email.value;
  //  let password = event.target.password.value;


    // const data = {
    //   email, password
    // };

  //   this.props.dispatch(ActionCreators.loginUser(data));
      this.loginUser({email:this.state.email, password:this.state.password})
  }


  loginUser = (data) =>  new Promise( (resolve, reject) => {
    setTimeout( () => {
      this.props.loginUser(data);
      resolve(this.props.userInfo);
    }, 200)
  });

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChangeEmail = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  handleChangePassword = password => event => {
    this.setState({
      [password]: event.target.value,
    });
  };

  handleChangeConfirmPassword = confirmPassword => event => {
    this.setState({
      [confirmPassword]: event.target.value,
    });
  };

  handleChangeName = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeD_Plan = d_plan => event => {
    this.setState({
      [d_plan]: event.target.value,
    });
  };

  render() {

    const { classes, theme, userInfo,result, allUsersInfo} = this.props;
    const { open, value, isLoggedIn } = this.state;
    var base = "";



    if (userInfo.hasOwnProperty('success')) {

      if (userInfo.success == true) {
        localStorage.removeItem('token');
        localStorage.setItem('token', userInfo.token);
        this.state.isLoggedIn = true;
      }
    }





    //if logged in show the app with budget page, else show log in/register page
    if(isLoggedIn){
    base = (
      <div className={classes.root} style={{width: "100%"}}>
      <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open && !(theme.breakpoints.up('sm'))
          })}>
          <Toolbar disableGutters={!open}>
            {/* <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton> */}
            <Tabs
              style={{flexGrow: "1"}}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              centered>
              <Tab label="Budget" />
              <Tab label="Eat" />
              <Tab label="Community" />
            </Tabs>
          </Toolbar>
        </AppBar>

       <nav  className={classes.drawer}>
        </nav>

        <main
          className={classNames(classes.content, {[classes.contentShift]: open && !(theme.breakpoints.up('sm'))})}>
            {value === 0 &&<BudgetContainer open={open} dir={theme.direction}/>}
            {value === 1 &&<EatContainer open={open} dir={theme.direction}/>}
            {value === 2 &&<CommunityContainer open={open} dir={theme.direction}/>}
        </main>
        </div>
    );
    } else {
      var screenHeight = window.innerHeight;
        base = (
        <div style={{background: "linear-gradient(rgba(119,229,227,0), rgba(242, 0, 88,1))", minHeight:('' + screenHeight+'px'), width:"100%"}}>
          <div className={classes.logInbutton}>
          <Typography style={{fontSize:"25px", color:"white", textAlign:"center", paddingBottom:"10px"}}>
            UR EATS
          </Typography>
          <AppBar position="static" color="secondary">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 &&
        <TabContainer>
          <form className={classes.container} autoComplete="off" >
          <TextField
          id="outlined-name"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChangeEmail('email')}
          margin="normal"
          variant="outlined"
          />
          <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          type="password"
          onChange={this.handleChangePassword('password')}
          margin="normal"
          variant="outlined"
          />
           <Button variant="contained" style={{backgroundColor:"white"}} className={classes.button} onclick={this.onHandleLogin()}>
          Submit
        </Button>
          </form>

        </TabContainer>}
        {value === 1 && <TabContainer>
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChangeName('name')}
          margin="normal"
          variant="outlined"
          />
          {/* <TextField
          id="d_plan"
          label="Meal Plan"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChangeD_Plan('d_plan')}
          margin="normal"
          variant="outlined"
          /> */}
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
          htmlFor="d_plan">
           Meal Plan
          </InputLabel>
          <Select
            value={this.state.d_plan}
            onChange={this.handleChangeD_Plan('d_plan')}
            input={
              <OutlinedInput
                labelWidth="75"
                name="d_plan"
                id="d_plan"
              />
            }
          >
            <MenuItem value="">
              <em>Choose Meal Plan</em>
            </MenuItem>
            <MenuItem value={"MelUlm"}>Meliora Unlimited</MenuItem>
            <MenuItem value={"BlueUlm"}>Blue Unlimited</MenuItem>
            <MenuItem value={"150Pass"}>150 Pass</MenuItem>
            <MenuItem value={"OptionA"}>Option A Declining</MenuItem>
            <MenuItem value={"OptionB"}>Option B Declining</MenuItem>
            <MenuItem value={"OptionC"}>Option C Declining</MenuItem>
            <MenuItem value={"OptionD"}>Option D Declining</MenuItem>
            <MenuItem value={"Com"}>Commuter</MenuItem>
          </Select>
        </FormControl>

          <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChangeEmail('email')}
          margin="normal"
          variant="outlined"
          />
          <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          type="password"
          onChange={this.handleChangePassword('password')}
          margin="normal"
          variant="outlined"
          />
          <TextField
          id="confirm_password"
          label="Confirm Password"
          className={classes.textField}
          value={this.state.confirmPassword}
          type="password"
          onChange={this.handleChangeConfirmPassword('confirmPassword')}
          margin="normal"
          variant="outlined"
          />
          <Button variant="contained" style={{backgroundColor:"white"}} className={classes.button}>
          Submit
        </Button>
          </form>
          </TabContainer>}
           </div>
        </div>
        );
    }

    return (
      <div className={classes.root}>
      <CssBaseline />
       {base}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.app.userInfo,
    allUsersInfo: state.app.allUsersInfo

  }
}
function mapActionCreatorsToProps(dispatch: Object) {
  return bindActionCreators(ActionCreators, dispatch);
}

// const mapStateToProps = (result) => ({result});


export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(styles, { withTheme: true })(LoginContainer));
