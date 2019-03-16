import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


const Container = styled.div`
  text-align: center;
  font-family: 'Inter UI';
`;

const Index = () => (
  <h2>Home</h2>
);


const About = () => (
  <h2>About</h2>
);

const Users = () => (
  <h2>Users</h2>
);

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/users/">Users</Link>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    fetch(`${__API__}hello`)
      .then((resp) => {
        if (!resp.ok) {
          console.log('Error', resp.status);
        }
        return resp.json();
      })
      .then((data) => {
        this.setState({
          data: data.message,
        });
      })
      .catch((err) => {
        throw Error('Couldn\'t fetch'.concat(err));
      });
  }

  render() {
    const { data } = this.state;

    return (
      <Router>
        <Container>
          <div>
            <h1>{data}</h1>
            <Navbar />
            <Route path="/" exact component={Index} />
            <Route path="/about/" exact component={About} />
            <Route path="/users/" exact component={Users} />
          </div>
        </Container>
      </Router>

    );
  }
}
export default App;
