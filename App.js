import React, { Component } from 'react';

import Expo from 'expo';

import { Provider } from 'react-redux';
import store from './src/store';

import { StackNavigator } from 'react-navigation';

import { StyleSheet, View, Button, Image, AsyncStorage } from 'react-native';

import screens from './src/screen-names';
import CourseSelectionScreen from "./src/screens/course-selection-screen/CourseSelectionScreen";
import DashboardScreen from "./src/screens/dashboard-screen/DashboardScreen";
import CourseScreen from "./src/screens/course-screen/CourseScreen";

import testImage from "./assets/img/dashboard/test.jpg";

import MOCK_COURSES from "./mocks/courses.json"; 


const cacheImages = images => {
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Expo.Asset.fromModule(image).downloadAsync();
  });
}

class App extends Component {
  
    static navigationOptions = {
      title: 'Welcome',
    };
  
    constructor () {
      super();  
      console.log('app');
      this.state = {
        appIsReady: false
      }
    }
  
    componentWillMount () {
      this._loadAssetAsync();
    }
  
    async _loadAssetAsync () {
      const imageAssets = cacheImages([testImage]);
      await Promise.all(...imageAssets);
      this.setState({appIsReady: true});
    }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Provider store={store}>
          <View >
            <Button onPress={() => navigate(screens.DASHBOARD_SCREEN)} title="Aloita"> </Button>
            <Button onPress={() => navigate(screens.COURSE_SELECTION_SCREEN)} title="kentät"> </Button>
          </View>
        </Provider>
      );
    }
  }
  

export default GolfApp = StackNavigator({
  Home: {
    screen: DashboardScreen
  },
  CourseSelectionScreen: {
    screen: CourseSelectionScreen
  },
  CourseScreen: {
    screen: CourseScreen
  },
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      header: {
        titleStyle: {
            textAlign:'center',
            color: "#94BB69"
        }
      }
    }
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
