import React, { Component } from "react";
import { connect } from "react-redux";

import { StyleSheet, View } from "react-native";
import { Container, Content, List, ListItem, Text, Body, Right, Icon as BaseIcon } from 'native-base';


import UserProfile from "../components/UserProfile";
import RoundInformation from "../components/RoundInformation";

import helper from '../../../utils/helpers';
import variables from "../../../styles/variables.js";

import Icon from 'react-native-vector-icons/MaterialIcons';

class DashboardContainer extends Component {

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

                  <Body>
                    <View style={styles.middleItem}>
                      <Text style={{ color: variables.primary }}>{item.score.toString()}m</Text>
                    </View>

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
    backgroundColor: "red"
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

export default connect(mapStateToProps)(DashboardContainer)

