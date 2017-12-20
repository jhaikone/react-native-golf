import React, { Component } from "react";

import { View, StyleSheet } from "react-native";
import { Text, Button, Icon, Card, Header } from "native-base";

import variables from "../../../styles/variables";
import icons from "../../../styles/icons";

export default NumberInput = ({ label, onDecrease, onIncrease, value, primary }) => {
  return (
    <View style={styles.numberInput}>
      <View style={styles.labelContainer}>
        <Text style={{ fontSize: 20,  paddingLeft: 5 }} >{label}</Text>
      </View>
   
      <View style={styles.scoreContainer}>
        <Text style={{ color: primary ? variables.primary : "#000", fontSize: 30 }}>{value}</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} large onPress={onIncrease}>
            <Icon name={icons.add}></Icon>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} large onPress={onDecrease}>
            <Icon name={icons.remove}></Icon>
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  numberInput: {
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    padding: 4,
    borderBottomWidth: 1,
    borderColor: variables.border
  },
  labelContainer: {
    flex: 1
  },
  scoreContainer: {
    flex: 1,
    alignItems: "center"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row", 
    justifyContent:"flex-end" 
  },
  buttonContainer: {
    marginLeft: 4,
    marginRight: 4
  },

  button: {
    backgroundColor: variables.primary
  }
})