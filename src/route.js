import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BGAnimation from './BGAnimation';

const Stack = createStackNavigator();

export default function RootNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BGAnimation" component={BGAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
