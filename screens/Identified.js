import React, { Component } from 'react';

import { Container, Header, Left, Body, Right, Title, Content, Thumbnail, Form, Item, Label, Input, Textarea, Footer, FooterTab, Button, Icon, Text, Drawer, Toast, Spinner } from 'native-base';

export default class Profile extends Component {

  constructor() {
    super();
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
                    <Title>IDENTIFIKASI</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Text></Text>
                    </Button>
                </Right>
            </Header>
            <Content>
                <Thumbnail large source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwwNTgEWtKc0H6fZZGrJsu386rNc2YsxodgekBlPkeUZEf9M5"}} style={{alignSelf: "center", marginTop: 20, width: 150, height: 150, borderRadius: 100, borderWidth: 1, borderColor: "#eee"}} />
                <Form>
                    <Item inlineLabel>
                        <Label>Nama Lengkap</Label>
                        <Input value="Agus Budiman" onChangeText={(text) => this.setState({name: text})}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>No.HP/Telepon</Label>
                        <Input value="082110911789" keyboardType="numeric" onChangeText={(text) => this.setState({phone: text})}/>
                    </Item>
                    <Textarea value="Jalan Kuningan Persada No.4, RT.1/RW.6, Guntur, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950" rowSpan={5} bordered placeholder="Alamat" style={{marginLeft: 14}} onChangeText={(text) => this.setState({address: text})}/>
                    <Item inlineLabel>
                        <Label>Merk Mobil</Label>
                        <Input value="Toyota Avanza" onChangeText={(text) => this.setState({name: text})}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Tahun</Label>
                        <Input value="2017" keyboardType="numeric" onChangeText={(text) => this.setState({phone: text})}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Nomor Polisi</Label>
                        <Input value="B101WMH" onChangeText={(text) => this.setState({phone: text})}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    );
  }
}