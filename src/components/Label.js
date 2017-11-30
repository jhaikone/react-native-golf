import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

import variables from "../styles/variables";

export default class Label extends Component {

    render () {
        return (
        <Text style={styles.label}>
            {this.props.text}
        </Text>
        )
        
    }
}

const styles = StyleSheet.create({
    label: {
        color: variables.secondary
    }
});