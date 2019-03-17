import React, { Component } from 'react';
import styled from 'styled-components';



const Container = styled.div`
  text-align: center;
  font-family: 'Inter UI';
`;

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }
    render() {
        const { data } = this.state;

        return (
           
<div></div>
        );
    }
}