import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  icon: {
    fontSize: 170,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
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
        <Paper levation={5}>
          <Typography align="center" variant="h6" style={{ padding: "24px" }}>
            Your Balance
          </Typography>
        </Paper>
        <Paper levation={4}>
          <Restaurant className={classes.icon}/>
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
    );
  }
}

export default withStyles(styles,{ withTheme: true })(BudgetContainer);
