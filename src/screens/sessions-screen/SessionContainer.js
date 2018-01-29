import React, { Component } from "react";
import Expo from "expo";
import { connect } from "react-redux";

import {actions as sessionActions} from "./reducers/session-reducer";
import variables from "../../styles/variables";

import Session from "./Session";

class SessionContainer extends Component {

  render() {
    const { holes } = this.props;
    return (
      <Session {...this.props}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {navigation} = ownProps;
  const holes = state.course.holes.map(hole => {
    return {
      order: hole.order,
      hcp: hole.hcp,
      par: hole.par,
      score: hole.par,
      putts: 2,
      distance: hole[state.course.selectedTee],
      tee: navigation && navigation.state && navigation.state.params && navigation.state.params.tee.label,
    };
  })

  return {
    holes: holes,
    course: state.courses.selected,
    currentIndex: state.session.currentIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIndexChanged: (newIndex) => {
      dispatch(sessionActions.indexChange(newIndex))
    },
    onUpdateScore: (result) => {
      dispatch(sessionActions.updateScore(result));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer)