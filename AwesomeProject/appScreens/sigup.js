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



function SignUp (){


    return(
        <>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{fontSize:30,color:"black"}}>
                    SignUp Screen
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
        
        </>
    )
}


export default SignUp;