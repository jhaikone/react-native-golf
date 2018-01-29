import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "../../store";

import DashboardContainer from "./DashboardContainer";

import variables from "../../styles/variables";

class DashboardScreen extends Component {

  static navigationOptions = {
    headerTitle: "Tervetuloa",
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  }

  render() {
    return (
      <Provider store={store}>
        <DashboardContainer navigation={this.props.navigation} />
      </Provider>
    );
  }
}

export default DashboardScreen
