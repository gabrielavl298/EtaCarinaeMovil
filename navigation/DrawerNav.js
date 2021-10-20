import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent';

import Theme from '../constants/Theme';

import HomeStack from './HomeStack';
import ProductViewScreen from '../screens/ProductViewScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }
            screenOptions={{
                drawerStyle: {
                backgroundColor: Theme.COLORS.PRIMARY,
                width: 240,
                },
            }}
        >
            <Drawer.Screen name="HomeStack" component={HomeStack}  
                options={{
                    title: 'Home', 
                    drawerLabel: 'Home',
                }} 
            />
            <Drawer.Screen name="Cart" component={CartScreen}  options={{title: 'Cart'}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
