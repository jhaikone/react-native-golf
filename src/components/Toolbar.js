import React, {Component} from "react";
import {Container} from "native-base"
import {StyleSheet} from "react-native";

export default class Toolbar extends Component {

  render () {
    return (
      <Container style={styles.toolbar}>
        {this.props.children}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  }
})