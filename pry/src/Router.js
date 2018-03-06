import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Home from './Home';
import Opinion from './Opinion';
import Profile from './Profile';

export const crateNavigator = (isLogin=false) => { 
  return StackNavigator({
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Opinion: {
      screen: Opinion
    },
    Profile: {
      screen: Profile
    }
  }, {
    headerMode: 'none',
    initialRouteName: isLogin ? 'Home' : 'Login',
  });
}