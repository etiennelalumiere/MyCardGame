import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import Card from './Card';

const CardHand = ({
  cards,
  faceUp = true,
  onPressCard,
  onLongPressCard
}) => {
  return (
    <View style={styles.handContainer}>
      <FlatList
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={(card, index) => card.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Card {...item} faceUp={faceUp} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  handContainer: {
    flex: 1
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});

export default CardHand;