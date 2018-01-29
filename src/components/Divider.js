import React, { Component } from "react";

import { View, StyleSheet } from "react-native";

import variables from "../styles/variables";

export default class Divider extends Component {

  render() {
    return (
      <View style={styles.divider}></View>
    )
  }
}


const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: variables.divider
  }
})