import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.div`
&.visible{
  >button{
    >div{
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent!important;

      &::before{
        background: #fff;
        top: -80px;
        left: -80px;
        transition: left .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;
        transform: translate3d(80px,100px,0) rotate(45deg);
      }
      &::after{
        background: #fff;
        top: -80px;
        right: -80px;
        transition: right .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;
        transform: translate3d(-80px,100px,0) rotate(-45deg);
      }
    }
    
  }
  >nav{
    left: 0;
  }
}
`

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 50px;
  left: 15px;
  margin: 0 auto;
  padding: 0;
  position: absolute;
  top: 15px;
  width: 45px;
  z-index: 9999;

  >div{
    background-color: #ff4b7d;
    border-radius: 4px;
    height: 4px;
    transition: background-color .125s ease-in .375s;
    width: 100%;


    &::before{
      content: "";
      background-color: #ff4b7d;
      border-radius: 4px;
      height: 4px;
      left: 0;
      position: absolute;
      top: 10px;
      width: 100%;

      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
      transition: transform .125s cubic-bezier(.6,.04,.98,.335),top .05s linear .225s,left .125s ease-in .275s;
      transform: translate3d(0,0,0) rotate(0deg);
    }
    &::after{
      content:"";
      background-color: #ff4b7d;
      border-radius: 4px;
      bottom: 10px;
      height: 4px;
      right: 0;
      position: absolute;
      width: 100%;
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
      transform: translate3d(0,0,0) rotate(0deg);

      transition: transform .125s cubic-bezier(.6,.04,.98,.335),bottom .05s linear .225s,right .125s ease-in .275s;
    }
    
  }
`

const Navlist = styled.nav`
    background: #ff4b7d;
    height: 100vh;
    left: -50%;
    max-width: 50%;
    min-height: 100%;
    overflow: hidden;
    position: absolute;
    transition: all 0.4s ease-out; 
    width: 100%;
    z-index: 10;

    
    >ul{ 
    padding-top: 60px;
      >li{
        cursor: pointer;
        flex-grow: 1;
        text-align: center;
        &:hover{
          background: #ff5987;
        }
        >a{
          color: #fff;
          font-size: 18px;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          font-family: 'Inter UI';
          display: block;
          width: 100%;
          padding: 15px;
        }
      }
    }
`



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false }

    //Bind methods
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(e) {
    e.preventDefault();
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {

    return (
      <Nav className={this.state.isToggleOn ? "visible" : ""}>
        {/* Menu burger */}
        <BurgerButton onClick={this.toggleClick}>
          <div></div>
        </BurgerButton>
        {/* Menu nav */}
        <Navlist>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/signup/">Signup</Link>
            </li>
          </ul>
        </Navlist>


      </Nav>
    )
  }

};

Navbar.defaultProps = {
  istoggleon: false
}
Navbar.propTypes = {
  istoggleon: PropTypes.bool
}