import React, { Component } from "react";
import Expo from "expo";
import { connect } from "react-redux";

import { actions as scorecardActions } from "./reducers/score-card-reducer";

import ScoreCard from "./ScoreCard";

import calculateScore from "../../utils/calculateScore";

class ScoreCardContainer extends Component {

  render() {
    return (
      <ScoreCard {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let front = [...state.scorecard.list];
  front.splice(9);
  const back = [...state.scorecard.list].splice(9);
  return {
    back,
    front,
    frontScore: calculateScore(front, "score", 0, front.length - 1),
    frontPar: calculateScore(front, "par", 0, front.length - 1),
    backScore: calculateScore(back, "score", 0, back.length - 1),
    backPar: calculateScore(back, "par", 0, back.length - 1)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetScorecard: (item) => {
      dispatch(scorecardActions.getScorecard(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardContainer)