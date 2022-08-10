import React, { useEffect, useState } from 'react'
import { Avatar, Card, Title, Paragraph, } from 'react-native-paper';
import { Alert, Button, Text } from 'react-native';
import axios from 'axios';
import { FlatList, View } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent=({ navigation }) => {
    const [productDetails, setProductDetails] = useState([]);

    const User = () => {

        axios.get('https://fakestoreapi.com/products')
            .then((res) => { setProductDetails(res.data) })
    }
    




    //console.log(route.params);

    useEffect(() => {
        // if (!auth) {
        //     navigation.navigate('Login')
        // }
        User()
    }, [])


    //navigation
    // const navigation = useNavigation();
    const addToCard = (res) => {
        navigation.navigate('Product Detail', res)
       // Alert.alert('One more step to buy this product')

    }

    return (
        <>
            <FlatList
                style={{backgroundColor:'#83c5be'}}
                data={productDetails}
                renderItem={({ item }) => {
                    return (<>
                        <Card style={{elevation:15, backgroundColor: '#edf6f9', margin: 10 }}>
                            <Card.Title title="Card Title" subtitle={item.category} left={LeftContent} />
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph> RS :{item.price}</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: item.image }}  />
                            <Card.Actions>
                                <View style={{ width: '100%', }}>

                                    <Button
                                        title='ADD TO CARD'

                                        style={{ backgroundColor: '#006d77', }}

                                        onPress={() => addToCard(item)}
                                    />
                                </View>

                            </Card.Actions>
                        </Card>
                    </>)

                }}
            />
            <Button title='GO TO TODO' color='purple' onPress={() => navigation.navigate('Todo')} />

        </>
    )
};
export default MyComponent;