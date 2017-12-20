import React, { Component } from "react";

import { View, Image, StyleSheet } from "react-native";

const IMAGE_ASSETS = "../../assets/img/";

const Overlay = () => (
  <View style={styles.overlay}></View>
);

export default class BackgroundImage extends Component {

  render() {
    const { overlay, source, blurRadius } = this.props;
    return (
      <View style={styles.backgroundContainer}>
        <Image blurRadius={blurRadius ? blurRadius : 1} style={styles.backgroundImage} resizeMode="cover" source={source} />
        {overlay && <Overlay />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    width: null
  },
  overlay: {
    backgroundColor: "#000",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})