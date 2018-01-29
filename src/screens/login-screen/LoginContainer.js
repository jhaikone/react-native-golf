import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";

import screenNames from "../../screen-names";

const SIGN_IN_IMAGE = require("../../../assets/img/login/signin.jpg");
const SIGN_UP_IMAGE = require("../../../assets/img/login/signup.jpg");

class LoginContainer extends Component {

  signIn = () => {
    const { navigation } = this.props;
    navigation.navigate(screenNames.SIGN_IN_SCREEN, {imageSrc: SIGN_IN_IMAGE});
  }

  render () {
    return (
      <Login signInImage={SIGN_IN_IMAGE} signUpImage={SIGN_UP_IMAGE} onSignIn={this.signIn} />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps)(LoginContainer)

