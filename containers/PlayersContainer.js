import { connect } from 'react-redux';
import { addPlayer, selectPlayer } from '../actions';
import Players from '../components/Players';

const mapStateToProps = state => ({
  players: state.players,
  selectedPlayerId: state.selections.playerId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPressAdd: () => ownProps.navigation.navigate('Player', {
    onConfirm: (name, image) => dispatch(addPlayer(name, image))
  }),
  onPressPlayer: playerId => dispatch(selectPlayer(playerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);