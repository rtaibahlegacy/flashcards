import {ADD_DECK} from '../actions/types';
import {combineReducers} from 'redux';

export default combineReducers({
  decks: (state = {}, action) => {
    switch (action.type) {
      case ADD_DECK:
        console.log('I am a reducer');
        console.log('payload', action.payload);

      default:
        return state;
    }
  },

  quiz: () => {
    return {};
  },
});
