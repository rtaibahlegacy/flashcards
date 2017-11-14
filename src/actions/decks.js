import {ADD_DECK} from './types';

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}
