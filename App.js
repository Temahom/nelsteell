import { StatusBar } from 'expo-status-bar';
import React ,{useState ,useEffect }from 'react';
import {enableScreens} from 'react-native-screens';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


enableScreens();
 import {NavigationContainer} from '@react-navigation/native'
 import {createNativeStackNavigator} from 'react-native-screens/native-stack'
 
import Home from './src/screens/home';
import MyForm from './src/screens/myform';
import Product from './src/screens/producs';
import Fer5 from './src/screens/fer5';
import Fer8 from './src/screens/fer8';
import Points from './src/screens/point';
import presentation from './src/screens/presentation';
import about from './src/screens/about';


export default function App() {
  const [nombre,setNombr]=useState(0)
  useEffect(() => {    
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    },[])
  const Stack= createNativeStackNavigator();

  return (
      <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="Accueil"   options={{ title: "NellSteel"}}  component={Home} />
        <Stack.Screen name="myform" component={MyForm}  />
        <Stack.Screen name="produit" component={Product}  />
        <Stack.Screen name="fer5" component={Fer5}  />
        <Stack.Screen name="fer8" component={Fer8}  />
        <Stack.Screen name="point" component={Points}  />
        <Stack.Screen name="presentation" component={presentation}  />
        <Stack.Screen name="Apropos" component={about}  />
      </Stack.Navigator>
        
      </NavigationContainer>
    
  );
}

;
