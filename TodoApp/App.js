import React, { useState } from 'react'
import {
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
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Color = { primary: '#14213d', white: '#f1faee' }
const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, task: 'first task', compeleted: true },
    { id: 2, task: 'secound task', compeleted: true }
  ])

  const ListItem = ({ todo }) => {
    return <View style={styles.listitem}>
      <View>
        <Text style={{
        fontSize: 18, fontWeight: 'bold',
        textDecorationLine: todo?.compeleted ? 'line-through' : 'none',
      }}>{todo?.task}
      </Text>
      </View>
      <TouchableOpacity style={{padding:10}}>
        <Button title='EDIT' color='#457b9d' />
      </TouchableOpacity>
      <TouchableOpacity  style={{padding:10}}>
        <Button title='DELETE' color='#e63946' />
      </TouchableOpacity>
    </View>

  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: Color.primary }}>
          TODO APP
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.white, backgroundColor: '#d90429', padding: 8, borderRadius: 15, borderWidth: 2 }}>
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
          <TextInput placeholder='Enter Something' />
        </View>
        <TouchableOpacity>
          <Button title='ADD LIST' color='green' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  inp: {
    backgroundColor: 'white',
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  listitem: {
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    elevation: 50
  }
})
