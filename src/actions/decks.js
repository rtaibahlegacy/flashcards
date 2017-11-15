import UUID from 'uuid';
import {ADD_DECK} from './types';

export function addDeck(title) {
  const uuid = UUID();
  return {
    type: ADD_DECK,
    title,
    uuid,
  };
}
