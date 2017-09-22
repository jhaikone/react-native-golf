import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
import CourseSelectionPage from "./src/pages/CourseSelectionPage";

import pages from './src/page-names';

class App extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Button onPress={() => navigate(pages.COURSE_SELECTION_PAGE)} title="Aloita"> </Button>
      </View>
    );

  }
}

export default GolfApp = StackNavigator({
  Home: {
    screen: App
  },
  CourseSelectionPage: {
    screen: CourseSelectionPage
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
