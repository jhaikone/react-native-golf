import React, {Component} from "react";

import { View, StyleSheet } from "react-native";
import {Text} from "native-base";



export default class Header extends Component {

  render () {
    return (
        <View style={styles.informationContainer}>
          <Text style={{ color: "white" }}>jaska</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  informationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})