import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Container, Content, Text, Card, CardItem, Button } from 'native-base';

import variables from '../../styles/variables';

const InformationRow = ({ label, value }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", padding: 8 }}>
      <View style={{ flex: 1 }}>
        <Text>{label}</Text>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text>{value}</Text>
      </View>
    </View>
  )
}

const TableCard = ({ title, content, par, score }) => {
  return (
    <Card style={{ flex: 2, padding: 4 }}>
      <CardItem header style={{ paddingLeft: 4 }}>
        <Text>{title} {score - par >= 0 ? "+" : ""}{score - par}</Text>
      </CardItem>

      <View style={[styles.scoreCard, styles.header]}>
        <View style={styles.firstCol}><Text style={{ color: "#fff" }}>#</Text></View>
        <View style={styles.tableContent}>
          {content.map(hole => (
            <Text key={hole.order} style={{ color: "#fff" }}>{hole.order}</Text>
          ))
          }
        </View>
        <View style={styles.tableInfoContainer}></View>
      </View>

      <View style={[styles.scoreCard, styles.par]}>
        <View style={styles.firstCol}><Text>Par</Text></View>
        <View style={styles.tableContent}>
          {content.map(hole => (
            <Text key={hole.order}>{hole.par}</Text>
          ))
          }
        </View>
        <View style={[styles.tableInfoContainer]}><Text style={styles.tableInfo}>{par}</Text></View>
      </View>

      <View style={[styles.scoreCard, styles.score]}>
        <View style={styles.firstCol}><Text>Tulos</Text></View>
        <View style={styles.tableContent}>
          {content.map(hole => (
            <Text key={hole.order}>{hole.score}</Text>
          ))
          }
        </View>
        <View style={styles.tableInfoContainer}>
          <Text style={styles.tableInfo}>{score}</Text>
        </View>
      </View>
    </Card>
  )
}

export default class ScoreCard extends Component {

  componentDidMount() {
    this.props.onGetScorecard(this.props.item);
  }

  render() {
    console.log('session finished components props', this.props)
    const { front, back, item, frontPar, backPar, frontScore, backScore } = this.props;
    return (
      <Content style={{ flex: 1 }}>
        <TableCard title="Etuysi" content={front} par={frontPar} score={frontScore} />
        <TableCard title="Takaysi" content={back} par={backPar} score={backScore} />
        <Card>
          <CardItem header style={{ paddingLeft: 8 }}>
            <Text>Yhteenveto</Text>
          </CardItem>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: variables.primary, fontSize: 90 }}>{item.score}</Text>
          </View>
        </Card>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  scoreCard: {
    flex: 1,
    flexDirection: "row"
  },
  header: {
    backgroundColor: "#000"
  },
  par: {
    borderBottomWidth: 1,
    borderColor: variables.border
  },
  score: {
  },
  tableContent: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tableInfo: { paddingLeft: 4 },
  tableInfoContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: variables.border
  },
  firstCol: {
    alignItems: "center",
    flex: 2,
    borderRightWidth: 1,
    borderColor: variables.border
  }

});
