// React
import React, { Component } from "react";

// React-redux
import { connect } from "react-redux";

// React-Router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LogoutContainer from "./LogoutContainer";

class RouterContainer extends Component {
  _element = React.createElement;

  constructor(props: Object) {
    super(props);
    //(this: any).authenticateRoute = this.authenticateRoute.bind(this);
    //(this: any).authenticateRouteWithoutRedirect = this.authenticateRouteWithoutRedirect.bind(this);
  }

  render() {
    return (
      <Router>
        <Route path="/" component={LoginContainer} />
      </Router>
    );
  }

}
