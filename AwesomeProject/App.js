import React from 'react'
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextBase,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppNavigationStack from './appConfiguration/appRouting';
import { styles } from "./style";


function App() {

 

  return (
    <>
    <AppNavigationStack/>
    </>
  )
}

export default App
