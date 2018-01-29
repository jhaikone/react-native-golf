import React, { Component } from "react";

import Expo from "expo";

import { Provider } from "react-redux";
import store from "./src/store";

import { StackNavigator } from "react-navigation";

import { StyleSheet, Image, AsyncStorage } from "react-native";
import { Container, Text, Button, StyleProvider } from "native-base";

import MainContent from "./src/MainContent";
import Footer from "./src/components/Footer";
import Toolbar from "./src/components/Toolbar";

import screens from "./src/screen-names";
import CourseSelectionScreen from "./src/screens/course-selection-screen/CourseSelectionScreen";
import DashboardScreen from "./src/screens/dashboard-screen/DashboardScreen";
import LoginScreen from "./src/screens/login-screen/LoginScreen";
import CourseScreen from "./src/screens/course-screen/CourseScreen";
import SessionScreen from "./src/screens/sessions-screen/SessionScreen";
import SessionFinishedScreen from "./src/screens/session-finished-screen/SessionFinishedScreen";

import ScoreCardScreen from "./src/screens/score-card-screen/ScoreCardScreen";

import testImage from "./assets/img/dashboard/test.jpg";
import variables from "./src/styles/variables";

import getTheme from "./native-base-theme/components";
import platform from './native-base-theme/variables/platform';

import MOCK_COURSES from "./mocks/courses.json";
import SignInScreen from "./src/screens/sign-in-screen/SignInScreen";


const cacheImages = images => {
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
    return Expo.Asset.fromModule(image).downloadAsync();
  });
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  // componentWillMount() {
  //   this._loadAssetAsync();
  // }

  // async _loadAssetAsync() {
  //   const imageAssets = cacheImages(["./assets/img/dashboard/background1.jpg", "./assets/img/dashboard/portrait_test.jpg"]);
  //   await Promise.all(...imageAssets);
  //   this.setState({ appIsReady: true });
  // }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    const { navigation } = this.props;
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <Container style={{ flex: 1 }}>
            <DashboardScreen navigation={navigation} />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}

export default GolfApp = StackNavigator({
  Home: {
    screen: App,
  //   navigationOptions: {
  //     headerTitle: "Tervetuloa",
  //     headerStyle: {
  //       backgroundColor: `${variables.headerBackground}`,
  //     },
  //     headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
  //     headerTintColor: `${variables.primary}`
  //   }
  navigationOptions: { header: null }
  },

  CourseSelectionScreen: {
    screen: CourseSelectionScreen
  },
  CourseScreen: {
    screen: CourseScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  SignInScreen: {
    screen: SignInScreen
  },
  DashboardScreen: {
    screen: DashboardScreen,
  },
  SessionScreen: {
    screen: SessionScreen,
  },
  SessionFinishedScreen: {
    screen: SessionFinishedScreen
  },
  ScoreCardScreen: {
    screen: ScoreCardScreen
  }

});


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
  },
});
