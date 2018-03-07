import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { getLogin } from '../Actions';

class Login extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true })
    GoogleSignin.configure({
      webClientId: '786402833154-0obpv5qjqg5tmb6gdfbag4ba9b7vj6nb.apps.googleusercontent.com'
    }) 
  }

  googleLogin () {
    const { navigate } = this.props.navigation;
    GoogleSignin.signIn()
    .then((user) => {
      let data = {
        name: user.name,
        email: user.email,
        photo: user.photo
      }
      this.setState(data);
      AsyncStorage.setItem('user', JSON.stringify(data));
      this.props.getLogin();
      navigate('Home');
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
    console.log('auth', this.props.onLogin);
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
          </Row>
          </Col>
        </Grid>
        </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onLogin: state.onLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLogin: () => dispatch(getLogin())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);