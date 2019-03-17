import React, { Component } from "react";

export const validateField = Input => {
  return class extends Component {
    /* Constructor */
    constructor(props) {
      super(props);

      this.state = {
        error: false,
        valid: false,
        errorMsg: null
      };

      this.validateField = this.validateField.bind(this);
    }

    /*Validation*/
    validateField(value, e) {
      let regex;

      switch (this.props.type) {
        case "email":
          regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.setState.errorMsg = "introduzca un email Válido";
          break;
        case "":
          regex = "";
      }

      //console.log(this.userEmail.value);
      if (regex.test(value)) {
        this.userEmail.setState({
          error: false,
          valid: true
        });
      } else {
        // invalid email, maybe show an error to the user.
        this.userEmail.setState({
          error: true,
          valid: false
        });
      }
    };

    /*Render*/
    render() {
      console.log(Input);
      return <Input validate={this.state} />;
    }
  };
};

export class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      errorMsg: null
    };

    this.validateField = this.validateField.bind(this);
  }
  render() {
    if (!this.state.visible) {
      return null;
    } else {
      return (
        <div>
          
        </div>
      );
    }
  }
}

class Validate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.validateField = this.validateField.bind(this);
  }

  validateField(value, e) {
    let regex;
    switch (this.props.type) {
      case "email":
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case "":
        regex = "";
    }

    //console.log(this.userEmail.value);
    if (regex.test(value)) {
      this.userEmail.setState({
        error: false,
        valid: true
      });
    } else {
      // invalid email, maybe show an error to the user.
      this.userEmail.setState({
        error: true,
        valid: false
      });
    }
  };

  render() {
    /* Return */
    return this.props.children(this.state);
  }
}
