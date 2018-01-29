import React, { Component } from "react";

import { View, StyleSheet } from "react-native";

import { Text } from "native-base";

import variables from "../styles/variables";

export default class RoundScore extends Component {
  render() {
    const { score, frontScore, backScore } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", borderBottomWidth: 1, borderColor: variables.border}}>
            <Text style={styles.score}>{(frontScore || 0) + (backScore || 0)}</Text>
            <Text style={[{fontSize: 20, marginBottom: 8}, styles.light]}>({score ? score > 0 ? "+" : "-" : ""}{" "}{score})</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.rightContent}>
            <Text style={styles.light}>Etuysi</Text>
            <Text style={styles.light}>{frontScore}</Text>
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.light}>Takaysi</Text>
            <Text style={styles.light}>{backScore}</Text>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  light: {
    color: "#fff"
  },
  score: {
    color: variables.primary,
    fontSize: 90,
    fontWeight: "bold",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    paddingBottom: 0,
    marginBottom: -16,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row"
  },
  infoContent: {
    padding: 8,
    flex: 2,
    alignItems: "center",
  },
  rightContent: {
    padding: 8,
    flex: 2,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: variables.border
  }
})

