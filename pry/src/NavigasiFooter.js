import React, { Component } from 'react';
import { BackHandler, AsyncStorage } from 'react-native';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text
} from 'native-base';

class NavigasiFooter extends Component {
 
  componentDidMount() {
    console.log(this.props);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton) 
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton = () => {
    if (this.props.routeName === 'Home') {
      BackHandler.exitApp()
      return true;
    } else {
      this.props.goBack();
      return true;
    }
  }

  onPressLogout () {
    AsyncStorage.removeItem('user');
    this.props.navigate('Login');
  }

  render() {
    const navigate = this.props.navigate
    return (
      <Footer>
        <FooterTab>
          <Button vertical
            onPress={() => navigate('Home')}
          >
            <Icon name="ios-home-outline" />
            <Text>Home</Text>
          </Button>
          <Button vertical
            onPress={() => navigate('Opinion')}
          >
            <Icon name="ios-megaphone-outline" />
            <Text>opinion</Text>
          </Button>
          <Button vertical
            onPress={() => navigate('Profile')}
          >
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
          <Button active vertical
            onPress={() => this.onPressLogout()}
          >
            <Icon active name="ios-exit-outline" />
            <Text>Log Out</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default NavigasiFooter;