import { View, Text, SafeAreaView, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [todos, setTodos] = useState([]);
  const [indexNum, setIndexNum] = useState();


  // Add//

  const addText = () => {
    if (inputData == '') {
      Alert.alert('Error', 'Enter Text')
    } else {

      if (indexNum) {
        todos[indexNum] = inputData
        setTodos([...todos])
      } else {
        setTodos([...todos, inputData])
      }
    }
    setInputData("")
  }

  //Edit//

  const edit = (e, i) => {
    setIndexNum(i)
    setInputData(e)
  }

  // Delete once

  const deleteList = (i) => {
    todos.splice(i,1)
    setTodos([...todos])
  }


  // Delete All 


  const deleteall = () => {
    setTodos([])
    Alert.alert('Confirmed', 'Delete All')

  }
  return (
    <ScrollView style={{backgroundColor:'#edf6f9',flex:1}}>
      <View >
        <Text style={{ fontSize: 50, marginTop: 20, textAlign: 'center' }}>
          TODO LIST
        </Text>
        <View>
          <View style={{}}>
            {todos.map((e, i) => (
              <View key={i} style={{ flexDirection: 'row', backgroundColor: '#e5e5e5', padding: 10, margin: 10, }}>
                <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold' }}>{e}</Text>
                <TouchableOpacity style={{ flex: 3, margin: 2 }}>
                  <Text style={{ backgroundColor: '#1d3557', color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
                    onPress={() => edit(e, i)}>
                    EDIT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 3, margin: 2 }}>
                  <Text style={{ backgroundColor: '#e63946', color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
                  onPress={()=>deleteList(i)}>
                    DELETE
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
            <View style={{ alignItems: 'center', flex: 1, }}>
              <TextInput value={inputData} placeholder='Type Anything' onChangeText={(e) => setInputData(e)}
                style={{ padding: 15, backgroundColor: '#e5e5e5', margin: 10, width: 300, marginTop: 70, }} />
              <Button title='Submit' color='#1d3557' onPress={addText} />

            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>

              <Button title='DELETE ALL' color='#e63946' onPress={deleteall} />
            </View>


          </View>

        </View>



      </View>

    </ScrollView>
  )
}

export default Todo