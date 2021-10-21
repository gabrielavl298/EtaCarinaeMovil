import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ActivityIndicator } from 'react-native';

import LoginStack from './navigation/LoginStack';
import DrawerNav from './navigation/DrawerNav';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from './config/cFirebase';
import { onAuthStateChanged } from "firebase/auth";


import Theme from './constants/Theme';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [currentUser, setUser] = useState('');

  useEffect(() => {
    console.log("User token: " +currentUser)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        setLoading(false);
        setUser(uid);

        // ...
      } else {
        setLoading(false);
        setUser('');
        console.log("no user");
        // User is signed out
        // ...
      }
    });
  }, [])



  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {currentUser == '' ? (
            <>
              <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }}/>
            </>
          ) : (
            <>
              <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
