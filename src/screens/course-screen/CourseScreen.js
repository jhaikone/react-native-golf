import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { Provider } from "react-redux";

import store from "../../store";

import CourseContainer from "./container/CourseContainer";

import variables from "../../styles/variables.js";

class CourseScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: `${navigation.state.params.name}`,
        headerStyle: {
            backgroundColor: `${variables.headerBackground}`,
        },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerTintColor: `${variables.primary}`
    });


    render() {
        return (
            <Provider store={store}>
                <CourseContainer navigation={this.props.navigation}/>
            </Provider>
        );  
    }
}


export default CourseScreen;