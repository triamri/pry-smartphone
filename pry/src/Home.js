import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Container, 
  Header, 
  Left,
  Right,
  Body,
  Content,
  Text, 
  Title,
  List, 
  ListItem,
  Thumbnail
} from 'native-base';

import { getNav } from '../Actions';
import NavigasiFooter from './NavigasiFooter';

class Home extends Component {

  constructor(props){
    super()
  }

  // componentWillMount() {
  //   const { routeName } = this.props.navigation.state;
  //   this.props.getNav(routeName);    
  // }

  // componentDidMount() {
  //   console.log('did', this.props.nav);
  // }

  render() {
    const { navigate,goBack } = this.props.navigation;
    const { routeName } = this.props.navigation.state;
    console.log('nav', this.props.nav);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
        </Content>
        <NavigasiFooter navigate={navigate} goBack={goBack} routeName={routeName} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    onLogin: state.onLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNav: (nav) => dispatch(getNav(nav))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);