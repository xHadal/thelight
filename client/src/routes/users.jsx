import React, { Component } from 'react';
import styled from 'styled-components';





class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      token: '',
    };
  }



  
  render() {
   

    return (
     <div>
       
     </div>
    );
  }
}

Users.data = [
  {
    name: 'User Name',
    field: 'firstName'
  }, {
    name: 'User Mail',
    field: 'email',
  }, {
    name: 'User Password',
    field: 'password',
  }
];


export default Users;
