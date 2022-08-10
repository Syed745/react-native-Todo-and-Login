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
import { styles } from "./style";



function Home (){


    return(
        <>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{fontSize:30,color:"black"}}>
                        Home Screen
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
        </>
    )
}


export default Home;