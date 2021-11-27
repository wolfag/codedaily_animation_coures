import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Button routeName="BGAnimation" text="BG color animation" />
      <Button routeName="EventAnimation" text="Event animation" />
      <Button routeName="DecayAnimationF" text="Decay F animation" />
      <Button routeName="DecayAnimationC" text="Decay C animation" />
      <Button routeName="ExtrapolateAnimation" text="Extrapolate animation" />
    </View>
  );
}

const Button = ({routeName, text}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate(routeName);
      }}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
  },
});
