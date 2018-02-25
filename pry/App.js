import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container } from 'native-base';

import Home from './src/Home';
import Opinion from './src/Opinion';
import Profile from './src/Profile';

const AppNavigator = StackNavigator({
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
  initialRouteName: 'Opinion',
})

class App extends Component {
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}

export default App;