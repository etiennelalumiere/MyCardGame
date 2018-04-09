import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import Card from './Card';

const CardHand = ({
  player,
  faceUp = true,
  onPressCard,
  onLongPressCard
}) => {
  return (
    <View style={[
      styles.handContainer, 
      (player) ? { backgroundColor: '#ffa280' } : {}
    ]}>
      <FlatList
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={player ? player.cards : []}
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
    flex: 1,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});

export default CardHand;