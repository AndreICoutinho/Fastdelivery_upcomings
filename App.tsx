import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import AppStack from './src/routes/AppStack';

export default function App() {
  return(
    <>
    <StatusBar />
    <AppStack />

    </>
  )
}
  


