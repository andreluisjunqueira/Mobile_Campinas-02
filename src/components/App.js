import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import Home from './Home';

import Navigator from '../config/configureRoutes';

export default class App extends Component {
  render() {

    const store = createStore(reducers);

    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
  }
}
