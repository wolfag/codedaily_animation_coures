import React, {Component} from 'react';
import {Text, View, Animated, StyleSheet} from 'react-native';

export class BGAnimation extends Component {
  constructor(props) {
    super(props);

    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const bgStyle = {
      backgroundColor: this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255,99,71,1)', 'rgba(255,99,71,0)'],
      }),
    };
    const boxStyle = {
      backgroundColor: this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
      }),
    };
    return (
      <Animated.View style={[styles.container, bgStyle]}>
        <Animated.View style={[styles.box, boxStyle]} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
});

export default BGAnimation;
