import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import CardDeck from './CardDeck';
import { cards } from '../cards';


export default class TestScreen2 extends Component {

  static navigationOptions = {
    title: 'Test screen 2',
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <CardDeck cards={cards} faceUp={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 3,
    borderRadius: 5
  }
});