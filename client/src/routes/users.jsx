import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@/components/UI/button';
import Input from '@/components/UI/input';

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow:1; 
  }
  >.content-wrapper__side-b{
    background: #ff4b7d;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
  
`;
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
      <MainWrapper>
        <div class="content-wrapper content-wrapper__side-a">
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
                    required
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
        </div>

        <div class="content-wrapper content-wrapper__side-b">
          <Container>
            <p>Register</p>
           
          </Container>
        </div>
      </MainWrapper>

    );
  }
}

Users.data = [
  {
    name: 'User Name',
    field: 'firstName'
  }, {
    name: 'User Mail',
    field: 'email',
  }, {
    name: 'User Password',
    field: 'password',
  }
];


export default Users;
