import React, { Component } from 'react';

import {Modal, View, Alert, BackHandler} from 'react-native';

import { Root, Container, Icon, Text, Button, Thumbnail, Spinner, Toast, Form, Item, Label, Input } from 'native-base';

class Search extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Root>
                <Container>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, backgroundColor: "#fff"}}>
                        <Thumbnail large square source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUwIVRHhXK2oj9vT12LLhcJcmUQSPMBQCsRrjmja3t4U805MA"}} style={{alignSelf: "center", marginBottom: 20, width: 150, height: 150, borderRadius: 100, borderWidth: 1, borderColor: "#eee"}}/>
                        <Item inlineLabel style={{marginBottom: 10}} bordered rounded>
                            <Input value="B101WMH" onChangeText={(text) => this.setState({username: text})} placeholder="Nomor Polisi" style={{textAlign: "center"}} />
                        </Item>
                        <Button bordered block primary rounded iconLeft onPress={this.checkUser}>
                            <Icon name='person' />
                            <Text>IDENTIFIKASI</Text>
                        </Button>
                        <Text style={{marginTop: 10}}>
                            Belum terdaftar? <Text style={{textDecorationLine: "underline", color: "#3F51B5"}} onPress={() => {this.props.navigation.navigate("Register")}}>Daftar</Text>
                        </Text>
                    </View>
                </Container>
            </Root>
        )
    }
}

export default Search;