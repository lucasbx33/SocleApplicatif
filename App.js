import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Components/Main.js'
import Second from './Components/Second.js'
import Third from './Components/Third.js'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        showLabel:false,
        headerShown:false, //Affiche le nom de la route en haut de la page
      }}>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Second" component={Second}/>
        <Stack.Screen name="Third" component={Third}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}