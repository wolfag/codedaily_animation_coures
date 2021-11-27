import React, {Component} from 'react';

import {View, Animated, PanResponder, StyleSheet} from 'react-native';

export default class DecaypanC extends Component {
  pan = new Animated.ValueXY(0);

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // this.pan.extractOffset();
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: this.pan.x,
          dy: this.pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: (e, {vx, vy}) => {
      this.pan.flattenOffset();
      Animated.decay(this.pan, {
        velocity: {x: vx, y: vy},
        deceleration: 0.997,
        useNativeDriver: false,
      }).start();
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder?.panHandlers}
          style={[styles.box, {transformer: this.pan.getTranslateTransform()}]}
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
