import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>¡ Iniciando proyecto !</Text>

      <Text>¡ View !</Text>
      <Text>¡ SafeAreaView !</Text>
      <Text>¡ Text !</Text>
      <Text>¡ Image !</Text>
      <Text>¡ TouchableOpacity !</Text>
      <text>ScrollView</text>
      <text>FlatList</text>



      <StatusBar style="auto" />
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
