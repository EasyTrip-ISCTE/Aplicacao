import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { ScrollView, StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

function Cartao({navigation}) {

    const cartaoUserRef = doc(db, "cartaoUser", auth.currentUser.uid);

    const [passe, setPasse] = useState("");
    const [bilhetes, setBilhetes] = useState("");

    const queryPasse = query(collection(db, "passesUser"), where("idUser", "==", auth.currentUser.uid));
    const queryBilhetes = query(collection(db, "bilhetesUser"), where("idUser", "==", auth.currentUser.uid));

    useEffect(() => {
        
        let listaPasse = [];
        let listaBilhetes = [];

        getDocs(queryPasse).then(query => {
            query.forEach((doc) => {
                listaPasse.push({...doc.data(), id:doc.id});
            })
            setPasse(listaPasse[0]);
            console.log("Estou aquiiiiii 4");
        });

        getDocs(queryBilhetes).then(query => {
            query.forEach((doc1) => {
                listaBilhetes.push({...doc1.data(), id:doc1.id});
            })
            setBilhetes(listaBilhetes);
            console.log("Estou aquiiiiii 3");
        })
        //console.log(bilhetes);
        
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={require("../assets/PasseEasyTrip.png")}></ImageBackground>
            </View>
            <View style={styles.scrollView}>
                <View style={styles.titleView}>
                    <Text style={styles.text}>Títulos</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Serviços")}>
                        <Text style={styles.text1}>(+) Novo Título</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.view}>
                        <Text style={styles.text1}>{passe? passe['Tipo'] : "Não possui nenhum passe"}</Text>
                        <View style={styles.text2View}>    
                            <Text style={styles.text2}>Validade: {passe? passe['Validade'] : null}</Text>

                        </View> 
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text1}>Zapping</Text>
                        <View style={styles.text2View}>
                            <Text style={styles.text1}>Saldo: 3€</Text> 
                        </View>   
                    </View>
                    <TouchableOpacity style={styles.view} onPress={() => navigation.navigate("Meus Bilhetes")}>
                        <Text style={styles.text1}>Bilhetes</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
            </View>
            
            <TouchableOpacity style={styles.historicoView} onPress={() => navigation.navigate("Histórico")}>
                <Text style={styles.text}>Histórico de Compras</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.historicoView} onPress={() => navigation.navigate("Ajuda")}>
                <Text style={styles.text} >Perguntas Frequentes</Text> 
            </TouchableOpacity>
            
        </View>
    );
}

export default Cartao;

const styles = StyleSheet.create({

    container:{
        justifyContent:"flex-start",
        flex:1,
        
    },
    imageView:{
        flex: 0.5
    },
    text:{
        fontSize: 20,
        padding:8
    },
    text1:{
        fontSize: 15,
        padding:12
    },
    text2:{
        fontSize: 15,
        padding:12,
        
    },
    text2View:{
        alignItems:"flex-end",
        alignSelf:"flex-end",
        flex:1,
        flexDirection:"column-reverse"
    },
    titleView:{
        justifyContent: "space-between",
        flexDirection:"row",
    },
    scrollView:{
        backgroundColor:"#a7cedf",
        height:300,
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        bottom:70,
        flexDirection:"column",
    
    },
    view:{
        width: 250,
        height: "60%",
        alignSelf:"center",
        backgroundColor: "white",
        borderRadius: 10,
        marginRight:10,
        marginLeft:10
    },
    historicoView:{
        backgroundColor:"#a7cedf",
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        bottom:20,
        flexDirection:"column",
        margin:2
    },
    image:{
        flex:1,
        width:"100%",
        resizeMode:"cover",
        opacity:0.9
    }
})