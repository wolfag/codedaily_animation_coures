import React, {Component} from 'react';

import {View, Animated, PanResponder, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class DecayAnimation extends Component {
  constructor(props) {
    super(props);

    this.animation = new Animated.ValueXY(0);

    this._x = 0;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // this.animation.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.animation.x,
            dy: this.animation.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(this.animation, {
          velocity: {x: vx, y: vy},
          deceleration: 0.997,
        }).start();
      },
    });
  }

  render() {
    const animatedStyle = {
      transformer: this.animation.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder?.panHandlers}
          style={[styles.box, animatedStyle]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
});
