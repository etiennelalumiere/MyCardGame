import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CardDeck from './CardDeck';

const CommunityDecks = ({
  decks,
  onPress,
}) => {
  return (
    <View style={styles.decksContainer}>
      <ScrollView
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          decks.map(deck => {
            return (
              <View key={deck.deckId} style={styles.center}>
                <CardDeck
                  {...deck}
                  faceUp={true}                  
                />
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  decksContainer: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CommunityDecks;




