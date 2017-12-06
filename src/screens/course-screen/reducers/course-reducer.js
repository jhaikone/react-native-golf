import { AsyncStorage } from 'react-native';

import { combineReducers } from 'redux';


import MOCK_HOLES from '../../../../mocks/holes.json';

const types = {
  GET_HOLES_RECEIVE: "GET_HOLES_RECEIVE",
  GET_HOLES_REQUEST: "GET_HOLES_REQUEST"
}

function initCourses() {

}

function holes(state = [], action) {
  switch (action.type) {
    case types.GET_HOLES_RECEIVE: {
      return Object.assign([], state, action.holes);
    } default: {
      return state;
    }
  }
}



function loading(state = false, action) {
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
  fetchHoles: (dispatch, id) => {
    return (dispatch) => {
      return dispatch({
        type: types.GET_HOLES_RECEIVE,
        holes: MOCK_HOLES.data
      });
    }
  }
}

export default combineReducers({
  loading,
  holes
});

