import { Text, View, StyleSheet, Image } from 'react-native';
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
    height: 100
  }
})

export default App;