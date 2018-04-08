import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardDeck = ({
  cards,
  deckName,
  faceUp = false
}) => (
    <View style={styles.cardDeckContainer}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Empty</Text>
      </View>

      <Text style={styles.deckName}>{deckName}</Text>
      
      {cards[0] &&
        <View style={[
          styles.cardContainer, 
          { 
            zIndex: 4,
            elevation: 4,
            transform: [
              {scale: 1},
              {translateY: 0}
            ]
          }
        ]}>
          <Card 
            {...cards[0]} 
            small
            faceUp={faceUp}
            opacity={1}
          />
        </View>
      }

      {cards[1] &&
        <View style={[
          styles.cardContainer, 
          { 
            zIndex: 3,
            elevation: 3,
            transform: [
              {scale: 0.9},
              {translateY: 12}
            ]
          }
        ]}>
          <Card 
            {...cards[1]} 
            small
            faceUp={faceUp}
            opacity={0.66}
          />
        </View>
      }

      {cards[2] &&
        <View style={[
          styles.cardContainer, 
          { 
            zIndex: 2,
            elevation: 2,
            transform: [
              {scale: 0.8},
              {translateY: 24}
            ]
          }
        ]}>
          <Card 
            {...cards[2]} 
            small
            faceUp={faceUp}
            opacity={0.33}
          />
        </View>
      }

      {cards[3] &&
        <View style={[
          styles.cardContainer, 
          { 
            zIndex: 1,
            elevation: 1,
            transform: [
              {scale: 0.7},
              {translateY: 36}
            ]
          }
        ]}>
          <Card 
            {...cards[3]} 
            small
            faceUp={faceUp}
            opacity={0}
          />
        </View>
      } 
      
    </View>
  );

const styles = StyleSheet.create({
  cardDeckContainer: {
    width: 100,
    height: 150,
    alignItems: 'center'
  },
  cardContainer: {
    position: 'absolute',
    backgroundColor: '#cccccc',
    borderRadius: 5,
    marginTop: 10
  },
  placeholder: {
    width: 60,
    height: 90,
    marginTop: 15,
    borderRadius: 5,
    borderColor: 'darkgrey',
    borderStyle: 'dotted',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    color: 'darkgrey'
  },
  deckName: {
    marginTop: 17,
  }
});

export default CardDeck;