import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

function Pagamento({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Escolha a sua forma de pagamento</Text>
            <TouchableOpacity onPress={() => navigation.navigate("MBWAY")}>
                <Image style={styles.image_mb} source={require("../assets/mbway.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MB")}>
                <Image style={styles.image_mb} source={require("../assets/multibanco.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("VISA")}>
                <Image style={styles.image_visa} source={require("../assets/visa.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PAYPAL")}>
                <Image style={styles.image_paypal} source={require("../assets/paypal.png")}/>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        margin: 50,
        marginBottom:100,
       
    },

    text: {
        textAlign:'center',
        fontSize:16,
        alignSelf:'center',
        fontFamily: 'serif',
        borderBottomWidth:2,
        borderTopWidth:2,
        //borderLeftWidth:4,
        //borderRightWidth:4,
        fontWeight: 'bold',
    }, 

    image_mb:{
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
    },

    image_visa:{
        height:100,
        resizeMode:'contain',
        alignSelf:'center',
    },

    image_paypal:{
        height:80,
        resizeMode:'contain',
        alignSelf:'center',
    }

})    

export default Pagamento;