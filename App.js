import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar,  View } from 'react-native';

import 'react-native-gesture-handler';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

