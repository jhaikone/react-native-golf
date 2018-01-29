import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import MOCK_HOLES from '../../../../mocks/holes.json';

const types = {
  GET_HOLES_RECEIVE: "GET_HOLES_RECEIVE",
  GET_HOLES_REQUEST: "GET_HOLES_REQUEST",
  SELECT_TEE: "SELECT_TEE",
  SELECT_GAMEMODE: "SELECT_GAMEMODE",
}

const holes = (state = [], action) => {
  switch (action.type) {
    case types.GET_HOLES_RECEIVE: {
      return MOCK_HOLES.filter(hole => Number(hole.course_id) === Number(action.id));
    } default: {
      return state;
    }
  }
}

const selectTee = (state = "yellow", action) => {
  switch (action.type) {
    case types.SELECT_TEE: {
      return action.selected
    }
    default: {
      return state;
    }
  }
}

const selectedGameMode = (state = 0, action) => {
  switch (action.type) {
    case types.SELECT_GAMEMODE: {
      return action.selected
    }
    default: {
      return state;
    }
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.GET_HOLES_REQUEST: {
      return true;
    }
    default: {
      return false;
    }
  }
}

export const actions = {
  fetchHoles: (id) => {
    return (dispatch) => {
      return dispatch({
        type: types.GET_HOLES_RECEIVE,
        id: id
      });
    }
  },
  selectTee: (tee) => {
    return (dispatch) => {
      dispatch({
        type: types.SELECT_TEE,
        selected: tee
      })
    }
  },
  selectGameMode: (gameMode) => {
    return (dispatch) => {
      dispatch({
        type: types.SELECT_GAMEMODE,
        selected: gameMode 
      });
    }
  }
}

export default combineReducers({
  loading,
  holes,
  selectedTee: selectTee,
  selectedGameMode
});

