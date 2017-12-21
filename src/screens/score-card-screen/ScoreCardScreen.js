import React, { Component } from "react";
import { View } from "react-native";
import { Container, Text, Button } from "native-base";

import { Provider } from "react-redux";

import variables from "../../styles/variables"
import store from "../../store";
import ScoreCardContainer from "./ScoreCardContainer";

class ScoreCardScreen extends Component {

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
        <ScoreCardContainer item={this.props.navigation.state.params} />
      </Provider>
    );
  }
}



export default ScoreCardScreen;