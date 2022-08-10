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


function Login() {

  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  return (


    <View style={{ backgroundColor: '#caf0f8' }}>
      <View style={{ backgroundColor: '#caf0f8', height: 200, }}>
        <Text style={{ fontSize: 40, marginTop: 40, fontWeight: 'bold', textAlign: 'center' }}>
          Login Account
        </Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>
          If You Have Account Please Login
        </Text>

      </View>
      <View style={{ backgroundColor: 'white', height: '100%', elevation: 30, borderTopRightRadius: 50, borderTopLeftRadius: 50, alignItems: 'center', }}>
        <Text style={{
          textAlign: 'center', marginTop: 20, backgroundColor: '#caf0f8', color: 'black', width: 100,
          height: 90,
          borderRadius: 60
        }} >

          <Icon name='person' size={80} style={{ color: 'caf0f8', padding: 3 }} />
        </Text>
        <SafeAreaView style={{ marginTop: 50 }} >
          <Text style={styles.email}>
            Email
          </Text>
          <TextInput
            style={{
              width: 350,
              height: 40,
              margin: 12,
              borderColor: '#011627',
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
            }}
            placeholder='Enter Email'
            autoCapitalize='email'
          />
          <Text style={styles.email}>
            {"\n"}
            Password
          </Text>
          <TextInput
            style={{
              width: 350,
              height: 40,
              margin: 12,
              borderColor: '#011627',
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
            }}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter Password"
            keyboardType="password"
            secureTextEntry={true}
          />
          <Pressable style={styles.email}>
            <Text style={{ marginTop: 8 }}>
              Already Have An Account
              <Text style={{ color: 'blue' }}  > SIGNUP </Text>
              <Text>
                {"\n"}
              </Text>
            </Text>
          </Pressable>
          <Button title='LOGIN'
            color='green' />
        </SafeAreaView>

      </View>
    </View>
    // Third Page end //
  )
}

export default Login;
