import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

function MB({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image_mb} source={require("../assets/multibanco.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:50,
    },

    image_mb:{
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
    },

})    

export default MB;