import axios from 'axios';
import * as React from 'react';
import { FlatList, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => {
    const [productDetails, setProductDetails] = React.useState([]);
    const [itemRating, setItemRating] = React.useState([]);

    const User = () => {

        axios.get('http://fake-hotel-api.herokuapp.com/api/hotels')
            .then((res) => { setProductDetails(res.data) })
    }
    React.useEffect(() => {
        User()
    }, [])


    return (
        <>

            <FlatList
                style={{ backgroundColor: '#f5cb5c', marginTop: 10 }}
                data={productDetails}
                renderItem={({ item }) => {
                    return (<>

                        <Card style={{
                            elevation: 50, margin: 10, padding: 10,
                            borderColor: 'black', borderWidth: 1
                        }}>
                            <Card.Title title={item.name} subtitle={item.id} left={LeftContent} />
                            <Card.Content>
                                <Title>{item.country}</Title>
                                <Paragraph>{item.city}</Paragraph>
                                <Paragraph style={{ fontWeight: 'bold', fontSize: 20 }}> $ {item.price}</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" }} />
                            <Card.Actions>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {Math.floor(item.rating)}
                                </Text>
                                <Paragraph>

                                    {<Icon name='star' size={20} style={{ color: 'orange', }} />}
                                    {<Icon name='star' size={20} style={{ color: 'orange' }} />}
                                    {<Icon name='star' size={20} style={{ color: 'orange' }} />}
                                    {<Icon name='star' size={20} style={{ color: 'orange' }} />}
                                    {<Icon name='star' size={20} style={{ color: 'orange' }} />}

                                </Paragraph>


                            </Card.Actions>
                        </Card>
                    </>)
                }}
            />
        </>
    );
}

export default MyComponent;