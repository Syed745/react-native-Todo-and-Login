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


function App() {

  const [text, onChangeText] = React.useState();
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

    //Second Page //


    // <View style={{ backgroundColor: '#83c5be', flex: 1 }}>

    //   <View style={{ backgroundColor: 'white', width: "100%", height: 90, elevation: 100, }}>
    //     <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 40, margin: 12, fontWeight: 'bold' }}>
    //       LOGIN FORM
    //     </Text>
    //   </View>

    //   <View style={styles.container}>
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
    //       <Pressable style={styles.email}>
    //         <Text>
    //           Already Have An Account
    //           <Text style={{ color: 'blue' }}  > SIGNUP </Text>
    //         </Text>
    //       </Pressable>
    //       <Text style={{ padding: 10, marginLeft: 80, }} >
    //         {"\n"}
    //         <View style={{ width: 100 }}>

    //           <Button title="LOGIN" color="#2E8B57" />
    //         </View>

    //       </Text>

    //     </SafeAreaView>
    //   </View>
    // </View>

    //Second Page End //


    // Third Page //


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

export default App
