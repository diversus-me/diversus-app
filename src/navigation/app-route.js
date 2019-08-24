import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

// import screens
import Login from '../screens/login.screen';
import Home from '../screens/home.screen';

import {NavigationServices} from './index';

const AppContainer = createAppContainer(
  createStackNavigator({
    Login,
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
