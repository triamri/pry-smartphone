import React, { Component } from 'react';
import { Spinner } from 'native-base';

import { isSignedIn } from './src/Auth'; 
import { crateNavigator } from './src/Router'; 

import Login from './src/Login';

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
    console.log(isLogin)
    
    if (!checkedSignIn) {
      return <Spinner />;
    }
 
    const Layout = crateNavigator(isLogin);

    return <Layout />;
  }
}

export default App;