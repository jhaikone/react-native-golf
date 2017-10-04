import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';

import store from "../../store";

import DashboardContainer from "./container/Dashboard-container";

import variables from "../../styles/variables.js";

class DashboardScreen extends Component {

    static navigationOptions = {
        headerTitle: "Tervetuloa",
        headerStyle: {
            backgroundColor: `${variables.headerBackground}`,
        },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerTintColor: `${variables.primary}`
    };


    render() {
        console.log('parent', this)
        return (
            <Provider store={store}>
                <DashboardContainer navigation={this.props.navigation}/>
            </Provider>
        );  
    }
}

export default DashboardScreen;
