import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';

import MOCK_SCORECARD from "../../../../mocks/score-card.json";

const types = {
  GET_SCORE_CARD_REQUEST: "GET_SCORE_CARD_REQUEST",
  GET_SCORE_CARD_SUCCESS: "GET_SCORE_CARD_SUCCESS",
  GET_SCORE_CARD_ERROR: "GET_SCORE_CARD_ERROR"
};

const scorecard = (state = [], action) => {
  switch (action.type) {
    case types.GET_SCORE_CARD_SUCCESS: {
      return action.data;
    };
    default: {
      return state;
    };
  }
}

export const actions = {
  getScorecard: (item) => {
    return (dispatch) => {
      dispatch({
        type: types.GET_SCORE_CARD_SUCCESS,
        data: MOCK_SCORECARD
      })
    }
  }

}

export default combineReducers({
  list: scorecard
});

