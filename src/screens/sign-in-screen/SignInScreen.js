import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "../../store";

import SignInContainer from "./SignInContainer";

import variables from "../../styles/variables";

class SignInScreen extends Component {

  static navigationOptions = {
    headerTitle: "Kirjaudu sisään",
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  };

  render() {
    return (
      <Provider store={store}>
        <SignInContainer navigation={this.props.navigation} />
      </Provider>
    );
  }
}

export default SignInScreen
