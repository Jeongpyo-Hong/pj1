// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator
export const addNumber = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  };
};

export const minusNumber = (num) => {
  return {
    type: MINUS_NUMBER,
    num,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.num,
      };
    case MINUS_NUMBER:
      return {
        number: state.number + action.num,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
