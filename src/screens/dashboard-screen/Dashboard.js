import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { Container, Content, List, Text, Body, Right, Icon as BaseIcon, Button } from 'native-base';


import ListItem from "../../components/ListItem";
import UserProfile from "./components/UserProfile";
import RoundInformation from "./components/RoundInformation";

import Footer from "../../components/Footer";
import Toolbar from "../../components/Toolbar";

import helper from "../../utils/helpers";
import variables from "../../styles/variables.js";
import screenNames from "../../screen-names";

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Dashboard extends Component {

  render() {
    const { rounds, user, navigation } = this.props;
    const dataArray = rounds.map((round) => {
      return { ...round, key: round.id }
    });
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <UserProfile user={user} />
          </View>
          <View style={styles.informationContainer}>
            <RoundInformation rounds={rounds} />
          </View>
          <List
            dataArray={dataArray}
            renderRow={(item) => {
              return (
                <ListItem
                  onPress={() => {
                    navigation.navigate(screenNames.SCORE_CARD_SCREEN, item);
                  }}
                  style={styles.listItem}>
                  <View style={styles.leftItem}>
                    <Text>{item.name}</Text>
                    <Text>{helper.formatDate(item.startedAt)}</Text>
                  </View>
                  <View style={styles.middleItem}>
                    <Text style={{ color: variables.primary }}>{item.score.toString()}</Text>
                  </View>
                  <Right style={styles.rightItem}>
                    <BaseIcon name="md-arrow-forward"></BaseIcon>
                  </Right>
                </ListItem>
              )
            }}
          >
          </List>
        </Content>
        <Footer>
          <Toolbar>
            <Button onPress={() => { navigation.navigate(screenNames.COURSE_SELECTION_SCREEN) }}><Text>Aloita kierros</Text>
            </Button>
          </Toolbar>
        </Footer>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  dashboardContainer: {
  },
  container: {
    height: 190
  },
  informationContainer: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: variables.border
  },
  listItem: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "center",
  },
  leftItem: {
    flex: 1,
    marginRight: 12 //TODO: figure out why this is needed
  },
  middleItem: {
    flex: 1
  },
  rightItem: {
    position: "absolute",
    right: 10
  }
});