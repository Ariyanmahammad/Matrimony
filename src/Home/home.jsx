import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  // Navigate to Signup screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Signup');
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Matrimony</Text>
    </View>
  );
};

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

export default Home;
