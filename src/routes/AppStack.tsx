import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 

const {Navigator, Screen} = createStackNavigator();

import Login from '../pages/Login';
import Contato from '../pages/Contatos'

export default function Routes() {

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Login" component={Login} />
                <Screen name="Contato" component={Contato} />
            </Navigator>
        </NavigationContainer>
    )
}