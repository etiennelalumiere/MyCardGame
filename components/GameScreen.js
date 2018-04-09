import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { cards } from '../cards';
import Card from './Card';
import CardDeck from './CardDeck';
import CardHand from './CardHand';
import PlayersContainer from '../containers/PlayersContainer';
import CardHandContainer from '../containers/CardHandContainer';
import CommunityDecksContainer from '../containers/CommunityDecksContainer';

export default class GameScreen extends Component {

  static navigationOptions = {
    title: 'Game screen',
  };

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.communityDecksContainer}>
          <CommunityDecksContainer />
        </View>

        <View style={styles.handContainer}>          
          <CardHandContainer />
        </View>

        <View style={styles.playersContainer}>
          <PlayersContainer navigation={this.props.navigation} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  communityDecksContainer: {
    flex: 2,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addDeck: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  handContainer: {
    flex: 3,
  },
  playersContainer: {
    flex: 2,
  }
});