import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: 310,
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        borderRadius: 10
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: 'center',
        marginTop: 90,
        color: '#a8dadc',
    }, input: {
        width: 250,
        height: 40,
        margin: 12,
        borderColor: '#011627',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
    },
    circle: {
        textAlign: 'center', fontWeight: "bold", marginBottom: 30, marginLeft: 110, backgroundColor: '#011627', color: 'white', width: 60,
        height: 60,
        borderRadius: 44 / 2
    },
    email: {
        marginLeft: 15, fontSize: 15,
        fontWeight: "bold",
        flexDirection:'row',
        
        //alignItems:'center',
    }

});

export { styles }