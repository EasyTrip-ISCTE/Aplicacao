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
import Dados_Pessoais from './app/screens/Dados_Pessoais';
import Carregar_Documentos from './app/screens/Carregar_Documentos';
import Verificar_Email from './app/screens/Verificar_Email';
import Contactos from './app/screens/Contactos';
import Pagamento from './app/screens/Pagamento';
import MBWAY from './app/screens/MBWAY';
import MB from './app/screens/MB';
import VISA from './app/screens/VISA';
import PAYPAL from './app/screens/PAYPAL';
import Ajuda from './app/screens/Ajuda';
import Notificacoes from './app/screens/Notificacoes' 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator 
      screenOptions={({route}) => ({
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
      //tabBarActiveBackgroundColor: "#a7cedf",
      //tabBarInactiveBackgroundColor: "#a7cedf",
      tabBarStyle:{backgroundColor:"#a7cedf"}
  
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
        <Stack.Screen name="Dados Pessoais" component={Dados_Pessoais} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Validar Documentos" component={Carregar_Documentos} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Verificar Email" component={Verificar_Email} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Contactos" component={Contactos} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Pagamento" component={Pagamento} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="MBWAY" component={MBWAY} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="MB" component={MB} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="VISA" component={VISA} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="PAYPAL" component={PAYPAL} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Notificacoes" component={Notificacoes} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Ajuda" component={Ajuda} options={{headerStyle:{backgroundColor:'#ffb319'}}}/>
        <Stack.Screen name="Perfil" component={Tabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}




