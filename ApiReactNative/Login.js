import React, { useState } from 'react'
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


const Login=({ navigation })=> {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        navigation.navigate('Home', { email: email })
    }



    return (

        <View style={{ backgroundColor: '#caf0f8' }}>
            <View style={{ backgroundColor: '#caf0f8', height: 200, }}>
                <Text style={{ fontSize: 40, marginTop: 40, fontWeight: 'bold', textAlign: 'center' }}>
                    Login Account
                </Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>
                    Don't  Have An Account Please Signup
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
                        onChangeText={(e) => setEmail(e)}
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
                        placeholder="Enter Password"
                        keyboardType="password"
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}

                    />
                    <Pressable style={styles.email}>
                        <Text style={{ marginTop: 8 }}>
                            Don't have an account please create
                            <Text style={{ color: 'blue' }}  > SIGNUP </Text>
                            <Text>
                                {"\n"}
                            </Text>
                        </Text>
                    </Pressable>
                    <Button title='LOGIN'
                        color='green' onPress={loginUser} />
                </SafeAreaView>

            </View>
        </View>
        // Third Page end //
    )
}

export default Login