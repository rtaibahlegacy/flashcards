import {ADD_DECK} from '../actions/types';
import {combineReducers} from 'redux';

export default combineReducers({
  decks: (state = {}, action) => {
    switch (action.type) {
      case ADD_DECK:
        return {
          ...state,
          decks: action.title,
        };

      default:
        return state;
    }
  },

  quiz: () => {
    return {};
  },
});
