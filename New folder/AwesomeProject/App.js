import React from 'react'
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from "./style";

function App() {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    // First Page //

    // <View
    //   style={{ backgroundColor: '#011627', flex: 1 }}>
    //   <View>
    //     <Text style={styles.titleText}>
    //       LOGIN PAGE
    //     </Text>
    //   </View>
    //   <View
    //     style={styles.container}>


    //     <SafeAreaView>
    //       <Text style={styles.circle}>
    //         <Icon name='person' size={50} />
    //       </Text>
    //       <Text style={styles.email}>
    //         EMAIL
    //       </Text>
    //       <TextInput
    //         value={text}
    //         placeholder="Enter Email"
    //         style={styles.input}
    //       />
    //       <Text
    //         style={styles.email}>
    //         PASSWORD
    //       </Text>
    //       <TextInput
    //         style={styles.input}
    //         onChangeText={onChangeNumber}
    //         value={number}
    //         placeholder="Enter Password"
    //         secureTextEntry={true}
    //       />
    //       <Text style={{ padding: 10, marginLeft: 100, }} >
    //         {"\n"}
    //         <Button title="LOGIN" color="#2E8B57" />
    //       </Text>
    //     </SafeAreaView>
    //     {/* <View  style={{flex:1,}}>

    //   <Button title=''>ihljnkjnj yug</Button>
    //     </View> */}
    //   </View>
    // </View>

    // First Page End//


    <View style={{backgroundColor: '#83c5be',flex:1}}>

      <View style={{backgroundColor:'white', width: "100%", height: 90 ,elevation: 100,}}>
        <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 40, margin: 12 , fontWeight:'bold'}}>
          LOGIN FORM
        </Text>
      </View>

      <View style={styles.container}>
      <SafeAreaView>
           <Text style={styles.circle}>
             <Icon name='person' size={50} />
           </Text>
           <Text style={styles.email}>
             EMAIL
           </Text>
           <TextInput
             value={text}
             placeholder="Enter Email"
             style={styles.input}
           />
           <Text
             style={styles.email}>
             PASSWORD
           </Text>
           <TextInput
             style={styles.input}
             onChangeText={onChangeNumber}
             value={number}
             placeholder="Enter Password"
             secureTextEntry={true}
           />
           <Pressable  style={styles.email}>
              <Text>
                Already Have An Account 
                <Text style={{color:'blue'}}  > SIGNUP </Text>
              </Text>
             </Pressable>
           <Text style={{ padding: 10, marginLeft: 80, }} >
             {"\n"}
             <View style={{width:100}}>

             <Button title="LOGIN" color="#2E8B57"  />
             </View>
             
           </Text>
          <Text>
            <Icon name='instagram' size={20}/>
            
          </Text>
        </SafeAreaView>
      </View>

    </View>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     width: 310,
//     backgroundColor: "white",
//     alignSelf: 'center',
//     marginTop: 90,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 10,
//     borderRadius: 10
//   },
//   titleText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     alignSelf: 'center',
//     marginTop: 90,
//     color: '#a8dadc',
//   }, input: {
//     width: 250,
//     height: 40,
//     margin: 12,
//     borderColor: '#011627',
//     borderWidth: 2,
//     padding: 5,
//     borderRadius: 10,
//   },
//   circle: {
//     textAlign: 'center', fontWeight: "bold", marginBottom: 30, marginLeft: 110, backgroundColor: '#011627', color: 'white', width: 60,
//     height: 60,
//     borderRadius: 44 / 2
//   },
//   email: {
//     marginLeft: 15, fontSize: 15,
//     fontWeight: "bold",
//   }

// });