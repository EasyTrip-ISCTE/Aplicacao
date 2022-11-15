import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Contactos({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Endereço de E-mail:</Text>
            <Text style={styles.text}> easytrip.iscte@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:50,
    },

    text:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
    },

    title:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        fontWeight: 'bold',
        fontFamily: 'serif',
        borderBottomWidth:2,
        borderTopWidth:2,
        marginBottom:20,
    }
})    

export default Contactos;
