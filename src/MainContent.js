import React, { Component } from 'react';

import DashboardScreen from "./screens/dashboard-screen/DashboardScreen";

import variables from "./styles/variables";

export default class MainContent extends Component {

  render () {
    return (
      <DashboardScreen navigation={this.props.navigation}/>
    )
  }
}