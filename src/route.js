import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BGAnimation from './BGAnimation';
import EventAnimation from './EventAnimation';
import DecayAnimationF from './DecayAnimation/DecayAnimationF';
import ExtrapolateAnimation from './ExtrapolateAnimation';
import DecayAnimationC from './DecayAnimation/DecayAnimationC';

const Stack = createStackNavigator();

export default function RootNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BGAnimation" component={BGAnimation} />
        <Stack.Screen name="EventAnimation" component={EventAnimation} />
        <Stack.Screen name="DecayAnimationF" component={DecayAnimationF} />
        <Stack.Screen name="DecayAnimationC" component={DecayAnimationC} />
        <Stack.Screen
          name="ExtrapolateAnimation"
          component={ExtrapolateAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
