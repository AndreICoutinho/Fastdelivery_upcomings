import React from 'react';
import { Text, View } from 'react-native';


import Button from '../../components/Button';

import { styles } from './style';

export default function Login() {

    return (
       <View style={styles.container}>
           <Text>
               Seja bem vindo ao FastDelivery
           </Text>
<Button label='Login' route='Login' /> 
<Button label='cadastre-se' route='Login' />
<Button label='contato' route='Contato' />
       </View>  
    );

}