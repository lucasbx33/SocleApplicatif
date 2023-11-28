import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Components/Main.js'
import Second from './Components/Second.js'
import Third from './Components/Third.js'
import For from './Components/For.js'

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  //////////// Navbar ///////////
  const MainStackScreen = () => (
    <Tab.Navigator initialRouteName="Main" screenOptions={{
      showLabel:false,
      headerShown:false, //Affiche le nom de la route en haut de la page
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Main" component={Main} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Second" component={Second}/>
      <Tab.Screen name="Third" component={Third}/>
    </Tab.Navigator>
  );

  return (
///////////// Route principal //////////////
    <NavigationContainer>
      <Stack.Navigator initialRouteName="test" screenOptions={{
        showLabel:false,
        headerShown:false, //Affiche le nom de la route en haut de la page
      }}>
        <Stack.Screen name="test" component={MainStackScreen}/>
        <Stack.Screen name="For" component={For}/>
        <Stack.Screen name="Third" component={Third}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}