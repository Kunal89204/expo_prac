import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello worldhgmhgjh</Text>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.image}
      />
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default App;
