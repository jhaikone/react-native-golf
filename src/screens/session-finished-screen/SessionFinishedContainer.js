import React, { Component } from "react";
import Expo from "expo";
import { connect } from "react-redux";

import { actions as sessionFinishedActions } from "./reducers/session-finished-reducer";
import { actions as sessionActions } from "../sessions-screen/reducers/session-reducer";

import SessionFinished from "./SessionFinished";

const calculateScore = (array, key, start, end) => {
  if (start > array.length - 1 || end > array.length - 1) return 0;
  return array.reduce((prev, current, i) => {
    if (i >= start && i <= end) {
      return prev + current[key]
    } else {
      return prev;
    }
  }, 0);
};

class SessionFinishedContainer extends Component {

  render() {
    const { holes } = this.props;
    return (
      <SessionFinished {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { result } = state.session;
  return {
    putts: calculateScore(result, "putts", 0, result.length - 1),
    score: calculateScore(result, "score", 0, result.length - 1),
    front: calculateScore(result, "score", 0, 8),
    back: calculateScore(result, "score", 9, 17),
    course: state.courses.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEndSession: () => {
      dispatch(sessionActions.clearSession());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionFinishedContainer)