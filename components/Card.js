import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class Card extends Component {

  constructor(props) {
    super(props);

    this._lastPress = new Date();
  }

  onPressHandler = () => {
    const currentTime = new Date();

    if (currentTime.getTime() - this._lastPress.getTime() < 250) {
      this._lastPress = currentTime;
      console.log('double press')

      if (this.props.onDoublePress) {
        this.props.onDoublePress();
      }
    } else {
      this._lastPress = currentTime;
      console.log('single press')

      if (this.props.onSinglePress) {
        this.props.onSinglePress()
      }
    }

  }

  render() {
    const {
      frontImage,
      backImage,
      faceUp = false,
      selected = false,
      big,
      small,
      onSinglePress,
      onDoublePress,
      onLongPress
    } = this.props;

    let imageStyle;
    if (big) {
      imageStyle = styles.big;
    } else if (small) {
      imageStyle = styles.small;
    } else {
      imageStyle = styles.big;
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.onPressHandler}
        onLongPress={onLongPress}
        delayLongPress={1000}
      >
        <View style={[styles.container, imageStyle]}>
          {selected &&
            <View style={[styles.overlay, imageStyle]} />
          }
          <Image
            resizeMethod={'resize'}
            style={imageStyle}
            source={faceUp ? frontImage : backImage}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  overlay: {
    backgroundColor: 'green',
    opacity: 0.3,
    position: 'absolute',
    zIndex: 1
  },
  big: {
    width: 133,
    height: 200,
    borderRadius: 10,
  },
  small: {
    width: 66,
    height: 100,
    borderRadius: 5,
  }
});
