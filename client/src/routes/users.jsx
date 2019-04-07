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
    this.state = {
      firstName: '',
      email: '',
      password: '',
      token: '',
    };
  }

  handleChange({ field, value }) {
    this.setState({
      [field]: value
    });
  }

  callApi() {
    const ctx = this;
    fetch(`${__API__}users/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then((resp) => {
        if (!resp.ok) {
          throw Error('Error', resp.status);
        }
        return resp.json()
      })
      .then(({ token }) => {
        ctx.setState({
          ...ctx.state,
          token,
        });
      })
      .catch((err) => {
        throw Error('Couldn\'t fetch'.concat(err));
      });
  }

  render() {
    const { data } = Users;

    return (
      <Container>
        {
          data.map(({
            name,
            field
          }) => (
              <Input
                name={name}
                key={field}
                type="text"
                onChange={({
                  target: {
                    value
                  }
                }) => this.handleChange({
                  field,
                  value,
                })}
              />
            )
          )
        }
        <Button
            type="button"
            onClick={() => this.callApi()}
        >
            Aceptar
        </Button>
      </Container>
    );
  }
}

Users.data = [
  {
    name: 'User Name',
    field: 'firstName'
  },{
    name: 'User Mail',
    field: 'email',
  },{
    name: 'User Password',
    field: 'password',
  }
];


export default Users;
