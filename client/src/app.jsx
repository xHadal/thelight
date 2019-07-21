import React from 'react';
import ReactDOM from 'react-dom';

import configStore from '@/redux/store/configStore';
import {Provider} from 'react-redux';

import AppRouter from '@/components/router'



const store = configStore;
class App extends React.PureComponent {

  render() {
    return (
      
        <AppRouter/>
      
    )
  }
}

export default App;
