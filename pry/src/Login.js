import React, { Component } from 'react';
import { Text, AsyncStorage, TouchableOpacity, ImageBackground } from 'react-native';
import { 
  Container,
  Header,
  Content,
  Thumbnail,
  Button,
  Icon
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import { isSignedIn } from './Auth';

class Login extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   name: null,
    //   email: null,
    //   photo: null,
    //   SignedIn: null
    // }
  }

  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true })
    GoogleSignin.configure({
      webClientId: '786402833154-0obpv5qjqg5tmb6gdfbag4ba9b7vj6nb.apps.googleusercontent.com'
    })
    // this._loadInitialState(); 
  }

  // async _loadInitialState() {
  //   try {
  //     let user = await AsyncStorage.getItem('user');
  //     if (user !== null) {
  //       let getUser = JSON.parse(user);
  //       this.setState({
  //         name: getUser.name,
  //         email: getUser.email,
  //         photo: getUser.photo,
  //         SignedIn: true
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  googleLogin () {
    GoogleSignin.signIn()
    .then((user) => {
      let data = {
        name: user.name,
        email: user.email,
        photo: user.photo
      }
      this.setState(data);
      AsyncStorage.setItem('user', JSON.stringify(data));
    })
    .catch((error) => {
      // For details of error codes, see the docs
      alert('Oops.. Login failed! ', error)
    })
  }

  onPressLogout () {
    AsyncStorage.removeItem('user');
  }

  render() {
    // console.log('auth', this.state.SignedIn);
    return (
      <Container>
        <Content>
        <ImageBackground
            style={{
              flex: 1    
            }}
            source={{ uri: 'http://cdn.idpelago.com/wp-content/uploads/2016/12/Creative_idea.jpg' }}
        >
        <Grid>
          <Col style={{
            width: '100%',
            height: 616
            }}
            >
          <Row style={{ 
            alignSelf: 'center',
            marginTop: 100 
            }}
            >
            <Thumbnail style={{ width: 150, height: 150, alignSelf: 'center' }} source={{uri: 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png'}} />
          </Row>
          <Row style={{ 
            alignSelf: 'center',
            }}
            >
          <Button iconLeft danger style={{
              width: 150,
              borderRadius: 10
            }}
            onPress={() => this.googleLogin()}
          >
            <Icon name='logo-google' />
            <Text style={{ color: 'white', paddingRight: 20 }}>Google Login</Text>
          </Button>
          {/* <Text>{ this.state.name }</Text> */}
          </Row>
          <Button onPress={() => this.onPressLogout()} >
            <Text>Log Out</Text>
          </Button>
          </Col>
          {/* <Row style={{ backgroundColor: '#00CE9F', height: 400 }}>
          </Row> */}
        </Grid>
        </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Login;