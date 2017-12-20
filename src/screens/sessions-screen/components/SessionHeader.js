import React, { Component } from "react";

import { View, Image, StyleSheet } from "react-native";
import { Text } from "native-base";

import BackGroundImage from "../../../components/BackgroundImage";

const BACKGROUND = require("../../../../assets/img/session/session.jpg");

export default class Header extends Component {

  render() {
    const { content, name } = this.props;
    return (
      <View style={styles.container}>
        <BackGroundImage blurRadius={15} overlay source={BACKGROUND} />
        <View style={styles.informationContainer}>
        <Text style={{color: "#fff"}}>{name}{" - "}{content.tee}</Text>
       
          <Text style={styles.header}>Väylä {content.order}</Text>

          <View style={styles.holeInfromation}>
          <View style={styles.divider}></View>
            <View style={styles.textContainer}><Text style={styles.text}>HCP {content.hcp}</Text></View>
            <View style={styles.textContainer}><Text style={styles.text}>PAR {content.par}</Text></View>
            <View style={styles.textContainer}><Text style={styles.text}>{content.distance}m</Text></View>
            
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  header: {
    fontSize: 50,
    color: "#fff",
    paddingTop: 5,
    paddingBottom: 10
  },
  text: {
    color: "#000",
  },
  divider: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 30,
    flex: 1,
    height: 2,
    backgroundColor: "#fff"
  },
  textContainer: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  informationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  holeInfromation: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  }
})