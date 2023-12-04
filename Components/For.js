import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>For</Text>
      <StatusBar style="auto" />
      <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
    </View>
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
