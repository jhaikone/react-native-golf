import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import variables from "../../../styles/variables.js";

class UserProfile extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.backgroundImage} resizeMode="cover" source={require("../../../../assets/img/dashboard/background1.jpg")} />
                </View>

                <View style={styles.portraitContent}>
                    <View>
                        <Image style={styles.portraitImage} source={require("../../../../assets/img/dashboard/portrait_test.jpg")} />
                    </View>
                    <View style={styles.badgetCircle}>
                        <Text style={styles.badgeContent}>{this.props.user.hcp}</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        position: "relative"
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    backgroundImage: {
        flex: 1,
        flexDirection: "column",
        width: null
    },
    portraitImage: {
        borderRadius: 100,
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: '#d6d7da',
        zIndex: 1
    },
    badgetCircle: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
    },
    badgeContent: {
        color: variables.primary
    }
});



export default UserProfile;