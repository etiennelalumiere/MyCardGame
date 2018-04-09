import { connect } from 'react-redux';
// import { addPlayer, selectPlayer } from '../actions';
import CommunityDecks from '../components/CommunityDecks';

const mapStateToProps = state => ({
  decks: state.decks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityDecks);