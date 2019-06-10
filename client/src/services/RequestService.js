import React, { Component } from "react";
const axios = require("axios");

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    /* URL + Request Type*/
    axios({
      method: this.props.fetchType,
      url: this.props.url,
      responseType: "stream",
      data: this.props.bodyRequest
    })
      .then(result => {
        this.setState({
          data: result,
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Fetcher;
