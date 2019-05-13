import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
display:none;
  >ul{
    background:#ff4b7d;
  
    >li{
      display: inline-block;  
      flex-grow: 1;
      padding: 15px;
      >a{
        color: #fff;
        text-decoration: none;
      }
    }
  }
`



export default () => (
  <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
  </Nav>
);