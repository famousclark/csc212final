import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import dfo from '../images/dfo.jpg';
import douglass from '../images/douglass.jpg';
import med from '../images/med.jpg';
import pit from '../images/pit.jpg';
import forest from '../images/forest.jpg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';


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
    card: {
    },
    media: {
      height: 140,
    },
});

{/* ==============================================
  Here is where css should go, attributes use camel case (marginLeft => good, margin-left => bad)
  ==============================================*/}

class EatContainer extends Component {

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
    const { classes, theme, dir, open} = this.props;
    return(
      <TabContainer className={classes.root} dir={dir}>
      {/* ==============================================
        Here is where you design
        ==============================================*/}
        <AppBar
          position="static"
          color="secondary"
          className={classes.appBar}>
          <Toolbar disableGutters={!open}>
            <Tabs
              className={classes.tabsContainer}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              centered>
              <Tab label="Open now" />
              <Tab label="Your progress" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <section className={classes.content}>
          <SwipeableViews
            className={classes.tabsContainer}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir={theme.direction}>
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
            </TabContainer>

          </SwipeableViews>
        </section>
      {/* ==============================================
        Here is where you design
        ==============================================*/}
      </TabContainer>
    );
  }
}

export default withStyles(styles, {withTheme: true })(EatContainer);
