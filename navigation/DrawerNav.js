import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent';

import Theme from '../constants/Theme';

import HomeScreen from '../screens/HomeScreen';
import ProductViewScreen from '../screens/ProductViewScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }
            screenOptions={{
                drawerStyle: {
                backgroundColor: Theme.COLORS.DEFAULT,
                width: 240,
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen}  
                options={{
                    title: 'Home', 
                    drawerLabel: 'Home',
                    backgroundColor: Theme.COLORS.PRIMARY
                }} 
            />
            <Drawer.Screen name="Cart" component={CartScreen}  options={{title: 'Cart'}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
