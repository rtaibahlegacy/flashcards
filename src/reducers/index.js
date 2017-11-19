import {ADD_DECK} from '../actions/types';
import {REHYDRATE} from 'redux-persist/constants';
import {combineReducers} from 'redux';
import _ from 'lodash';

export default combineReducers({
  decks: (state = {}, action) => {
    switch (action.type) {
      case REHYDRATE:
        return action.payload.decks || [];
      case ADD_DECK:
        return {
          ...state,
          [action.uuid]: {
            id: action.uuid,
            title: action.title,
          },
        };

      default:
        return state;
    }
  },

  quiz: () => {
    return {};
  },
});
