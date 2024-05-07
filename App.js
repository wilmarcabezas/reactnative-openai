import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ConnectAPI from './ConnectAPI';

export default function App() {
  const [message, setMessage] = useState('');
  const [callAPI, setCallAPI] = useState(false);

  const LlamarAPI = () => {
    setCallAPI(true);
  };

  const IngresaMensaje = (texto) => {
    setMessage(texto);    
    setCallAPI(false);
  };

  return (
    <View style={styles.container}>
      <Text>Escribe una pregunta</Text>
      <TextInput
       multiline
       numberOfLines={4}
        type="text"
        id="pregunta"
        onChangeText={IngresaMensaje}
        name="pregunta"
        style={styles.inputText}
      />
      <Button
        title="Presioname"
        onPress={LlamarAPI}
      />
      {callAPI && <ConnectAPI message={message} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: 400,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
