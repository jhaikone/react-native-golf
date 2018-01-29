import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { Provider } from "react-redux";

import store from "../../store";

import CourseSelectionContainer from "./Course-selection-container";

import variables from "../../styles/variables.js";

class CourseSelectionScreen extends Component {

  static navigationOptions = {
    headerTitle: "Valitse kenttä",
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { marginRight: 70, alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  };

  render() {
    return (
      <Provider store={store}>
        <CourseSelectionContainer navigation={this.props.navigation} />
      </Provider>
    );
  }
}

export default CourseSelectionScreen;