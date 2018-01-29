const TYPES = {
  GET_ROUNDS = "GET_ROUNDS",
  ADD_ROUND = "ADD_ROUND"
};


const list = (state = [], action) => {
  switch (action.type) {
    case TYPES.GET_ROUNDS: {
      return state;
    }
    case TYPES.ADD_ROUND: {
      return [...state, action.round]
    };
  }
}

export const actions = {
  fetchRounds: () => {
    return (dispatch) => {
      dispatch({
        type: TYPES.GET_ROUNDS
      });
    }
  }
}

export default combineReducers({
  list
});

