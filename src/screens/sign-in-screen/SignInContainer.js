import React, { Component } from "react";
import { connect } from "react-redux";

import SignIn from "./SignIn";

import screenNames from "../../screen-names";

class SignInContainer extends Component {

  signIn = () => {
  }

  render() {
    return (
      <SignIn onSignIn={this.signIn} imageSrc={this.props.navigation.state.params.imageSrc} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps)(SignInContainer)

