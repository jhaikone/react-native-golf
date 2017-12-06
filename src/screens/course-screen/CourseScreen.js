import React, { Component } from "react";

import {Container, Button, Text } from "native-base";

import { Provider } from "react-redux";

import store from "../../store";

import CourseContainer from "./container/CourseContainer";

import variables from "../../styles/variables";

class CourseScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.name}`,
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  });

  render() {
    const {navigation} = this.props;
    return (
      <Provider store={store}>
          <CourseContainer navigation={navigation} />
      </Provider>
    );
  }
}


export default CourseScreen;