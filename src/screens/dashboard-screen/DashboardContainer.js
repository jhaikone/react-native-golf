import React, { Component } from "react";
import { connect } from "react-redux";

import { actions as roundActions } from "./reducers/rounds_reducer";

import Dashboard from "./Dashboard";

import MOCK_COURSES from "../../../mocks/courses.json"


const STORAGE_COURSES = "COURSES";


class DashboardContainer extends Component {

  componentDidMount = () => {
    const {onFetch} = this.props;
    console.log('this', this);
    onFetch();
  }

  render() {
    return (
      <Dashboard {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  onFetch: () => {
    dispatch(roundActions.fetchRounds());
  }
}

const mapStateToProps = (state, ownProps) => {
  const rounds = state.rounds ? (state.rounds.list ? state.rounds.list.reverse : []) : [];
  return {
    rounds: rounds,
    user: state.user
  };
};

export default connect(mapStateToProps)(DashboardContainer)

