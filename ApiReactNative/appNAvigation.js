import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Todo from './todo';
import Products from './products';
import MyComponent from './cards';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyComponent} />
        <Stack.Screen name="Product Detail" component={Products} />
        <Stack.Screen name="Todo" component={Todo} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;