import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './Style';
import { StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Nome do evento:</Text>
      <TextInput 
      style= {styles.TextInput}
      placeholder="Nome do evento"
      placeholderTextColor='#6B6B6B'
      />
    </View>
    
  );
}