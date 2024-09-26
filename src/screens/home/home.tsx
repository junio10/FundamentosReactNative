import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>hello world!</Text>
      <Text style={styles.textName}>Learn react native</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}