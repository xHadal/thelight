import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BurgerButton = styled.button`
  position: absolute;
  border: none;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  transform: translateX(-50%);
  background: red;
  cursor: pointer;
  left: 50%;
`

const Nav = styled.nav`
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 0;
    min-height: 0%;
    overflow: hidden;
    background: #ff4b7d;
    z-index: 10;

    >ul{ 
    
      >li{
        text-align: center;
        flex-grow: 1;
        padding: 15px;
        cursor: pointer;
        &:hover{
          background: #ff5987;
        }
        >a{
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }
      }
    }
`

const menuClick = ()=>{

}


export default () => (
  <div>
    <BurgerButton
    onClick="menuClick"/>
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
  </div>
);