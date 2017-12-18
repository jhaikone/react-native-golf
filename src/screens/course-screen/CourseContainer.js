import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, Text, Button, StyleProvider } from 'native-base';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

import { actions as courseActions } from './reducers/course-reducer';

import { connect } from "react-redux";

import Course from "./Course";

const GameModes = [
  {value: 0, type: "full", label: "18 reikää"},
  {value: 1, type: "front", label: "Etuysi"},
  {value: 2, type: "back", label: "Takaysi"}
];

const getLabel = (name, value) => {
  if (value === null || value === undefined || value === '') return null;
  return `${name} - ${Math.round(Number(value) / 100)}`
}

class CourseContainer extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Course {...this.props} gameModes={GameModes} />
      </StyleProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchHoles: (id) => {
      dispatch(courseActions.fetchHoles(id))
    },
    onSelectTee: (tee) => {
      dispatch(courseActions.selectTee(tee))
    },
    onSelectGameMode: (gameMode) => {
      dispatch(courseActions.selectGameMode(gameMode))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selected } = state.courses;
  const { gameModes, selectedTee, selectedGameMode } = state.course;

  return {
    tees: [
      { value: 0, label: getLabel('Musta', selected.black) },
      { value: 1, label: getLabel('Valkoinen', selected.white) },
      { value: 2, label: getLabel('Keltainen', selected.yellow) },
      { value: 3, label: getLabel('Sininen', selected.blue) },
      { value: 4, label: getLabel('Punainen', selected.red) },
    ],
    selectedTee: selectedTee,
    selectedGameMode
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer)

