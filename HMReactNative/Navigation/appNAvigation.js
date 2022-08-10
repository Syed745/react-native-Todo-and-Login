import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login';
import Home from '../screens/Home.js';
import Signup from '../Pages/SignUp';




const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerBackVisible: false,
          headerTransparent: true,
          headerTitleAlign: 'center'
        }}
          name="Signup" component={Signup} />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center'
          }} name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            headerTransparent: true,
            headerBackTitleVisible:false,headerTitleAlign:'center',
          }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;