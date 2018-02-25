import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Left,
  Right,
  Body,
  Content, 
  Title,
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text, 
  Badge,
  List, 
  ListItem,
  Thumbnail
} from 'native-base';

class AnatomyExample extends Component {
  render() {
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
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="md-menu" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default AnatomyExample;