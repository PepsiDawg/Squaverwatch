import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux';

import TestComp from './components/TestComp';
import AuthButton from './components/AuthButton';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World</h1>
          <TestComp />
          <AuthButton />
        </div>
      </Provider>
    )
  }
}

export default App;

