import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button, TextInput, Alert } from 'react-native'

const App = () => {
  const [text, setText] = useState("")

  const handleButton = () => {
    Alert.alert('You types:', text)
  }
  return (
    <View style={styles.container}>
      <Text>Hello woprld</Text>
      <Image source={{ uri : 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'}} style={styles.image} />
      <TextInput  style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type something..." />
    <Button title="Press Me" onPress={handleButton} />
    </View>
  )
}    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
  }
})

export default App
