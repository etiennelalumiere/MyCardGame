import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RootStack } from './RootStack';
import { store } from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}