import React, { Component } from "react";
import Containter from "./styles";
import styled from "styled-components"

const Container = styled.div`
 .button {
  @include text-bold(16);
  background: linear-gradient(93deg, #d69f24, #ffe672);
  color: #333;
  text-align: center;
  border: none;
  border-radius: rem(10);
  padding: rem(10);
  min-width: rem(250);
  margin: 0 auto;
  display: block;

  &:hover {
    background: linear-gradient(0deg, #d69f24, #ffe672);
    cursor: pointer;
  }
  @media only screen and (max-width: 500px),
    only screen and (max-device-width: 500px) {
  }
}

`;

export default class Button extends Component {
  render() {
    //  const buttonClass = styles.button;

    return (
      <Container>
      <div>
        <button
          className={styles.button}
          type={this.props.type}
          onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
      </div>
      </Container>
    );
  }
}
