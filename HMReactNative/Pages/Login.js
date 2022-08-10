import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextBase,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../style';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';





const Login=({navigation})=> {

    const nav =()=>{
        navigation.push("Signup")
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                //setLoader(false);
                navigation.navigate("Home",email)
                // ...
            }).catch((error) => {
               // setLoader(false);
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert('Erro',"Invalid username or password");
            });
       // navigation.navigate('Home', { email: email })
    }



    return (

        <View style={{ backgroundColor: '#0d1b2a' }}>
            <View style={{ backgroundColor: '#0d1b2a', height: 200, }}>
                <Text style={{color:'white', fontSize: 40, marginTop: 40, fontWeight: 'bold', textAlign: 'center' }}>
                    Login Account
                </Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center',color:'white', }}>
                    Don't  Have An Account Please Signup
                </Text>

            </View>
            <View style={{ backgroundColor: 'white', height: '100%', elevation: 30, borderTopRightRadius: 50, borderTopLeftRadius: 50, alignItems: 'center', }}>
                <Text style={{
                    textAlign: 'center', marginTop: 20, backgroundColor: '#0d1b2a', color: 'white', width: 100,
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
                    <TouchableOpacity style={styles.email}>
                        <Text style={{ marginTop: 8 }}>
                            Don't have an account please create
                           
                        </Text>
                    <Button  mode="text" onPress={nav}> SIGN UP</Button>
                            
                    </TouchableOpacity>
                    

                        <Text style={{alignSelf:'center',color:'blue',margin:10}}>Forgot Password</Text>
                  
                    <Button icon="camera" mode="contained" color='black' onPress={loginUser}>
                            LOGIN
                        </Button>

                   <Icon name='facebook' style={{alignSelf:'center',marginTop:20,fontSize:50,color:'#118ab2'}} size={20} />
                </SafeAreaView>

            </View>
        </View>
        // Third Page end //
    )
}

export default Login