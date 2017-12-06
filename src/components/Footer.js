import React, { Component } from "react";

import {StyleSheet} from "react-native";

import { Container } from "native-base";

import variables from "../styles/variables";

export default class Footer extends Component {

  render() {
    return (
      <Container style={styles.footer}>
        {this.props.children}
      </Container>
    )
  }
} 

const styles = StyleSheet.create({
  footer: {
    maxHeight: 60,
    backgroundColor: variables.headerBackground,
  }
})