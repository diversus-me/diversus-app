import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import {NavigationServices} from './index';
import {Login, Home} from '../screens';

const AppContainer = createAppContainer(
  createStackNavigator({
    // Login,
    Home,
  }),
);

const AppStack = () => (
  <AppContainer
    ref={v => {
      if (v) {
        NavigationServices.setTopLevelNavigator(v);
      }
    }}
    uriPrefix="/"
  />
);

export default AppStack;
