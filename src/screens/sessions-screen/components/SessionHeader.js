import React, { Component } from "react";

import { View, Image, StyleSheet } from "react-native";
import { Text } from "native-base";

import BackGroundImage from "../../../components/BackgroundImage";

const BACKGROUND = require("../../../../assets/img/session/session.jpg");

export default class Header extends Component {

  render() {
    const { content } = this.props;
    return (
      <View style={styles.container}>
        <BackGroundImage overlay source={BACKGROUND} />
        <View style={styles.informationContainer}>
          <Text style={styles.header}>Väylä {content.order}</Text>
          <View style={styles.holeInfromation}>
            <Text style={styles.text}>HCP {content.hcp}</Text>
            <Text style={styles.text}>PAR {content.par}</Text>
            <Text style={styles.text}>{content.yellow}m</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 50,
    paddingRight: 50
  },
  header: {
    fontSize: 50,
    color: "white"
  },
  text: {
    color: "white" 
  },
  informationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  holeInfromation: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    alignSelf: 'stretch',
    paddingTop: 10
  }
})