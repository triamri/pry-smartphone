import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Body,
  Content,
  Text, 
  Title,
  Thumbnail,
  H1,
  List, 
  ListItem,
  Left,
  Right
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import NavigasiFooter from './NavigasiFooter';

class Home extends Component {

  constructor(props){
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    const { routeName } = this.props.navigation.state;

    return (
      <Container>
        <Content>
        <Grid>
          <Col style={{
            paddingTop: 20,
            backgroundColor: '#635DB7', 
            alignItems: 'center',
            width: '100%', 
            height: 250 
          }}>
            <Thumbnail style={{ width: 150, height: 150 }} source={{uri: 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png'}} />
            <H1 style={{ paddingTop: 10, paddingBottom: 10, color: 'white' }}>Tri Amri Wijaya</H1>
          </Col>
        </Grid>
        </Content>
        <Content>
        <List style={{ marginLeft: -17 }}>
          <ListItem avatar>
            <Body>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Body>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
        </Content>
        <NavigasiFooter navigate={navigate} routeName={routeName} />
      </Container>
    );
  }
}

export default Home;