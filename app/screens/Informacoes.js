import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Informacoes({route, navigation}) {

    const passe = route.params.item;

    console.log(route.params.item.Tipo);

    return (
        <View>
            <Text>{route.params.item.Tipo}</Text>
            <Text>{route.params.item.Periodicidade}</Text>
            <Text>{route.params.item.Desconto}</Text>
            <Text>{route.params.item.Valor}€</Text>
            <Text>{route.params.item.Informacao}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Pagamento", {passe})}>
                <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Informacoes;