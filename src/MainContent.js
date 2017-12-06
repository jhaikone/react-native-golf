import React, { Component } from 'react';

import DashboardScreen from "./screens/dashboard-screen/DashboardScreen";

import variables from "./styles/variables";

export default class MainContent extends Component {

  static navigationOptions = {
    headerTitle: "Tervetuloa",
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  };

  render () {
    return (
      <DashboardScreen navigation={this.props.navigation}/>
    )
  }
}