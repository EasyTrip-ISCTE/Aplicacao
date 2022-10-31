import React from 'react';
import { View, Text, Button} from 'react-native';

function Definicoes({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Inicio')} />
      </View>
    );
  }

export default Definicoes;