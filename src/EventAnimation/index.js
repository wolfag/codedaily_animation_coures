import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Animated} from 'react-native';

export class EventAnimation extends Component {
  constructor(props) {
    super(props);

    this.animation = new Animated.Value(0);
  }

  render() {
    const backgroundInterpolation = this.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
    });
    const backgroundStyle = {
      backgroundColor: backgroundInterpolation,
    };

    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          // opt1
          onScroll={Animated.event([
            {
              nativeEvent: {contentOffset: {y: this.animation}},
            },
          ])}

          // opt2
          // onScroll={e => {
          //   this.animation.setValue(e.nativeEvent.contentOffset.y);
          // }}
        >
          <Animated.View style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

export default EventAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {height: 3000},
});
