import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword} from "firebase/auth"
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

function Dados_Pessoais( {navigation} ) {

    const[nome, setNome] = useState('')
    const[apelido, setApelido] = useState('')
    const[morada, setMorada] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    

    const handleSingUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setDoc(doc(db,"users", userCredentials.user.uid), {
                PrimeiroNome: nome,
                Apelido: apelido,
                Morada: morada
            });
            const user = userCredentials.user;
            user.displayName = nome +' '+ apelido;
            console.log(user.email, user.displayName);
            navigation.navigate('Login');
            
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.imageView}>
                <Image resizeMode='center' source={require("../assets/LogoEasyTrip.png")}></Image>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    placeholder='Nome' 
                    value={nome} 
                    onChangeText={text => setNome(text)} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Apelido' 
                    value={apelido} 
                    onChangeText={text => setApelido(text)} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Morada' 
                    value={morada} 
                    onChangeText={text => setMorada(text)} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Email' 
                    value={email} 
                    onChangeText={text => setEmail(text)} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password' 
                    value={password} 
                    onChangeText={text => setPassword(text)} 
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={ handleSingUp } style={styles.button}>
                    <Text style={styles.buttonText}>Alterar Dados</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Dados_Pessoais;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageView: {
        height: "28%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50
    },
    inputView:{
        width: "80%"
    },
    input:{
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5

    },
    buttonView:{
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button:{
        backgroundColor: "#a7cedf",
        width: "100%",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        borderColor: "#a7cedf",
        borderWidth: 2
    },
    buttonText:{
        color: "white",
        fontWeight: "700",
        fontSize: 16
    }

});
