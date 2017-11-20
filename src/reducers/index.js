import {ADD_DECK, ADD_CARD} from '../actions/types';
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

      case ADD_CARD:
        console.log(action.question, action.answer);
        return {
          ...state,
          questions: [
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        };

      default:
        return state;
    }
  },

  quiz: () => {
    return {};
  },
});
