import { ImageBackground, StyleSheet, Image, Button, View, Text } from 'react-native';

function PaginaInicial (){
    return (
        <ImageBackground style={styles.background} source={require("../assets/comboio1.png")}>
                <Image style={styles.image} source={require("../assets/NomeAplicacao.png")}></Image>
                <View style={styles.loginButao}>
                    <Button title="Login" color="#daa520" ></Button>
                </View>
                <View style={styles.registoButao}>
                    <Button title="Registar" color="#a7cedf"></Button>
                </View>        
        </ImageBackground>
    );
}


const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButao: {
        width:"100%",
    },
    registoButao: {
        width:"100%",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        top: 10
    },
    image: {
        position: "absolute",
        top: 120,
        width: "80%"
        
    }
})

export default PaginaInicial;

