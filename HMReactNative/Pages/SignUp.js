import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {

    const [user, setUser] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const creatUser = () => {
        let obj = {
            email,
            password
        }
        auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    Alert.alert('Alert','User account created & signed in!');
    
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }

    Alert.alert(error);
  });
    }

    const nav = () => {
        navigation.navigate("Login")
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={{ fontSize: 50, color: 'white', alignSelf: 'center' }}>
                    SIGN UP
                </Text>
                <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>
                    Create Account
                </Text>
                <View style={styles.childContainer}>
                    <Text style={styles.personIcon}>
                        <Icon name='person' size={80} style={{ color: 'white', elevation: 50 }} />
                    </Text>

                    <View style={styles.inputs}>
                        <TextInput
                            label="Enter You Username"
                            keyboardType='text'
                            onChangeText={(e)=>(e)}
                             />
                    </View>
                    <View style={styles.inputs}>
                        <TextInput
                            label="Enter You Email"
                            keyboardType='email' 
                            value={email}
                            onChangeText={(e)=>setEmail(e)}
                            />
                    </View>
                    <View style={styles.inputs}>

                        <TextInput
                            label="Enter You Password"
                            keyboardType='password'
                            secureTextEntry={true} 
                            value={password}
                            onChangeText={(e)=>setPassword(e)}
                            />
                    </View>
                    <Text>Already Have An Account?
                    </Text>

                    <Button mode="text" onPress={nav}> Login</Button>
                    <View
                        style={styles.signup}>
                        <Button icon="camera" mode="contained" color='black'
                        onPress={creatUser}>
                            SIGN UP
                        </Button>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        backgroundColor: '#0d1b2a'
    },
    signup: {
        width: '100%',
    },
    inputs: {
        width: 330, margin: 20
    },
    personIcon: {
        borderRadius: 55, padding: 10,
        backgroundColor: '#0d1b2a'
    },
    childContainer: {
        alignItems: 'center', elevation: 20,
        backgroundColor: '#ffffff', height: 550,
        margin: 15, padding: 20,
        borderRadius: 10
    }
})