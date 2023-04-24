import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../pages/login';
import ActivityScreen from '../pages/activity';
import HomeScreen from '../pages/home';

const Stack = createNativeStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ActivityScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
