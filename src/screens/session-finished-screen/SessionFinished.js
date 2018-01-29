import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

import { Container, Content, Text, Card, Button } from 'native-base';

import Footer from "../../components/Footer";
import Toolbar from "../../components/Toolbar";

import variables from '../../styles/variables';

import screenNames from "../../screen-names/";

import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: screenNames.DASHBOARD_SCREEN})
  ]
})

export default class SessionFinished extends Component {

  render() {
    const { score, putts, front, back, navigation, course, onEndSession } = this.props;
    return (
      <Container>
        <Content>
          <Card>
            <View style={styles.container}>
              <Text style={styles.score}>{score}</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.rightContent}>
                <Text>Etuysi</Text>
                <Text>{front}</Text>
              </View>

              <View style={styles.infoContent}>
                <Text>Takaysi</Text>
                <Text>{back}</Text>
              </View>
            </View>
          </Card>
          <View style={{flex: 1, justifyContent: "center", flexDirection:"row", marginTop: 20}}>
          <Button bordered onPress={() => navigation.navigate(screenNames.SCORE_CARD_SCREEN, course)}>
            <Text>Tuloskortti</Text>
          </Button>
          </View>
        </Content>

        <Footer>
          <Toolbar>
            <Button style={{backgroundColor: variables.primary}} onPress={() => {
              onEndSession();
              navigation.dispatch(resetAction);
            }} >
              <Text>tallenna ja lopeta</Text>
            </Button>
          </Toolbar>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: variables.border
  },
  score: {
    color: variables.primary,
    fontSize: 120,
    fontWeight: "bold",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row"
  },
  infoContent: {
    padding: 8,
    flex: 2,
    alignItems: "center",
  },
  rightContent: {
    padding: 8,
    flex: 2,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: variables.border
  }
});
