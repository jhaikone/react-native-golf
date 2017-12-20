import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

import { Container, Content, Text, Card, Button } from 'native-base';

import Footer from "../../components/Footer";
import Toolbar from "../../components/Toolbar";

import variables from '../../styles/variables';

export default class SessionFinished extends Component {

  render() {
    console.log('session finished components props', this.props);

    const { score, putts, front, back } = this.props;;
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
          <Button bordered onPress={() => console.log('go to tuloskortti')}>
            <Text>Tuloskortti</Text>
          </Button>
          </View>
        </Content>

        <Footer>
          <Toolbar>
            <Button style={{backgroundColor: variables.primary}} onPress={() => console.log('end round')} >
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
