import React, { useState } from 'react'
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { styles } from './styles';



const App = () => {

  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, task: 'first task', Done: true },
    { id: 2, task: 'secound task', Done: true }
  ])

  const ListItem = ({ todo }) => {
    return (
      <View style={styles.listitem}>
        <View>
          <Text style={styles.listText}>{todo?.task}
          </Text>
        </View>
        {!todo?.Done && (
          <TouchableOpacity style={{ padding: 10 }}>
            <Button title='EDIT' color='#457b9d' />
          </TouchableOpacity>
        )
        }

        <TouchableOpacity style={{ padding: 10 }}>
          <Button title='DELETE' color='#e63946'
            onPress={() => deleteTodo(todo?.id)}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const addList = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please Enter Something If you want')
    } else {

      const newTodo = {
        id: Math.random(),
        task: textInput,
        Done: false,
      }
      setTodos([...todos, newTodo])
      setTextInput('')
    }
  }

  const deleteTodo = (todoId) => {
    const deleted = todos.filter(e => e.id != todoId)
    setTodos(deleted)
  }

  const deleteAll = () =>{
    setTodos([])
    Alert.alert('Confirmed','Clear All List')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.todo}>
          Todo-List
        </Text>
        <Text style={styles.deleteall}
        onPress={deleteAll}>
          DELETE LIST
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />} />
      <View style={styles.footer}>
        <View style={styles.inp}>
          <TextInput placeholder='Enter Something'
            value={textInput}
            onChangeText={(e) => { setTextInput(e) }}
          />
        </View>
        <TouchableOpacity>
          <Button title='ADD LIST' color='green'
            onPress={addList} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default App


