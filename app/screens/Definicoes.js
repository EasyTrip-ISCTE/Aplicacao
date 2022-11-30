import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Definicoes({navigation}) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dados Pessoais")}>
                <Text style={styles.text}>Alterar Dados Pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Validar Documentos")}>
                <Text style={styles.text}>Validar Documentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Verificar Email")}>
                <Text style={styles.text}>Verificar E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Notificacoes")}>
                <Text style={styles.text}>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ajuda")}>
                <Text style={styles.text}>Ajuda</Text>
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
  },
  button:{
    alignSelf:'center',
    borderColor: "black",
    borderWidth:1,
    backgroundColor: "#EBEBEB",
    width:'100%',
    height:'12%',
    justifyContent: 'center',
},
});