import React, { Component } from 'react';
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

import NavigasiFooter from './NavigasiFooter';

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation
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
        <NavigasiFooter navigate={navigate} />
      </Container>
    );
  }
}

export default Home;