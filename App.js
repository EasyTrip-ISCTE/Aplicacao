import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

import PaginaInicial from './app/screens/PaginaInicial';
import Login from './app/screens/Login';
import Registar from './app/screens/Registar';
import Perfil from './app/screens/Perfil';
import Definicoes from './app/screens/Definicoes';
import Servicos from './app/screens/Servicos';
import Bilhetes from './app/screens/Bilhetes';
import Passes from './app/screens/Passes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator backgroundColor="#a7cedf" screenOptions={({route}) => ({
      tabBarIcon: ({focused, size, colour}) => {
        let iconName; 
        if(route.name === "Home"){ 
          iconName = focused ? 'ios-home': 'ios-home-outline' ;
        } else if(route.name === "Serviços"){ 
          iconName = focused ? 'add-circle-sharp': 'add-circle-outline' ;
        } else if(route.name === "Definições"){ 
          iconName = focused ? 'ios-settings' : 'ios-settings-outline' ;
        }
        return <Ionic name = {iconName} size={size} colour={colour} />;
      },
      tabBarActiveBackgroundColor: "#a7cedf",
      tabBarInactiveBackgroundColor: "#a7cedf",
  
    })}>
      <Tab.Screen name="Home" component={Perfil} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
      <Tab.Screen name="Serviços" component={Servicos} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
      <Tab.Screen name="Definições" component={Definicoes} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
    </Tab.Navigator>
  )
}

export default function App() {

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="PaginaInicial" >
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Registar" component={Registar} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Bilhetes" component={Bilhetes} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Passes" component={Passes} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Perfil" component={Tabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}




