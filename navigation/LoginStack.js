import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default LoginStack;