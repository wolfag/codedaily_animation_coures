import React, {Component, useRef} from 'react';

import {View, Animated, PanResponder, StyleSheet} from 'react-native';

export default function DecayAnimation() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, {vx, vy}) => {
        pan.flattenOffset();
        Animated.decay(pan, {
          velocity: {x: vx, y: vy},
          deceleration: 0.997,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: pan.getTranslateTransform(),
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
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
