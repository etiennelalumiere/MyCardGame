import { connect } from 'react-redux';
// import {  } from '../actions';
import CardHand from '../components/CardHand';

// const getSelectedPlayer = players => {
//     const selectedPlayer = players.filter(player => player.selected)

//     if (selectedPlayer.length === 1) {
//       return selectedPlayer[0];
//     } else {
//       return null;
//     }
// }

const getSelectedPlayer = state => {
  const { playerId } = state.selections; 

  if (playerId === -1) {
    return null;
  } else {
    return state.players.filter(player => player.playerId === playerId)[0];
  }
}

const mapStateToProps = state => ({
  player: getSelectedPlayer(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardHand);