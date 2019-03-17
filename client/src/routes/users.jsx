import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@/components/UI/button';
import Input from '@/components/UI/input';


const Container = styled.div`
  text-align: center;
  font-family: 'Inter UI';
`;

class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  callApi() {
    // fetch(`${__API__}hello`)
    //   .then((resp) => {
    //     if (!resp.ok) {
    //       console.log('Error', resp.status);
    //     }
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       data: data.message,
    //     });
    //   })
    //   .catch((err) => {
    //     throw Error('Couldn\'t fetch'.concat(err));
    //   });
  }

  render() {

    return (
      <Container>
        <Input
            name="User Name"
            type="text"
        />
        <Input
            name="User Mail"
            type="text"
        />
        <Button
            type="button"
            onClick={e => console.log(e)}
        >
            Aceptar
        </Button>
      </Container>
    );
  }
}
export default Users;
