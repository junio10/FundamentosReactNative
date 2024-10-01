import { Text, TextInput, View, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './Style';

export function Home() {
  let a = 0;
  function handlerParticipantAdd() {
    a += 1;
    console.log(a);

  }
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Nome do evento:</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do evento"
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
          <Text style={styles.textButton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}