import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Third from './Components/Third.js'
import For from './Components/For.js'
import navBar from './route/navBar.js'
import Login from './route/login.js'
import Register from './route/register.js'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
///////////// Route principal //////////////
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        showLabel:false,
        headerShown:false, //Affiche le nom de la route en haut de la page
      }}>
        <Stack.Screen name="For" component={For}/>
        <Stack.Screen name="Third" component={Third}/>
        <Stack.Screen name="NavBar" component={navBar}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}