import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Third</Text>
      <StatusBar style="auto" />
      <Button
      title="GO"
      onPress={() => {
        navigation.navigate("For");
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
