import { Alert,Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Sol from './assets/sol.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mdy First App</Text>
      <Image
        style={styles.imagen}
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
      />
     <Image source={Sol} style={styles.imagen} />

      <Button 
      title="Click Aqui"
      onPress={()=>Alert.alert('Click')}
      />
      <TouchableOpacity
      style={styles.button}
       onPress={Alert.alert('Click')}>
        <Text style={styles.buttonText}>Click!</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fFf4fa'
  },
  title: {
    fontSize: 50
  },
  imagen:{  
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
  } 
})

export default App;