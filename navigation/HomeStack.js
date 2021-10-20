import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProductViewScreen from '../screens/ProductViewScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator initialRouteName='ProductScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ProductScreen" component={ProductViewScreen} options = {{title: 'Product Info'}}/>
        </Stack.Navigator>
    );
}

export default HomeStack

const styles = StyleSheet.create({})
