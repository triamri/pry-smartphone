import React, { Component } from 'react';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text
} from 'native-base';

class NavigasiFooter extends Component {
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
          <Button active vertical>
            <Icon active name="ios-exit-outline" />
            <Text>Log Out</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default NavigasiFooter;