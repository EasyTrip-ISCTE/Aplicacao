import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, Button } from 'react-native';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Perfil( navigation ) {

    return (
        <ImageBackground style={styles.background} source={require("../assets/perfil2.jpg")}>
            <SafeAreaView style={styles.background}>  
                <View style={styles.inicioView}>
                    <Text style={styles.titleText}>Bem-vindo, Diogo</Text>
                </View>
                <View style={styles.cartaoView}>
                    <Image style={styles.image} source={require("../assets/passe3.jpg")}></Image>
                </View>
                <View style={styles.informacaoView}>    
                    <Text style={styles.text}>Categoria do Passe: Sub-Urbano</Text>
                    <Text style={styles.text}>Desconto: Sub-23 </Text>
                    <Text style={styles.text}>Válido até: 30-11-2022</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button title='Carregamento'></Button>
                </View>
            </SafeAreaView>
        </ImageBackground>
        
    );
} 
export default Perfil;

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        height:"70%",

    },
    image:{
        width: 320,
        resizeMode: "contain",
        alignSelf:"center",
        height: 200,
        marginTop: 180,
        borderRadius: 10
        //marginTop: 20


    },
    inicioView: {
        alignItems: "flex-start",
        marginTop: 50,

    },
    cartaoView:{
        width: "70%",
        alignItems: "center",
        
    },
    informacaoView:{
        //backgroundColor: "white",
        width: "80%",
        //paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 10,
        //borderWidth: 2,
        //borderColor: "#ffb319",
        alignItems: "center"

    },
    text:{
        fontSize: 15,
        textAlign: "justify",
        //paddingLeft: 20,
        paddingTop: 5
    },
    titleText:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'baseline',
        //paddingLeft: 5,
        alignSelf: "center"

    },
    buttonView:{
        paddingTop:28
    }

});
