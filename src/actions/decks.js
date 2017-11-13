import {ADD_DECK} from './types';

export function addDeck(title, description) {
  return {
    type: ADD_DECK,
    title,
    description,
  };
}
