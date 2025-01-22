import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/home';
import Signup from './src/signUp/signup';
import Login from './src/logIn/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Hide header for Home screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        
        {/* Hide header for Signup screen */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        
        {/* Hide header for Login screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
