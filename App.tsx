import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={stylesText.container}>hello world!</Text>
      <Text style={{
        color: 'yellow',
        fontSize: 21,
        padding:19
      }}>Learn react native</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const stylesText = StyleSheet.create({
  container:{
    color: 'red',
    fontSize: 45,
    fontStyle:"italic",
  }
});  