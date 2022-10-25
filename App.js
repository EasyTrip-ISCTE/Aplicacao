import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PaginaInicial from './app/screens/PaginaInicial';
import Login from './app/screens/Login';
import Registar from './app/screens/Registar';

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="PaginaInicial" >
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registar" component={Registar} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}




