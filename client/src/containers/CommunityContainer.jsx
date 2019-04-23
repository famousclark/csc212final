import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Restaurant from '@material-ui/icons/Restaurant';

import io from "socket.io-client";
import axios from 'axios';

class CommunityContainer extends Component {

  
  constructor(props){
    super(props);

    this.state = {
      username: 'Anonymous',
      message: '',
      messages: []
  };

    this.socket = io('localhost:5000');

    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({messages: [...this.state.messages, data]});
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
          author: this.state.username,
          message: this.state.message
      })
      this.setState({message: ''});

    }
  }

  render(){
    return (
        <div className="container">
          <div className="card-title">Community</div>
            <div className="messages">
              {this.state.messages.map(message => {
                return (
                    <div>{message.author}: {message.message}</div>
                )
              })}
            </div>
            <div className="card-footer">
              <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
              <br/>
              <button onClick={this.sendMessage}>Send</button>
            </div>
        </div>
    );
}
}

export default CommunityContainer;
