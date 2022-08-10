import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import MyComponent from '../component/card.'
import { Button } from 'react-native-paper'

const Home = ({ navigation }) => {

    const [slectCategory, setSlectCategory] = useState(0)
    const [categories, setCategories] = useState([
        {
            name: 'ALL'
        },
        {
            name: 'POPULAR'
        },
        {
            name: 'TOP RATED'
        },
        {
            name: 'FEATURED'
        },
        {
            name: 'LUXURY'
        },
    ])


    const logOut = () => {
        auth()
            .signOut()
            .then(() => Alert.alert('CONFIRMED', 'User signed out!'));
        navigation.push('Login')

    }

    return (
        <View>
            <View style={styles.headr}>
                <Text style={styles.fSize}>
                    Orchid Hotels
                </Text>
                <Text style={styles.icon}>
                    <Icon name='person' size={40} />
                </Text>
            </View>
            <View>
                <Button onPress={logOut} style={{ backgroundColor: '#f5cb5c', margin: 20,borderColor:'black',borderWidth:1 }} color='black' >LOGOUT</Button>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputTxt} keyboardType='text' placeholder='Search' />
                    <Pressable>
                        <Icon style={styles.serachIcon} name='search' />
                    </Pressable>
                </View>
                <View style={styles.categories}>
                    {categories.map((e, i) =>
                        <Pressable key={i}>
                            <Text style={{ fontWeight: 'bold', color: '#0d1b2a' }}>
                                {/* slectCategory == i ? '#8d99ae' : */}
                                {e.name}
                            </Text>
                        </Pressable>
                    )}
                </View>
            </View>
            <MyComponent />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    fSize: {
        fontSize: 22,
        fontWeight: 'bold', color: 'black',

    },
    headr: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
        elevation: 10,
        backgroundColor: '#f5cb5c',
        alignItems: 'center',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor:'black',borderWidth:1 

    },
    icon: {
        backgroundColor: '#fefae0',
        color: '#f5cb5c',
        borderRadius: 20,
        padding: 5,
        borderColor:'black',borderWidth:1 
    },
    serachIcon: {
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 20,
        color: '#0d1b2a', fontSize: 30,


    },
    inputTxt: {
        fontSize: 18, marginLeft: 20,
        
    },
    inputView: {
        marginTop: 2,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        borderRadius: 20, elevation: 10, fontSize: 30,
        borderColor:'black',borderWidth:1 
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#f5cb5c',
        padding: 12,
        borderColor:'black',borderWidth:1 


    }
})