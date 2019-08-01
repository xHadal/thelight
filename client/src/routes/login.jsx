import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
/* Redux */
import { connect } from 'react-redux';
import authUser from '@/redux/actions/auth';
/* UI */
import Button from '@/components/UI/button';
import Input from '@/components/UI/input';
import MainWrapper from '@/components/MainWrapper'
import ContentWrapper from '@/components/ContentWrapper'


/* Component? */


/* Component? */
const Title = styled.h1`
  font-size: 42px;
`



class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: '',
      token: '',
      error: false
    };
  }

  handleChange({ field, value }) {
    this.setState({
      [field]: value
    });
  }

  callApi({
    email,
    password,
  }) {
    const ctx = this;
    const body = JSON.stringify({
      email,
      password
    });
    fetch(`${__API__}users/login`, {
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

        this.props.authUser(token);
        //this.props.history.push('/');

      })
      .catch((err) => {
        throw Error('Couldn\'t fetch'.concat(err));
      });
  }

  render() {
    const { data } = Login;
    const {
      email,
      password
    } = this.state;

    console.log('TOKENAZO', this.props.token);
    return (

      <MainWrapper>
        <ContentWrapper>
          {
            data.map(({
              name,
              field
            }) => (
                <Input
                  name={name}
                  key={field}
                  type={field}
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
              email,
              password,
            })}
          >
            Aceptar
            </Button>
          {this.state.error && (<p>User or Password not valid</p>)}
        </ContentWrapper>

        <ContentWrapper bgColor>
          <Title>Login</Title>
        </ContentWrapper>

      </MainWrapper>
    );
  }
}

Login.data = [
  {
    name: 'User Mail',
    field: 'email',
  }, {
    name: 'User Password',
    field: 'password',
  }
];



const mapStateToProps = ({ session: { token } } = state) => {
 
  return { token }
}

const mapDispatchToProps = { authUser: authUser }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));