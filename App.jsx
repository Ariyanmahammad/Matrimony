import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LogBox } from 'react-native';

// Ignore all warnings
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Matrimony</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
