import { connect } from 'react-redux';
import { addPlayer } from '../actions';
import Players from '../components/Players';

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPressAdd: () => ownProps.navigation.navigate('Player', {
    onConfirm: (name, image) => dispatch(addPlayer(name, image))
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);