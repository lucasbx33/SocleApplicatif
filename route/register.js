import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Button
      title="Retour"
      onPress={() => {
        navigation.goBack();
      }}
    />
      <Text>Register</Text>
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Add your registration logic here
          // For example, you can send the user data to a server
          // and navigate to the next screen if registration is successful
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%', // Utilisation de pourcentage pour la marge horizontale
  },
  inputContainer: {
    width: '100%', // Utilisation de pourcentage pour la largeur
    marginBottom: '5%', // Utilisation de pourcentage pour la marge inférieure
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: '5%', // Utilisation de pourcentage pour la marge inférieure
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: '2%', // Utilisation de pourcentage pour le remplissage vertical
    paddingHorizontal: '5%', // Utilisation de pourcentage pour le remplissage horizontal
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
