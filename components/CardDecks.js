import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const CardDecks = ({
  cardDecks,
}) => (
    <ScrollView>
      {
        cardDecks.map(cardDeck => {
          return (
            <View>

            </View>
          );
        })
      }
    </ScrollView>
  );

// CardDecks.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default CardDecks;