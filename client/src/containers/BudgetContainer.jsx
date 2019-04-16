import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import CircularProgress from '@material-ui/core/CircularProgress';


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
  },
  icon: {
    fontSize: 180,
    paddingTop: "50px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  progress: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-170px",
    zIndex: 1,
    margin: theme.spacing.unit * 2,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }
});

class BudgetContainer extends Component {

  constructor(props: Object){
    super(props);
    (this : any).handleChange = this.handleChange.bind(this);
    (this : any).handleChangeIndex = this.handleChangeIndex.bind(this);
    (this : any)
      .state = {
        value: 0
      };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render(){
    const { classes, theme, dir} = this.props;
    return(
      <TabContainer dir={dir}>
        <Tabs
          className={classes.root}
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth">
          <Tab label="Weekly" />
          <Tab label="Monthly" />
          <Tab label="Yearly" />
        </Tabs>
        <section className={classes.content}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <Paper levation={5}>
              <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                Your Balance
              </Typography>
            </Paper>
            <Paper levation={4}>
              <Restaurant className={classes.icon}/>
              <CircularProgress className={classes.progress} variant="static" value={25} size={200} thickness={5}/>
              <Typography align="center" variant="h5" style={{ padding: "24px" }}>
                $ 6.65/25
              </Typography>
            </Paper>
            <Paper style={{ background: "#FFF"}} levation={3}>
              <Typography align="center" style={{ padding: "24px" }}>
                You are doing great, Ehsan. Keep up UR healthy eats
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
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper levation={5}>
              <Typography align="center" variant="h6" style={{ padding: "24px" }}>
                Your Balance
              </Typography>
            </Paper>
            <Paper levation={4}>
              <Restaurant className={classes.icon}/>
              <CircularProgress className={classes.progress} variant="static" value={25} size={200} thickness={5}/>
              <Typography align="center" variant="h5" style={{ padding: "24px" }}>
                $ 6.65/25
              </Typography>
            </Paper>
            <Paper style={{ background: "#FFF"}} levation={3}>
              <Typography align="center" style={{ padding: "24px" }}>
                You are doing great, Ehsan. Keep up UR healthy eats
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
          </TabContainer>
          <TabContainer dir={theme.direction}>Yearly</TabContainer>
        </SwipeableViews>
        </section>
      </TabContainer>
    );
  }
}

export default withStyles(styles,{ withTheme: true })(BudgetContainer);
