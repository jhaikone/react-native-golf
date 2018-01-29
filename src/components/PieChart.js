import React, { Component } from "react";

import { View, StyleSheet, ART } from "react-native";

import { Text } from "native-base";


import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

const d3 = {
  scale,
  shape,
};

import variables from "../styles/variables";


const pieWidth = 150;
const pieHeight = 150;

const WIDTH = 100;
const HEIGHT = 100;

const COLORS = [
  '#1f77b4', "#ff7f0e"
]

//TODO: give this as a prop
const piechart = [
  { "number": item.score - item.putts, "name": 'Lyöntejä' },
  { "number": item.putts, "name": 'Putteja' },
]

export default class RoundScore extends Component {

  /**
   * TODO: uncomment if highlighted pie chart is needed
   * 
   *  onPieItemSelected = (index) => {
   *     this.setState({ ...this.state, highlightedIndex: index });
   *     this.props.onItemSelected(index);
   *   }
   */


  _createPieChart(index) {
    const margin = 20; //styles.container.margin
    const x = pieWidth / 2 + margin;
    const y = pieHeight / 2 + margin;

    const arcs = d3.shape.pie().value((item) => item.number)(piechart);
    const hightlightedArc = d3.shape.arc()
      .outerRadius(pieWidth / 2 + 10) //this.props.pieWidth/2 + 10
      .padAngle(.05)
      .innerRadius(30);

    const arc = d3.shape.arc()
      .outerRadius(pieWidth / 2) // this.props.pieWidth
      .padAngle(.05)
      .innerRadius(30);

    const arcData = arcs[index];
    // enable if highlight const path = (this.state.highlightedIndex == index) ? hightlightedArc(arcData) : arc(arcData);
    return {
      path: arc(arcData),
      color: COLORS[index],
    };
  }

  render() {
    const { totalScore, frontScore, backScore } = this.props;
    return (
      <View style={{}}>
        <ART.Surface width={350} height={300}>
          <ART.Group x={x} y={y}>
            {(piechart || []).map((item, index) => {
              const pie = this._createPieChart(index);
              return (
                <ART.Shape
                  key={'pie_shape_' + index}
                  d={pie.path}
                  fill={COLORS[index]}
                  stroke={COLORS[index]}
                  strokeWidth={3}
                  onPress={() => this.setState({ highlightedIndex: index })}
                />
              )
            })}

          </ART.Group>
        </ART.Surface>
        <View style={{ position: 'absolute', top: margin, left: (2 * margin + pieWidth) }}>
          {
            (piechart || []).map((item, index) => {
              return (
                <View key={item.name}>
                  <Text style={[{
                    fontSize: 15,
                    marginTop: 5,
                    fontWeight: 'normal',
                  }, { color: COLORS[index], fontWeight: "bold" }]}>{item.name}: {item.number}</Text>
                </View>
              );
            })
          }
        </View>
      </View>
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
})














