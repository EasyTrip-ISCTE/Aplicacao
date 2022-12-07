import React from 'react';
import { View,Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Root, Popup } from 'react-native-popup-confirm-toast'

function MBWAY({route,navigation}) {

    const passe1 = route.params;
    console.log("MBWAY", passe1);

    //a funcao comprar passe vem para aqui

    return(
    <Root>
        <View style={styles.container}>
            <Image style={styles.image_mb} source={require("../assets/mbway.png")}/>
            
            <View style={styles.inputCampos} >
                <Text>Montante a depositar: {route.params.passe.passe.Valor}€</Text>
            </View>

            <View style={styles.inputCampos}>    
                        <TextInput 
                            placeholder='Numero de Telemovel'
                            style={styles.inputNumber}
                        />
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => Popup.show({
                    type: 'sucess',
                    title: 'Compra Finalizada',
                    textBody: 'Pagamento efetuado com sucesso!',
                    buttonText: 'Fechar',
                    okButtonStyle:{ backgroundColor: '#ffb319'},
                    callback: () => Popup.hide()
                    })
                    //navigation.navigate("Pagamento")
                }>
                <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>

        </View>
    </Root>
)}

export default MBWAY;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:50,
    },
    
    inputCampos:{
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width: 400,
        marginTop:50,
    },
    inputNumber:{
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 80
    },

    inputMontante:{
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 5,
    },
    button:{
        backgroundColor: "#ffb319",
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 10,
        width:100,
        height:40,
        margin:50,
    },
    buttonText:{
        textAlign:'center',
        textAlignVertical:'center',
        color: "black",
        fontWeight: "700",
        fontSize: 20,
        marginTop:5,
    },
    image_mb:{
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
    },
})    

