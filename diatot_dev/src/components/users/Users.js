import React, { Component } from 'react';
import User from './User';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class Users extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User age="20">John</User>
        <User age="30">Jill</User>
        <User age="40">Peter</User>
      </div>
    )
  }
}

export default Users;
