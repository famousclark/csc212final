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

{/* ==============================================
  Here is where css should go, attributes use camel case (marginLeft => good, margin-left => bad)
  ==============================================*/}
const styles = theme => ({
  icon: {
    fontSize: 170,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

{/* ==============================================
  Here is where css should go, attributes use camel case (marginLeft => good, margin-left => bad)
  ==============================================*/}

class CommunityContainer extends Component {

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
      {/* ==============================================
        Here is where you design
        ==============================================*/}
        <Paper levation={5}>
          <Typography align="center" style={{ padding: "24px" }}>
            Your Balance
          </Typography>
        </Paper>
        <Paper levation={4}>
          <Typography align="center" style={{ padding: "24px" }}>
            $ 6.65/25
          </Typography>
        </Paper>
      {/* ==============================================
        Here is where you design
        ==============================================*/}
      </TabContainer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CommunityContainer);
