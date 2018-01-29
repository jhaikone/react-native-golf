import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container, Button } from "native-base";
import { Provider } from "react-redux";
import store from "../../store";
import SessionContainer from "./SessionContainer";
import variables from "../../styles/variables";
import screens from "../../screen-names";
import UUID from "uuid-js";

class SessionScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.name}`,
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { marginRight: 70, alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  });

  render() {
    return (
      <Provider store={store}>
        <Container>
          <SessionContainer navigation={this.props.navigation} uuid={UUID.create()} />
        </Container>
      </Provider>
    );
  }
}


export default SessionScreen;