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
import Players from './Players';
import PlayersContainer from '../containers/PlayersContainer';
import { addPlayer } from '../actions';

const data = {
  players: [
    {
      id: 0,
      playerName: 'Etienne',
      photoSource: require('../assets/players/etienne.jpg'),
      cards: cards.splice(0, 5)
    },
    {
      id: 1,
      playerName: 'Alexis',
      selected: true,
      photoSource: require('../assets/players/alexis.jpg'),
      cards: cards.splice(0, 5)
    },
    {
      id: 2,
      playerName: 'Simon',
      photoSource: require('../assets/players/simon.jpg'),
      cards: cards.splice(0, 5)
    },
    {
      id: 3,
      playerName: 'Maxime',
      photoSource: require('../assets/players/alexis.jpg'),
      cards: cards.splice(0, 5)
    },
    {
      id: 4,
      playerName: 'Gael',
      photoSource: require('../assets/players/gaelle.jpg'),
      cards: cards.splice(0, 5)
    },
  ],
  communityDecks: [
    {
      id: 0,
      deckName: 'main',
      cards: cards
    },
    {
      id: 1,
      deckName: 'main2',
      cards: cards
    },
    {
      id: 2,
      deckName: 'main3',
      cards: cards
    },
    {
      id: 3,
      deckName: 'main4',
      cards: cards
    },
    {
      id: 4,
      deckName: 'main5',
      cards: cards
    },
    {
      id: 5,
      deckName: 'dump',
      cards: []
    },
  ],
  selectedCards: [],
  selectedPlayer: null
};

export default class GameScreen extends Component {

  static navigationOptions = {
    title: 'Game screen',
  };

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.communityDecksContainer}>
          <ScrollView
            removeClippedSubviews={true}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          {
            data.communityDecks.map(deck => {
              return (
                <View style={styles.center}>
                  <CardDeck 
                    {...deck} 
                    faceUp={true} 
                    key={deck.id}
                  />
                </View>
              );
            })
          }

          </ScrollView>
        </View>

        <View style={styles.handContainer}>          
          <CardHand cards={cards}/>
        </View>

        <View style={styles.playersContainer}>
          <PlayersContainer navigation={this.props.navigation} />
          {/* <Players players={data.players}/> */}
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
    // backgroundColor: '#ffffff',
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
    backgroundColor: '#ffa280'
  },
  playersContainer: {
    flex: 2,
    // backgroundColor: '#cccccc'
  }
});