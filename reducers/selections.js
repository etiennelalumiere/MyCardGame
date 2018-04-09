const initialState = {
  playerId: -1,
  cards: []
};

const selections = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PLAYER':
      return {
        ...state,
        playerId: (action.playerId === state.playerId) ? -1 :  action.playerId
      };
    default:
      return state;
  }
};

export default selections;