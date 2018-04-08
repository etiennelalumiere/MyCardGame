import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';


export default class TestScreen extends Component {

  static navigationOptions = {
    title: 'Test screen',
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.deckContainer}>
          <View style={[styles.card, { 
            zIndex: 5,
            elevation: 5,
            opacity: 1,
            transform: [
              {scale: 1},
              {translateY: 0}
            ]
          }]}/>
          <View style={[styles.card, { 
            zIndex: 4,
            elevation: 4,
            opacity: 0.66,
            transform: [
              {scale: 0.9},
              {translateY: 20}
            ]
          }]}/>
          <View style={[styles.card, { 
            zIndex: 3,
            elevation: 3,
            opacity: 0.33,
            transform: [
              {scale: 0.8},
              {translateY: 40}
            ]
          }]}/>
          <View style={[styles.card, { 
            zIndex: 2,
            elevation: 2,
            opacity: 0,
            transform: [
              {scale: 0.7},
              {translateY: 60}
            ]
          }]}/>

        </View>
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