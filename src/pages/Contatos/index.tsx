import React from 'react';
import { Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './style';

export default function Contato() {
    const navigator=useNavigation();
    
    return (
        
        <View>
              <Text>Contato FastDelivery</Text>
              <RectButton onPress={() => navigator.goBack()} style={styles.button}>
              <Text style={styles.text}>
              Voltar
              </Text>
              </RectButton> 
             </View>
    );
};