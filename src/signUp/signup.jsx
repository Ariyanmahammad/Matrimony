import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {
  // Form state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signed up with', { name, email, phone, gender, location });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Gender Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your gender"
          value={gender}
          onChangeText={setGender}
        />
      </View>

      {/* Location Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location (City, Country):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <Button title="Sign Up" onPress={handleSignup} />

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Signup;
