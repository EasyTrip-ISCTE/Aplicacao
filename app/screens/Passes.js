import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, FlatList } from 'react-native';

function Passes() {
    
    const passes = [
        {
            id: 1,
            categoria: "Navegante Metropolitano",
            periocidades: "Mensal",
            preco: "40"
        },
        {
            id: 2,
            categoria: "Navegante Municipal",
            periocidades: "Mensal",
            preco: "30"
        },
        {
            id: 3,
            categoria: "Navegante Familia",
            periocidades: "Anual",
            preco: "80"
        },
        {
            id: 4,
            categoria: "Navegante Urbano 3ª idade",
            periocidades: "Mensal",
            preco: "15"
        },
        {
            id: 5,
            categoria: "Navegante/Bolt",
            periocidades: "Mensal",
            preco: "15"
        },
        {
            id: 6,
            categoria: "Assinaturas",
            periocidades: "Mensal",
            preco: "30"
        }
    ]
    
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={passes}
                keyExtractor= {(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem = { ({item}) => 
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.title}>{item.categoria}</Text>
                            <View style={styles.content}>
                                <Text style={styles.text}>{item.periocidades}</Text>
                                <Text style={styles.text}>{item.preco}€</Text>
                                
                            </View>
                            <Text style={styles.info}>+ informações</Text>
                        </TouchableOpacity>
                    </View>
                } 
            />
        </View>
            
            
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    button:{
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        marginEnd:14,
    },
    content:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:5,
        marginBottom:10
    },

    title:{
        fontSize:20,
        fontWeight: "bold",
        fontFamily: 'serif',
    
    },

    text:{
        fontSize:16,
        fontFamily: 'serif',
    
    },
    text2:{
        fontSize:10,
        fontFamily: "serif",
        alignSelf:"center",
    },

    list:{
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14
    },
    view:{
        borderColor: "#a7cedf",
        borderWidth: 3,
        borderRadius:10,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        
    },
    info:{
        alignSelf:"flex-end"
    }

})    

export default Passes;