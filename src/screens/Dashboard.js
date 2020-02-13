import React, { Component } from 'react';

/*Native base theme*/
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Dashboard extends Component {
  render() {
    return (
        <Container>
            <Content>
              <Text>
                Dashboard goes here
              </Text>
            </Content>
        </Container>
    );
  }
};