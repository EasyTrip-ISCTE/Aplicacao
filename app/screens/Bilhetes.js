import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity, FontAwesome, FlatList} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';


function Bilhetes({navigation}) {

    const [localidades, setLocalidades] = useState([]);
    const [selected, setSelected] = useState("");
    const [isPasse, setIsPasse] = useState(false);
    
    const [origem, setOrigem]=useState("");
    const [destino, setDestino]=useState("");
    const [bilhete, setBilhete]=useState("");

    useEffect(() => {
        let listaLocalidades = [];
        onSnapshot(collection(db, 'localidades'), 
        (snapshot1) => {
                snapshot1.docs.forEach((doc) => {
                    listaLocalidades.push({...doc.data(), id:doc.id});
                })
            setLocalidades(listaLocalidades.map(item => {return {key: item.id, value: item.Nome}}));
            
        })
    },[])
   
    function obterBilhete(){
        const queryBilhete = query(collection(db, "bilhetes"), where("Origem", "==", origem, "AND" ,"Destino", "==", destino));
        let listaBilhete=[];
        console.log(origem);
        console.log(destino);
        getDocs(queryBilhete).then(query => {
            query.forEach((doc) => {
                listaBilhete.push({...doc.data(), id:doc.id});
            })
            setBilhete(listaBilhete[0]);
            //console.log(listaBilhete[0])
        })
        console.log("Bilhete",bilhete);
    }

    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Origem:</Text>

            <SelectList
                setSelected={setOrigem}
                data={localidades}
                save="value"

                boxStyles={{ backgroundColor:"#a7cedf", borderRadius: 10 }}
                inputStyles={{fontSize: 18, fontWeight: 'bold'}}
                dropdownStyles={{ borderRadius: 5, borderWidth:4, borderColor:"#ffb319"}}
                dropdownTextStyles={{fontSize: 18, fontWeight: 'bold'}}
                placeholder="Selecione uma estação"
                searchPlaceholder='Selecione uma estação'
            />

            <Text>{'\n'}{'\n'}{'\n'}</Text>
            <Text style={styles.title}>Destino:</Text>
            
            <SelectList
                setSelected={setDestino}
                data={localidades}
                save="value"

                placeholder="Selecione uma estação"
                boxStyles={{ backgroundColor:"#a7cedf", borderRadius: 10}}
                inputStyles={{fontSize: 18, fontWeight: 'bold'}}
                dropdownStyles={{ borderRadius: 5, borderWidth:4, borderColor:"#ffb319"}}
                dropdownTextStyles={{fontSize: 18, fontWeight: 'bold'}}
                SearchPlaceholder='Selecione uma estação'
            />
            
        

            <TouchableOpacity style={styles.buttonSearch} 
                onPress={() => {obterBilhete(); navigation.navigate("Pagamento", {titulo:bilhete,IsPasse: isPasse})}}>
                <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </View> 
       
    );
}

export default Bilhetes;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:100,
        margin: 30,
    },

    title:{
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight: 'bold',
        fontSize: 30,
    },

    list:{
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14
    },

    buttonSearch:{
        backgroundColor: "#ffb319",
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 10,
        width:120,
        height:40,
        marginTop:100
    },

    buttonText:{
        textAlign:'center',
        textAlignVertical:'center',
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:5,
    },

})