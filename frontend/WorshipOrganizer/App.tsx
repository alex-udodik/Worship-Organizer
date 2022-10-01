/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './src/screens/login/login';

const RootStack = createNativeStackNavigator();

const App = () => {
  
  return (
    <LoginScreen/>
    
  );
};

export default App;