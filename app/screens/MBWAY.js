import React from 'react';
import { View,Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

function MBWAY() {
    return(
    <View style={styles.container}>
        <Image style={styles.image_mb} source={require("../assets/mbway.png")}/>
        <View style={styles.inputCampos} >
            <TextInput 
                placeholder='Montante a depositar'
                style={styles.inputMontante}
            />
        </View>
        <View style={styles.inputCampos}>    
                    <TextInput 
                        placeholder='Numero de Telemovel'
                        style={styles.inputNumber}
                    />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
    </View>
)}

export default MBWAY;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:50,
    },
    
    inputCampos:{
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width: 400,
        marginTop:50,
    },
    inputNumber:{
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 80
    },

    inputMontante:{
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 5,
    },
    button:{
        backgroundColor: "#ffb319",
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 10,
        borderWidth:4,
        width:100,
        height:40,
        margin:50,
    },
    buttonText:{
        textAlign:'center',
        textAlignVertical:'center',
        color: "black",
        fontWeight: "700",
        fontSize: 20
    },
    image_mb:{
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
    },
})    
