import React, { Component } from "react";
import { Container } from "native-base";
import { Provider } from "react-redux";
import store from "../../store";
import SessionFinishedContainer from "./SessionFinishedContainer";

import variables from "../../styles/variables";

class SessionFinishedScreen extends Component {

  static navigationOptions = {
    headerTitle: "Yhteenveto",
    headerStyle: {
      backgroundColor: `${variables.headerBackground}`,
    },
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerTintColor: `${variables.primary}`
  };

  render() {
    return (
      <Provider store={store}>
        <Container>
          <SessionFinishedContainer navigation={this.props.navigation} />
        </Container>
      </Provider>
    );
  }
}


export default SessionFinishedScreen;