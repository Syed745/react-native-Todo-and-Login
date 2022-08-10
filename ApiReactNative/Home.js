import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyComponent from './cards';

function HomeScreen({ navigation, route }) {

    // const [auth, setAuth] = useState(false)
    const [productDetails, setProductDetails] = useState([]);

    const User = () => {

        axios.get('https://fakestoreapi.com/products')
            .then((res) => { setProductDetails(res.data) })
    }
    console.log(productDetails)




    //console.log(route.params);

    useEffect(() => {
        // if (!auth) {
        //     navigation.navigate('Login')
        // }
        User()
    }, [])



    return (
        <>

            <View>
           
                <Button title='click' onPress={User} />
            

           
            </View>



        </>
    );



}

export default HomeScreen