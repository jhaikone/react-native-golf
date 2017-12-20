import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';

const types = {
  INDEX_CHANGE: "INDEX_CHANGE",
  UPDATE_SCORE: "UPDATE_SCORE",
  INIT_SCORES: "INIT_SCORES"
};

const currentIndex = (state = 0, action = {}) => {
  switch (action.type) {
    case types.INDEX_CHANGE: {
      return action.index;
    };
    default: {
      return state;
    };
  }
}

const result = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_SCORE: {
      if (!(!!state.find(hole => hole.order === action.result.order))) {
        return [...state, action.result];
      }
      const array = state.map((hole) => {
        if (hole.order === action.currentIndex+1) {
          return action.result;
        };
        return hole;
      });
      return array;
    };
    default: {
      return state;
    };
  }
}

export const actions = {
  indexChange: (newIndex) => {
    return (dispatch) => {
      dispatch({
        type: types.INDEX_CHANGE,
        index: newIndex
      })
    }
  },
  updateScore: (result) => {
    return (dispatch, getState) => {
      dispatch({
        type: types.UPDATE_SCORE,
        result,
        currentIndex: getState().session.currentIndex,
      })
    }
  }

}

export default combineReducers({
  currentIndex,
  result
});

