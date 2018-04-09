import { cards } from '../cards'

const initialState = [
  {
    playerId: 0,
    selected: false,
    playerName: 'Etienne',    
    photoSource: require('../assets/players/etienne.jpg'),
    cards: cards.splice(0, 5)
  },
  {
    playerId: 1,
    selected: true,
    playerName: 'Alexis',    
    photoSource: require('../assets/players/alexis.jpg'),
    cards: cards.splice(0, 5)
  },
  {
    playerId: 2,
    selected: false,
    playerName: 'Simon',    
    photoSource: require('../assets/players/simon.jpg'),
    cards: []
  },
  {
    playerId: 3,
    selected: false,
    playerName: 'Gaelle',
    photoSource: require('../assets/players/gaelle.jpg'),
    cards: []
  },
];

const player = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        playerId: action.playerId,
        playerName: action.playerName,
        photoSource: action.photoSource,
        cards: []
      };
    default:
      return state;
  }
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        player(undefined, action)
      ];
    case 'REMOVE_PLAYER':
      return state.filter(player => player.playerId !== action.playerId)
    default:
      return state;
  }
};

export default players;