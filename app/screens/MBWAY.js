import { FirebaseError } from 'firebase/app';
import { getDoc, doc, setDoc, collection, query, getDocs, where, Timestamp, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View,Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import { Popup, Root } from 'react-native-popup-confirm-toast';
import { auth, db } from '../../firebase';

function MBWAY({route,navigation}) {

    //const date = new Date();
    //console.log("Data", date.getDay());
    //console.log(route.params.titulo.titulo);

    const [passe, setPasse] = useState("");
    
    
    function comprarPasse(){
        console.log("AQUIIIII");
        const cartaoUserRef = doc(db, "cartaoUser", auth.currentUser.uid);


        console.log("MBWAY",route.params.IsPasse);
        //verificar se já existe um passe e se não existir posso escolher um tipo de passe para comprar
        let listaPasse = [];

        getDoc(cartaoUserRef).then(docSnap => {
            if(docSnap.exists()){
                if(route.params.IsPasse){//passes
                    const queryPasse = query(collection(db, "passesUser"), where("idUser", "==", auth.currentUser.uid));
                    getDocs(queryPasse).then(query => {
                        
                        query.forEach((doc) => {
                            listaPasse.push({...doc.data(), id:doc.id});
                        })
                        setPasse(listaPasse[0]);
                        console.log("Estou aquiiiiii 4");
                    })
                    console.log("Lista Atual", passe);
                    
                    if(passe == undefined){ 
                        addDoc(collection(db,"passesUser"), {
                            Tipo: route.params.titulo.titulo.Tipo,
                            Validade: "Dezembro",
                            idPasse: Number(route.params.titulo.titulo.id),
                            idUser: auth.currentUser.uid,
                           
                        });
                        console.log("Criei o passe");
                        return;
                    }
                    else{//update passe - carregar e alterar tipo de passe
                        console.log("Alterei o meu passe");
                    }
                }
                //bilhetes
                else{
                    addDoc(collection(db,"bilhetesUser"),{
                        idUser: auth.currentUser.uid,
                        Origem: route.params.titulo.titulo.Origem,
                        Destino:  route.params.titulo.titulo.Destino,
                        Valor: route.params.titulo.titulo.Valor,
                        Valido : true
                    })
                }
            }
            else{ 
                //alerta a pedir para criar um cartão na Home
                console.log("Crie um cartão por favor")
            }
        })      
    }

    return(
    <Root>
        <View style={styles.container}>
            <Image style={styles.image_mb} source={require("../assets/mbway.png")}/>
            
            <View style={styles.inputCampos} >
                <Text>Montante a depositar: {route.params.titulo.titulo.Valor}€</Text>
            </View>

            <View style={styles.inputCampos}>    
                        <TextInput 
                            placeholder='Numero de Telemovel'
                            style={styles.inputNumber}
                        />
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() =>{ comprarPasse(); {Popup.show({
                    type: 'sucess',
                    title: 'Compra Finalizada',
                    textBody: 'Pagamento efetuado com sucesso!',
                    buttonText: 'Fechar',
                    okButtonStyle:{ backgroundColor: '#ffb319'},
                    callback: () => Popup.hide()
                    })}}}
            >
                <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>

        </View>
    </Root>
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
        width:100,
        height:40,
        margin:50,
    },
    buttonText:{
        textAlign:'center',
        textAlignVertical:'center',
        color: "black",
        fontWeight: "700",
        fontSize: 20,
        marginTop:5,
    },
    image_mb:{
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
    },
})    

