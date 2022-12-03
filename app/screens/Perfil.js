import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { auth, db } from '../../firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore';

function Perfil( {navigation} ) {

    const[nome, setNome] = useState("");
    const docRef = doc(db, "users", auth.currentUser.uid);   
    
    useEffect(() => {
        getDoc(docRef)
        .then((doc) => {
            setNome(doc.data()['PrimeiroNome']);
        })
    })    
    

    return (
        <ImageBackground style={styles.background} source={require("../assets/perfil2.jpg")}>
                <View style={styles.inicioView}>
                    <Text style={styles.titleText}>Bem-vindo, {nome}</Text>
                </View>
                <View style={styles.cartaoView}>
                    <Image style={styles.image} source={require("../assets/PasseEasyTrip.png")}></Image>
                </View>
                <View style={styles.informacaoView}>    
                    <Text style={styles.text}>Categoria do Passe: Metropolitano</Text>
                    <Text style={styles.text}>Desconto: Sub-23 </Text>
                    <Text style={styles.text}>Válido até: 30-11-2022</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pagamento")}>
                        <Text style={styles.buttonText}>Carregamento</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        
    );
} 
export default Perfil;

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        height:"64%",

    },
    image:{
        width: 320,
        resizeMode: "contain",
        alignSelf:"center",
        height: 200,
        marginTop: 140,
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
        width: "80%",
        paddingTop: 10,
        borderRadius: 10,
        alignItems: "center"
        

    },
    text:{
        fontSize: 15,
        textAlign: "justify",
        paddingTop: 5
    },
    titleText:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'baseline',
        alignSelf: "center",

    },
    buttonView: {
        paddingTop:30
    },
    button:{
        backgroundColor: "#ffb319",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
    },
    buttonText:{
        color: "black",
        fontWeight: "700",
        fontSize: 16
    }

});
