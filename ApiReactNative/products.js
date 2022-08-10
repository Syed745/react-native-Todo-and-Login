import { View, Text, FlatList, Image, Button, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Products = ({ navigation, route }) => {

    const [render, setRender] = useState({});
    const products = route.params;

    console.log(products)

    // useEffect(() => {
    //     setRender(state)
    // }, [])
    return (<>

        <SafeAreaView>
            <ScrollView>

            <View>
                    <Text style={{fontSize:20,textAlign:'center',backgroundColor:'#e5e5e5',elevation:30,padding:4}}>{products.title}</Text>
                <View style={{ elevation: 40, padding: 20, backgroundColor: 'white' }}>
                    <Image style={{ padding: 20, width: "100%", height: 500, elevation: 50, }} source={{ uri: products.image }} />
                
            <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>
              RS : {products.price}
            </Text>
                </View>
                    <Text style={{fontSize:20,textAlign:'center',elevation:30,padding:10}}>{products.description}</Text>
            <Button title='BUY NOW' />
            </View>
            </ScrollView>
        </SafeAreaView>

    </>
    )
}

export default Products