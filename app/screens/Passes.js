import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

function Passes() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Passe Sub-Urbano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Passe Urbano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Passe Sub-23</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Passe Sub-23</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 80,
        margin: 5,
    },

    button:{
        alignSelf:'center',
        borderColor: "black",
        borderWidth:5,
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
        width:'150%',
        height:'22%',
        justifyContent: 'center',
    },

    text:{
        fontSize:30,
        fontFamily: 'serif',
        alignSelf:'center',
    },

})    

export default Passes;