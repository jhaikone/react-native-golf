import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import variables from "../../../styles/variables";

const Information = ({ header, label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> {header}</Text>
            <Text style={styles.content}> {label || "-"}</Text>
        </View>
    )
}

class RoundInformation extends Component {

    render() {
        const { rounds } = this.props;
        const validRounds = rounds.filter((round) => round.fullRound && round.validRound);
        const average = Math.round(validRounds.map((round) => round.score).reduce((a, b) => a+b, 0) / validRounds.length);
        const record = validRounds.length ? validRounds.reduce((a, b) => b.score < a.score ? b : a) : 0;
        return (
            <View style={styles.grid}>
                <View style={styles.row}>
        
                    <View style={[styles.col, styles.divider]}>
                        <Information header={"Keskiarvo"} label={average} />
                    </View>

                    <View style={styles.col}>
                        <Information header={"Ennätys kierros"} label={record.score} />
                    </View>
                    <View style={styles.divider}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    grid: {
        position: "relative",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: -1
    },
    row: {
        flexDirection: "row"
    },
    col: {
        marginTop: 8,
        flex: 1,    
    },
    container: {
        alignItems: "center"
    },
    header: {
        fontSize: 18
    },
    content: {
        fontSize: 30,
        color: variables.primary
    },
    divider: {
        borderRightColor: variables.border,
        borderRightWidth: 1,
        zIndex: -1
    }
});

export default RoundInformation;