import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { Container, Content, Text, Button, Form, Item, Input, Label } from 'native-base';


import helper from "../../utils/helpers";
import variables from "../../styles/variables.js";
import screenNames from "../../screen-names";

import BackgroundImage from "../../components/BackgroundImage";

class SignIn extends Component {

  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    this.textInput._root.focus();
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <BackgroundImage blurRadius={5} overlay source={this.props.imageSrc} />
          <Form style={{marginBottom: 20}}>
            <Item floatingLabel>
              <Label>
                <Text style={styles.inputText}>Käyttäjätunnus</Text>
              </Label>
              <Input
                getRef={(input) => { this.textInput = input; }}
                style={styles.inputText}
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value })
                }}
              />
            </Item>
            <Item floatingLabel last>
              <Label><Text style={styles.inputText}>Salasana</Text></Label>
              <Input 
                style={styles.inputText} 
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value })
                }}
                />
            </Item>
          </Form>
          <Button style={{backgroundColor: variables.primary}} full onPress={this.props.onSignIn}>
            <Text>Kirjaudu sisään</Text>
          </Button>
        </View>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  inputText: {
    color: "#fff"
  }
})

export default SignIn;