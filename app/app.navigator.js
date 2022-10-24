import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PaginaInicial from './screens/PaginaInicial';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator name="none" initialRouteName="PaginaInicial">
            <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;
