import { Camera } from 'expo-camera';
import { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';


export default function App() {
  const [facing, setFacing] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  // Solicitar permisos al cargar el componente
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso de cámara no concedido');
      }
    })();
  }, []);

  

  function toggleCameraFacing() {
    setFacing(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      let photo = await cameraRef.current.takePictureAsync(options);
      console.log(photo.uri);

      const filename = photo.uri.split('/').pop();
      const newUri = FileSystem.documentDirectory + filename;
      //const newUri = FileSystem.documentDirectory + "reportex.jpg";

      // Move the image to a permanent location
      await FileSystem.moveAsync({
        from: photo.uri,
        to: newUri,
      });
      setPhotoUri(newUri);
      Alert.alert('Foto Guardada', `Guardada en: ${newUri}`);
      console.log(photoUri)
    }
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Cambiar Cámara</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.captureButton}>
        <Button title="Tomar Foto" onPress={takePicture} />
      </View>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={{width:50,height:50}} />
      ) : (
        <Text>No Image Captured</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  captureButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
