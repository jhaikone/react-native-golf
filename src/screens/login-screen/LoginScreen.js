import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "../../store";

import LoginContainer from "./LoginContainer";

import variables from "../../styles/variables";

class LoginScreen extends Component {

  static navigationOptions = {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}

  render() {
    return (
      <Provider store={store}>
        <LoginContainer navigation={this.props.navigation} />
      </Provider>
    );
  }
}

export default LoginScreen
