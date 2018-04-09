import React from 'react';
import {
  View,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Button } from 'native-base';
import PlayerAvatar from './PlayerAvatar';
import IconButton from './IconButton';

const Players = ({
  players,
  selectedPlayerId = -1,
  onPressPlayer,
  onPressAdd
}) => {
  return (
    <View style={styles.playersContainer}>
      <ScrollView
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          players.map(player => (
            <View key={player.id} style={styles.playerContainer}>
              {player.playerId === selectedPlayerId &&
                <View style={styles.selectedArrow} />
              }
              <PlayerAvatar
                playerName={player.playerName}
                photoSource={player.photoSource}
                onPressImage={() => onPressPlayer(player.playerId)}
              />
            </View>
          ))
        }
        <View style={styles.addIconContainer}>
          <IconButton 
            iconName={'md-add'} 
            radius={30} 
            onPress={onPressAdd}
          />
        </View>
      </ScrollView>
    </View>
  )
};

Players.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photoSource: PropTypes.oneOfType([
        PropTypes.shape({
          uri: PropTypes.string,
        }),
        // Opaque type returned by require('./image.jpg')
        PropTypes.number,
      ])
    })
  ),
  onPressPlayer: PropTypes.func,
  onPressAdd: PropTypes.func
};

const styles = StyleSheet.create({
  playersContainer: {
    flex: 1,
  },
  playerContainer: {
    margin: 5,
    marginTop: 0,
    padding: 5,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIconContainer: {
    flex: 1,
    width: 80,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedArrow: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffa280',
    transform: [
      { rotate: '180deg' },
      { translateY: 75 }
    ]

  }
});

export default Players;