import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { Container, Button } from "native-base";

import { Provider } from "react-redux";

import store from "../../store";

import SessionContainer from "./SessionContainer";

import variables from "../../styles/variables";
import screens from "../../screen-names";

class SessionScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <Provider store={store}>
        <Container>
          <SessionContainer navigation={this.props.navigation} />
        </Container>
      </Provider>
    );
  }
}


export default SessionScreen;