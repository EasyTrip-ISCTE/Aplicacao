import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity} from 'react-native';




function Bilhetes({navigation}) {

    return (
        <View>
            <TouchableOpacity style={styles.buttonSearch} onPress={() => navigation.navigate("Pagamento")}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View> 
       
    );
}

export default Bilhetes;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 15,
        margin: 30,
    },

    inputCampos:{
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width: 400,
        marginTop:50,
    },

    inputSearch:{
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 80
    },

    title:{
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight: 'bold',
        fontSize: 20,
    },

    number:{
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight: 'bold',
        fontSize: 50,
    },

    buttonSearch:{
        backgroundColor: "#ffb319",
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 10,
        width:120,
        height:40,
        marginBottom:100,
    },

    button:{
        backgroundColor: "#a7cedf",
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 10,
        width:120,
        height:40,
        margin:10,
    },

    buttonText:{
        textAlign:'center',
        textAlignVertical:'center',
        color: "black",
        fontWeight: "700",
        fontSize: 20,
        marginTop:5,
    },

})