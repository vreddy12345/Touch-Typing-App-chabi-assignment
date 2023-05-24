import { combineReducers } from 'redux';

const currentKeyReducer = (state = '', action) => {
  switch (action.type) {
    case 'START_PRACTICE':
      return 'a'; // Start with the first key
    case 'FINISH_PRACTICE':
      return '';
    default:
      return state;
  }
};

const inputReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return state + action.payload;
    case 'START_PRACTICE':
    case 'FINISH_PRACTICE':
      return '';
    default:
      return state;
  }
};

const timerReducer = (state = null, action) => {
  switch (action.type) {
    case 'START_PRACTICE':
      return 5 * 60; // 5 minutes
    case 'UPDATE_INPUT':
    case 'FINISH_PRACTICE':
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentKey: currentKeyReducer,
  input: inputReducer,
  timer: timerReducer,
});

export default rootReducer;
