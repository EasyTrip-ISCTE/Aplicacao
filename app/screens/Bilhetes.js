import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'


function Bilhetes({navigation}) {


    const estacoes = ["Sintra", "Cascais", "Entrecampos", "Campo Grande", "Odivelas", "Amadora", "Benavente", "Açores", "Arronches"]

    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Origem:</Text>

            <SelectDropdown 
	            data={estacoes}

                dropdownStyle={{ borderRadius: 10, borderWidth:8, borderColor:"#a7cedf"}}
                buttonStyle={{backgroundColor:"#a7cedf", alignItems:"center", alignSelf:'center', borderRadius: 10, width:"70%", height:50, marginTop:15, marginBottom:50}}//campo input
                buttonTextStyle={{fontSize: 20}}//Texto input
                dropdownBackgroundColor={{backgroundColor:"#a7cedf",fontWeight: 'bold',}}
                defaultButtonText='Selecione estação'

	            onSelect={(selectedItem, index) => {
		            console.log(selectedItem, index)
	            }}

	            // buttonTextAfterSelection={(selectedItem, index) => {
                //     <Text>Ola1</Text>
		        //     // text represented after item is selected
		        //     // if data array is an array of objects then return selectedItem.property to render after item is selected
		        //     return selectedItem
	            // }}
	            // rowTextForSelection={(item, index) => {
                //     <Text>Ola</Text>
                //     // text represented for each item in dropdown
                //     // if data array is an array of objects then return item.property to represent item in dropdown
                //     return item
	            // }}
            />

            <Text style={styles.title}>Destino:</Text>
            <SelectDropdown
	            data={estacoes}

                dropdownStyle={{ borderRadius: 10, borderWidth:8, borderColor:"#ffb319"}}
                buttonStyle={{backgroundColor:"#a7cedf", alignItems:"center", alignSelf:'center', borderRadius: 10, width:"70%", height:50, marginTop:15, marginBottom:50}}//campo input
                buttonTextStyle={{fontSize: 20}}//Texto input
                dropdownBackgroundColor={{backgroundColor:"#a7cedf",fontWeight: 'bold',}}
                defaultButtonText='Selecione estação'

	            onSelect={(selectedItem, index) => {
		            console.log(selectedItem, index)
	            }}
	            buttonTextAfterSelection={(selectedItem, index) => {
                    //<Text>Ola1</Text>
		            // text represented after item is selected
		            // if data array is an array of objects then return selectedItem.property to render after item is selected
		            return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
                    //<Text>Ola</Text>
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
	            }}
            />
        
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
        marginTop:100,
        margin: 30,
    },

    title:{
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight: 'bold',
        fontSize: 25,
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