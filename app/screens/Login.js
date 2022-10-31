import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { db } from '../../firebase';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';

function Login( {navigation} ) {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user){
                navigation.navigate("Login")
            }
        })

        return unsubscribe;
    }, [])

    // referencia da coleção
    const docRef = doc(db, "users", auth.currentUser.uid);

    // da me o nome do utilizador (não está a funcionar)
    /* getDoc(docRef)
        .then((snapshot) => {
            const nome = snapshot.data()['PrimeiroNome'];
            console.log(nome);
        })
    */    

    //Fazer o logout (guarda sempre o ultimo login)
    

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            const nomeCompleto = getDoc(doc(db, "users", auth.currentUser.uid));
            navigation.navigate("Perfil")
            console.log("Logged in with:" , user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputView}>
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
                <TouchableOpacity onPress={ handleLogin } style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
        backgroundColor: "rgba(0,100,255,0.5)",
        width: "100%",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        borderColor: "blue",
        borderWidth: 2
    },
    buttonText:{
        color: "white",
        fontWeight: "700",
        fontSize: 16
    }

});
