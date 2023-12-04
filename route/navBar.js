import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../Components/Main.js'
import Second from '../Components/Second.js'
import Third from '../Components/Third.js'

export default function Login() {
  const Tab = createBottomTabNavigator();

  return (
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
