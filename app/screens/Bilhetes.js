import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity, FontAwesome, FlatList} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';


function Bilhetes({navigation}) {

    const [localidades, setLocalidades] = useState([]);
    const [selected, setSelected] = useState("");
     const [isPasse, setIsPasse] = useState(false);
    
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
   
    

    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Origem:</Text>

            <SelectList
                setSelected={(val) => setSelected(val)}
                data={localidades}
                save="value"

                boxStyles={{ borderRadius: 10, borderWidth:8, borderColor:"#a7cedf"}}
                inputStyles={{fontSize: 18, fontWeight: 'bold'}}
                dropdownStyles={{ borderRadius: 10, borderWidth:8, borderColor:"#ffb319"}}
                dropdownTextStyles={{fontSize: 18, fontWeight: 'bold'}}
            />

            <Text>{'\n'}{'\n'}{'\n'}</Text>
            <Text style={styles.title}>Destino:</Text>
            
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={localidades}
                save="value"
                
                boxStyles={{ borderRadius: 10, borderWidth:8, borderColor:"#a7cedf"}}
                inputStyles={{fontSize: 18, fontWeight: 'bold'}}
                dropdownStyles={{ borderRadius: 10, borderWidth:8, borderColor:"#ffb319"}}
                dropdownTextStyles={{fontSize: 18, fontWeight: 'bold'}}
            />
            
        

            <TouchableOpacity style={styles.buttonSearch} onPress={() => navigation.navigate("Pagamento", {IsPasse: isPasse})}>
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