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
    console.log(this.props.routeName);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this)) 
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this))
  }

  handleBackButton = () => {
    alert(this.props.routeName);
    // Alert.alert(
    //     'Exit App',
    //     'Exiting the application?', [{
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel'
    //     }, {
    //         text: 'OK',
    //         onPress: () => BackHandler.exitApp()
    //     }, ], {
    //         cancelable: false
    //     }
    //  )
    //  return true;
  }

  onPressLogout () {
    alert('logout');
    AsyncStorage.removeItem('user');
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