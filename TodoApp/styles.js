import { StyleSheet, } from 'react-native';
const Color = { primary: '#14213d', white: '#f1faee' }

const styles = StyleSheet.create({
    header: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor:Color.primary
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: Color.primary,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    inp: {
      backgroundColor: 'white',
      elevation: 40,
      flex: 1,
      height: 50,
      marginVertical: 20,
      marginRight: 30,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    listitem: {
      backgroundColor: Color.primary,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      elevation: 50
    },
    deleteall: {
      fontWeight: 'bold',
      fontSize: 15,
      color: Color.white,
      backgroundColor: '#e63946',
      padding: 8, borderRadius: 6,
      borderWidth: 2
    },
    listText:{
        fontSize: 18, fontWeight: 'bold', color: Color.white,
    },
    todo:{
        fontWeight: 'bold', fontSize: 30, color: Color.white,
    },
    mainContainer:{
        flex: 1, backgroundColor: Color.white
    }
  })
  

  export {styles}