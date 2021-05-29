import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export class ExtrapolateAnimation extends Component {
  constructor(props) {
    super(props);

    this.animation = new Animated.Value(1);
  }

  startAnimation = () => {
    Animated.timing(this.animation, {
      toValue: 3,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.animation, {
        toValue: 0.5,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };

  render() {
    const scale = this.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
      // extrapolate: 'clamp',
      extrapolate: 'identity',
      // extrapolate: 'extend',
      // extrapolateRight: 'extend',
      // extrapolateLeft: 'clamp',
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.box,
            {
              transform: [{scale}],
            },
          ]}
          onPress={this.startAnimation}>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ExtrapolateAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
