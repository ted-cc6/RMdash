import React, { Component } from 'react';
import { Header, Title, Left, Right, Body, Icon, Button } from 'native-base';

export default class CSHeader extends Component {
    render() {
      return (
        <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>RMdash</Title>
            </Body>
            <Right />
          </Header>
          );
    }
}