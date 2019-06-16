import React, { Component } from 'react';

import { BackHandler } from 'react-native';

import { Root, Container, Header, Body, Title, Content, List, ListItem, Left, Right, Footer, FooterTab, Button, Icon, Text, Drawer, Toast } from 'native-base';


export default class History extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
            <Header>
                <Left>
                    <Button onPress={this.openDrawer} transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>RIWAYAT</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Text></Text>
                    </Button>
                </Right>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <Body>
                            <Text>2019-06-14 20:08:11</Text>
                            <Text note>Parkir di : ISTORA SENAYAN GBK</Text>
                        </Body>
                        <Right>
                            <Text note>VALID</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>2019-06-12 10:08:11</Text>
                            <Text note>Parkir di : GEDUNG KPK</Text>
                        </Body>
                        <Right>
                            <Text note>VALID</Text>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
  }
}