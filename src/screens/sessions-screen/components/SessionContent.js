import React, { Component } from "react";

import { View, StyleSheet } from "react-native";
import { Text, Button, Icon, Card, Header } from "native-base";

import variables from "../../../styles/variables";
import NumberInput from "./NumberInput";

export default class SessionContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: this.props.content.par,
      putts: this.props.content.putts,
      order: this.props.content.order,
      par: this.props.content.par
    }
  }

  shouldComponentUpdate(newProps, newState) {
    if (newState.putts !== this.state.putts || newState.score !== this.state.score) {
      this.props.onUpdateScore(newState);
      return true;
    }
    return false;
  }

  componentWillMount () {
    this.props.onUpdateScore(this.state);
  }

  onIncreaseScore = () => {
    const {score} = this.state;
    if (score >= 99) return;
    this.setState({ score: score + 1 });
  }

  onDecreaseScore = () => {
    const {score, putts} = this.state;
    if (score <= 1) return;

    const newState = {
      score: score-1
    };

    if (score <= putts+1) {
      newState.putts = score - 2;
    };
    this.setState(newState);
  }

  onIncreasePutts = () => {
    const { putts, score } = this.state;
    if (putts >= 99) return;

    const newState = {
      putts: putts + 1
    };

    if (putts >= score - 1) {
      newState.score = score + 1;
    };
    this.setState(newState);
  }

  onDecreasePutts = () => {
    const { putts } = this.state;
    if (putts <= 0) return;

    this.setState({
      putts: putts - 1
    });
  }

  render() {
    return (
      <Card style={styles.informationContainer}>
        <NumberInput 
          primary
          label={"Lyönnit"} 
          value={this.state.score} 
          onIncrease={this.onIncreaseScore} 
          onDecrease={this.onDecreaseScore} 
        />
        <NumberInput 
          label={"Putit"} 
          value={this.state.putts}
          onIncrease={this.onIncreasePutts} 
          onDecrease={this.onDecreasePutts}
        />
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  informationContainer: {
    flex: 3,
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 10,
  }
})