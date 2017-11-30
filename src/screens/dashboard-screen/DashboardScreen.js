import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';

import store from "../../store";

import DashboardContainer from "./container/Dashboard-container";

import variables from "../../styles/variables.js";
import MOCK_COURSES from "../../../mocks/courses.json"

const STORAGE_COURSES = "COURSES";

const initCourses = async () => {
    try { 
      const courses = await AsyncStorage.getItem(STORAGE_COURSES);
      if (courses === null) {
        const initCourses = MOCK_COURSES.map((course) => {
            return { ...course, key: course.id }
          }).sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        AsyncStorage.setItem(STORAGE_COURSES, JSON.stringify(initCourses));
      }
    } catch (error) {
      // TODO: Handle error
    }
  }

class DashboardScreen extends Component {

    static navigationOptions = {
        headerTitle: "Tervetuloa",
        headerStyle: {
            backgroundColor: `${variables.headerBackground}`,
        },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerTintColor: `${variables.primary}`
    };

    async componentWillMount () {
        await initCourses();
    }


    render() {
        return (
            <Provider store={store}>
                <DashboardContainer navigation={this.props.navigation}/>
            </Provider>
        );  
    }
}

export default DashboardScreen;
