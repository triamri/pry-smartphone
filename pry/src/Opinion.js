import React, { Component } from 'react';
import { 
  Container, 
  Content,
  Thumbnail,
  Text,
  Form, 
  Item, 
  Input, 
  Label,
  Icon,
  Button
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import NavigasiFooter from './NavigasiFooter';

class Opinion extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content>
          <Grid>
            <Col style={{
              backgroundColor: '#635DB7', 
              alignItems: 'center',
              width: '100%', 
              height: 250 
            }}>
              <Thumbnail square style={{ width: '100%', height: '100%' }} source={{uri: 'https://4.bp.blogspot.com/-0VljF-HhePw/WXc5-kPHVvI/AAAAAAAASJo/jEV_mx5bq2g2bRMGUWFW2IkPpvLEeMX3ACLcBGAs/s1600/palangka%2Braya%2Bmalam%2Bhari%2B2.jpeg'}} />
            </Col>
          </Grid>
        </Content>
        <Content>
          <Grid>
            <Col style={{
              width: '90%' 
            }}>
              <Form style={{ marginBottom: 20 }}>
                <Item stackedLabel>
                  <Label>Opinion</Label>
                  <Input />
                </Item>
              </Form>
            </Col>
          </Grid>
          <Button rounded light style={{ alignSelf: 'center', marginBottom: 10 }}>
            <Icon name='ios-megaphone' style={{ alignContent: 'center' }} />
            <Text>Submit</Text>
          </Button>
        </Content>
        <NavigasiFooter navigate={navigate} />
      </Container>
    );
  }
}

export default Opinion;