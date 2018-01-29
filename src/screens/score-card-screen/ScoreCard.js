import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Container, Content, Text, Card, CardItem, Button } from 'native-base';

import RoundScore from "../../components/RoundScore";

import variables from '../../styles/variables';

import BackgroundImage from "../../components/BackgroundImage";

const BACKGROUND_IMAGE = require("../../../assets/img/login/signup.jpg")


const TableCard = ({ title, content, par, score }) => {
  return (
    <Card>
      <CardItem header style={{paddingLeft: 8, paddingRight: 6}}>
        <View style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}>
          <Text>{title} </Text>
          <Text>{score - par >= 0 ? "+" : ""}{score - par}</Text>
        </View>
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
        <View style={[styles.firstCol, { paddingTop: 6, paddingBottom: 6 }]}><Text>Tulos</Text></View>
        <View style={[styles.tableContent, { alignItems: "center" }]}>
          {content.map(hole => {
            const backgroundColor = hole.score > hole.par ? "255,0,0" : hole.score < hole.par ? "0,0,255 " : "0,0,0";
            const opacity = Math.abs(hole.score - hole.par) > 2 ? 1 : Math.abs(hole.score - hole.par) > 1 ? 0.5 :
              Math.abs(hole.score - hole.par) > 0 ? 0.2 : 0;
            return (<View key={hole.order} style={{ padding: 5, backgroundColor: `rgba(${backgroundColor}, ${opacity})` }}>
              <Text>{hole.score}</Text>
            </View>)
          })
          }
        </View>
        <View style={styles.tableInfoContainer}>
          <Text style={[styles.tableInfo, { paddingTop: 6, paddingBottom: 6 }]}>{score}</Text>
        </View>
      </View>
    </Card>
  )
}

export default class ScoreCard extends Component {

  constructor(props) {
    super(props);
    this.state = { highlightedIndex: 0 };
  }


  componentDidMount() {
    this.props.onGetScorecard(this.props.item);
  }

  render() {
    const { front, back, frontPar, backPar, frontScore, backScore } = this.props;
    const score = ( (frontScore || 0) + (backScore || 0) ) - (frontPar+backPar);

    return (
      <Content style={{ flex: 1 }}>
        <Card>
          <BackgroundImage source={BACKGROUND_IMAGE} overlay blurRadius={5}/>
          <RoundScore frontScore={frontScore} backScore={backScore} score={score} />
        </Card>

        {frontScore > 0 &&
          <TableCard title="Etuysi" content={front} par={frontPar} score={frontScore}/>
        }
        {backScore > 0 &&
          <TableCard title="Takaysi" content={back} par={backPar} score={backScore}/>
        }
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
