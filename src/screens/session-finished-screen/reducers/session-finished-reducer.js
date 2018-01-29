import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';

const types = {
  SAVE_SESSION_REQUEST: "SAVE_SESSION_REQUEST",
  SAVE_SESSION_SUCCESS: "SAVE_SESSION_SUCCESS",
  SAVE_SESSION_ERROR: "SAVE_SESSION_ERROR"
};

const saveSession = (state = {}, action = {}) => {
  switch (action.type) {
    case types.SAVE_SESSION_REQUEST: {
      return state;
    };
    default: {
      return state;
    };
  }
}

export const actions = {
  saveSession: (sessio) => {
    return (dispatch) => {
      dispatch({
        type: types.SAVE_SESSION_REQUEST,
        sessio
      })
    }
  }
}

export default combineReducers({
  saveSession
});

