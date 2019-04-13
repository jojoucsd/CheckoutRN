import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import store from "./src/store";

import CheckOut from './src/screens/checkout'

import { Provider } from 'react-redux';

export default class App extends React.Component{

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Provider store={store} >
        <CheckOut />
      </Provider>
    )
  }
}
