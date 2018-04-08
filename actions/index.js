//----------------------------------------------------------------
// PLAYERS
let nextPlayerId = 0;
export const addPlayer = (playerName, photoSource) => ({
  type: 'ADD_PLAYER',
  playerId: nextPlayerId++,
  playerName,
  photoSource
})

export const removePLayer = (playerId) => ({
  type: 'REMOVE_PLAYER',
  playerId
})

export const showActionsPlayer = (playerId) => ({
  type: 'SHOW_PLAYER_ACTIONS',
  playerId
})

export const pressPlayer = (playerId) => ({
  type: 'PRESS_PLAYER',
  playerId
})


//----------------------------------------------------------------
// DECKS
let nextDeckId = 0;
export const addDeck = (deckName, defaultShownSide) => ({
  type: 'ADD_DECK',
  id: nextDeckId++,
  deckName,
  defaultShownSide
})

export const removeDeck = (deckId) => ({
  type: 'REMOVE_DECK',
  deckId
})

export const showActionsDeck = (deckId) => ({
  type: 'SHOW_DECK_ACTIONS',
  deckId
})

export const shuffleDeck = (deckId) => ({
  type: 'SHUFFLE_DECK',
  deckId
})

export const pressDeckCard = (playerId, cardId) => ({
  type: 'PRESS_DECK_CARD',
  cardId
})


//----------------------------------------------------------------
// HAND
export const pressHandCard = (playerId, cardId) => ({
  type: 'PRESS_HAND_CARD',
  cardId
})

export const activateMassSelect = (cardId) => ({
  type: 'ACTIVATE_MASS_SELECT',
  cardId
})


//----------------------------------------------------------------
// CARD
export const flipCard = (cardId) => ({
  type: 'FLIP_CARD',
  cardId
})