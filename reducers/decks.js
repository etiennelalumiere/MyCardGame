import { cards } from '../cards';

const initialState = [
  {
    deckId: 0,
    deckName: 'main',
    cards: [...cards]
  },
  {
    deckId: 1,
    deckName: 'slot 1',
    cards: []
  },
  {
    deckId: 2,
    deckName: 'slot 2',
    cards: []
  },
  {
    deckId: 3,
    deckName: 'slot 3',
    cards: []
  },
  {
    deckId: 4,
    deckName: 'dump',
    cards: []
  },
];

const decks = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default decks;