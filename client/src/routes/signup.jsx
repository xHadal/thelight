import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@/components/UI/button';
import Input from '@/components/UI/input';



/* Component? */
const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  min-height: 100%;
  
  >div{
    align-items: center;
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    transition: all 0.5s; 
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


/* Component? */
const Title = styled.h1`
  font-size: 42px;
`

class Signup extends Component {
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

  callApi({
    firstName,
    email,
    password,
  }) {
    const ctx = this;
    const body = JSON.stringify({
      firstName,
      email,
      password
    });
    fetch(`${__API__}users/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body,
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
        
        localStorage.setItem('user', token);
        this.props.history.push('/');
      })
      .catch((err) => {
        throw Error('Couldn\'t fetch'.concat(err));
      });
  }

  render() {
    const { data } = Signup;
    const {
      firstName,
      email,
      password,
    } = this.state;

    return (
      <MainWrapper>
        <div className="content-wrapper content-wrapper__side-a">
          {console.log(this.state)}
          <Container>
            {
              data.map(({
                name,
                field
              }) => (
                  <Input
                    name={name}
                    key={field}
                    type={field === 'password' ? 'password' : 'text'}
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
              onClick={() => this.callApi({
                firstName,
                email,
                password,
              })}
            >
              Aceptar
            </Button>
          </Container>
        </div>

        <div className="content-wrapper content-wrapper__side-b">
          <Container>
            <Title>Signup</Title>
          </Container>
        </div>
      </MainWrapper>

    );
  }
}

Signup.data = [
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


export default Signup;
