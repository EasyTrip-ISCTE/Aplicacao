import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Definicoes({navigation}) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dados_Pessoais")}>
                <Text style={styles.text}>Alterar Dados Pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Carregar_Documentos")}>
                <Text style={styles.text}>Carregar Documentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Verificar_Email")}>
                <Text style={styles.text}>Verificar E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contactos")}> 
                <Text style={styles.text}>Contactos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Definicoes;

const styles = StyleSheet.create({

    text:{
      fontSize:20,
      alignSelf:'center',
      fontFamily: 'serif',
  },
  button:{
    alignSelf:'center',
    borderColor: "black",
    borderWidth:1,
    backgroundColor: "#EBEBEB",
    width:'100%',
    height:'14%',
    justifyContent: 'center',
},
});