import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Spinner } from 'native-base';

import { isSignedIn } from './src/Auth'; 
import { crateNavigator } from './src/Router'; 

import store from './store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      isLogin: false,
      checkedSignIn: false
    }
  }
  
  componentWillMount () {
    isSignedIn()
      .then(res => {
        this.setState({
          isLogin: res,
          checkedSignIn: true
        })
      })
  }

  render() {
    const { isLogin, checkedSignIn } = this.state;
    
    if (!checkedSignIn) {
      return <Spinner />;
    }
 
    const Layout = crateNavigator(isLogin);

    return (
      <Provider store={ store }>
          <Layout />
      </Provider>
    );
  }
}

export default App;