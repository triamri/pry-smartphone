import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { 
  Container, 
  Content,
  Header,
  Thumbnail,
  Text,
  Title,
  Form, 
  Icon,
  Button,
  Left,
  Body,
  List,
  ListItem,
  Right
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import NavigasiFooter from './NavigasiFooter';

class Opinion extends Component {

  constructor(props){
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    const { routeName } = this.props.navigation.state;

    return (
      <Container>
        <Header>
            <Left>
              <Title>Opinion</Title>
            </Left>
            <Right>
              <Title>Share</Title>
            </Right>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          <Grid>
            <Col>
              <Form style={{ marginBottom: 20 }}>
                  <TextInput
                    multiline = {true}
                    numberOfLines = {5}
                    placeholder="What's On Your Opinion"
                  />                
              </Form>
            </Col>            
          </Grid>
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

export default Opinion;