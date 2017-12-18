import React, { Component } from 'react';
import { View, Image, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Body, Right, Icon as BaseIcon } from 'native-base';

import { connect } from "react-redux";

import store from "../../store";

import UserProfile from "./components/UserProfile";
import RoundInformation from "./components/RoundInformation";

import helper from '../../utils/helpers';
import variables from "../../styles/variables.js";
import MOCK_COURSES from "../../../mocks/courses.json"

import Icon from 'react-native-vector-icons/MaterialIcons';

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

  async componentWillMount() {
    await initCourses();
  }


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
                <ListItem style={styles.listItem}>
                  <Body style={styles.leftItem}>
                    <Text>{item.name}</Text>
                    <Text>{helper.formatDate(item.startedAt)}</Text>
                  </Body>

                  <Body style={styles.middleItem}>
                    <Text style={{ color: variables.primary }}>{item.score.toString()}</Text>

                  </Body>

                  <Right style={styles.rightItem}>
                    <BaseIcon name="md-arrow-forward"></BaseIcon>
                  </Right>
                </ListItem>
              )
            }}
          >
          </List>
        </Content>
      </Container>
    );
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
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  leftItem: {
    alignItems: 'center',
  },
  middleItem: {
    alignItems: 'center',
  },
  rightItem: {
    position: "absolute",
    right: 10,
    alignContent: "center"
  }
});


const mapStateToProps = (state, ownProps) => {
  return {
    rounds: state.rounds,
    user: state.user
  };
};

export default connect(mapStateToProps)(DashboardScreen)
