import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';

import io from "socket.io-client";

class CommunityContainer extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        message: '',
        messages: []
    };

    this.socket = io('localhost:5000');
  }

  render(){
    return (
        <div className="container">
          <div className="card-title">Community</div>
            <div className="messages">
              {this.state.messages.map(message => {
                return (
                  <div>{message.message}</div>
                )
              })}
            </div>
            <div className="card-footer">
              <input type="text" placeholder="Message" className="form-control"/>
              <br/>
              <button className="btn btn-primary form-control">Send</button>
            </div>
        </div>
    );
}
}

export default CommunityContainer;
