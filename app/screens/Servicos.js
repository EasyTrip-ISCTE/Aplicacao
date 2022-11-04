import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';

function Servicos({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Bilhetes")}>
                <Image style={styles.image_ticket} source={require("../assets/ticket.png")}/>
                <Text style={styles.text}>Bilhete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Passes")}>
                <Image style={styles.image_card} source={require("../assets/PasseEasyTrip.png")}/>
                <Text style={styles.text}>Passe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 5,
        margin: 50,
       
    },

    image_ticket:{
        height:190,
        resizeMode:'contain',
        alignSelf:'center',
    },

    image_card:{
        height:150,
        resizeMode:'contain',
        alignSelf:'center',
        
    },

    text:{
        fontSize:30,
        alignSelf:'center',
        fontFamily: 'serif',
        borderBottomWidth:4,
    }
})    

export default Servicos;