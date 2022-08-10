import { View, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [inputData, setInputData] = useState('');
  const [todos, setTodos] = useState([]);

  const addText = () => {
    if(inputData == ''){
      Alert.alert('Error', 'Enter Text')
    }else{
    setTodos(preVal => [...preVal, inputData])
    setInputData('')
  }}

  const deleteall =() =>{
    setTodos([])
    Alert.alert('Confirmed','Delete All')
  }
  return (
    <View style={{backgroundColor:'#81b29a',flex:1 }}>
      <Text style={{fontSize:50,marginTop:20,textAlign:'center' }}>
        TODO LIST
      </Text>
      <SafeAreaView style={{ alignItems: 'center' }}>
        <TextInput value={inputData} placeholder='Type Anything' onChangeText={(e) => setInputData(e)}
          style={{ padding: 15, backgroundColor: '#e5e5e5', margin: 10, width: 300, marginTop: 70, }} />
        <Button title='Submit' color='green' onPress={addText} />
        
        <Text>
        {'\n'}
        <Button title='DELETE ALL' color='#ef233c' onPress={deleteall} />
        {'\n'}
          {todos.map((e,i)=>{ return(
            <Text key={i} >{
              e}{'\n'}</Text>

          )
            
          })}
        </Text>
      </SafeAreaView>
    </View>
  )
}

export default App