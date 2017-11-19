import UUID from 'uuid';
import {ADD_DECK, ADD_CARD} from './types';

export function addDeck(title) {
  const uuid = UUID();
  return {
    type: ADD_DECK,
    title,
    uuid,
  };
}

export function addCard(question, answer) {
  console.log('it worked');
  console.log(question, answer);
  return {
    type: ADD_CARD,
    question,
    answer,
  };
}
