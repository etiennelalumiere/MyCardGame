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
}

const players = (state = [], action) => {
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