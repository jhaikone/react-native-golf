import React, { Component } from "react";

import { StyleSheet, View, TouchableNativeFeedback } from "react-native";
import { Container, Content, Text, Button } from 'native-base';


import helper from "../../utils/helpers";
import variables from "../../styles/variables.js";
import screenNames from "../../screen-names";

import BackgroundImage from "../../components/BackgroundImage";

const TouchableView = ({ subtitle, title, onPress }) => (
  <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#000000')}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

class Login extends Component {

  render() {
    const { onSignIn, signInImage, signUpImage } = this.props;
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, borderBottomWidth: 1, borderColor: "#000" }}>
            <BackgroundImage blurRadius={5} overlay source={signInImage} />
            <TouchableView subtitle={"Vanha käyttäjä?"} title={"Kirjaudu sisään"} onPress={onSignIn} />
          </View>
          <View style={{ flex: 2 }}>
            <BackgroundImage blurRadius={5} overlay source={signUpImage} />
            <TouchableView subtitle={"Uusi käyttäjä?"} title={"Luo käyttäjätili"} onPress={() => console.log('sing up clicked')} />
          </View>

        </View>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    color: "#fff"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    color: "#fff"
  }
})

export default Login;