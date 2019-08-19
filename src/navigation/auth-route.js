import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import {NavigationServices} from './index';
import {Login} from '../screens';

const AuthStackContainer = createAppContainer(
  createStackNavigator({
    Login,
  }),
);

export default (AuthStack = () => (
  <AuthStackContainer
    ref={v => {
      if (v) {
        NavigationServices.setTopLevelNavigator(v);
      }
    }}
    uriPrefix="/"
  />
));
