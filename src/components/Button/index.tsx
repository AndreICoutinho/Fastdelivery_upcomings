import React from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

interface ButtonProps {
    label: string,
    route: string,
}

export default function Button(props: ButtonProps) {
    const navigation=useNavigation();

    return (
        <RectButton style={styles.button} onPress={() => navigation.navigate(props.route)}>
            <Text style={styles.text}>
                {props.label}
                
            </Text>
        </RectButton>           
    )
}