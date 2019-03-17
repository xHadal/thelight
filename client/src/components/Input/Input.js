import React, { Component } from "react";
import { ErrorMessage } from "../../services/validate";
import styled from "styled-components"

var classNames = require("classnames");
const Container = styled.div`
.inputWrapper {
  position: relative;
  margin: rem(35) 0;
  min-width: rem(320);

  /* Label */
  label {
    position: absolute;
    @include text-regular(18);
    color: $primary-text-color;
    left: 0;
    top: rem(-5);
    transition: all 0.5s;
    pointer-events: none;
  }
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  /* Input */
  .input {
    @include text-regular(14);
    background: transparent;
    border: none;
    border-bottom: rem(2) solid $primary-text-color;
    color: $primary-text-color;
    width: 100%;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      @include text-regular(11);
      top: rem(-10);
      transition: all 0.5s;
      color: #6d6d6d;
    }

    &Valid {
      border-bottom: rem(2) solid $valid-color;
    }
    &Error {
      border-bottom: rem(2) solid $error-color;
    }
    @media only screen and (max-width: 500px),
      only screen and (max-device-width: 500px) {
    }
  }
  /* Error */
  .errorMsg {
    color: $error-color;
    @include text-bold(12);
    margin: rem(5) 0 0;
  }
}

`;

export default class Input extends Component {
  /* Constructor */
  constructor(props) {
    super(props);

    this.state = {
      error: this.props.required
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.required !== this.props.required) {
      this.setState({ error: newProps.required });
      //this.classMethod();
    }
  }

  render() {
    if (typeof this.props.required !== "undefined") {
      //console.log("input validation props" + this.state);
      //console.log(this.state.error);
      var validationClass = classNames({
        [styles.inputError]: this.state.error && this.state.error !== null,
        [styles.inputValid]: !this.state.error && this.state.error !== null
      });
    }

    return (
      <Container>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${validationClass}`}
            errormsg={this.props.errorMsg}
            name={this.props.name}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            ref={inputElement => {
              this[this.props.htmlRef] = inputElement;
            }}
            required={this.props.required}
            type={this.props.type}
            value={this.props.value}
          />
          <label htmlFor={this.props.name}>{this.props.labelText}</label>
          {this.state.error && (
            <span className={styles.errorMsg}>{this.props.errorMsg}</span>
          )}
        </div>
      </Container>
    );
  }
}
