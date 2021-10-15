import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, Input, Button} from 'react-native-elements'

import Theme from '../constants/Theme'
import { color } from 'react-native-elements/dist/helpers';

import {firebaseapp} from '../config/cFirebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { ThemeProvider } from '@react-navigation/native';

const auth = getAuth();

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("false");
    const [notFoundError, setNotFoundError] = useState("false");

    useEffect(() => {
        console.log(emailError);
    }, [emailError]);

    async function LogIn(){
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            setEmailError(false);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + "\n" +errorCode);
            console.log("Error code: "+error.code);

            switch(error.code){
                case "auth/invalid-email":
                    setEmailError(true);
                    break;
                case "auth/invalid-email":
                    setNotFoundError(true);
            }
        });
    }

    return (
        <ScrollView style = {styles.container}>
            <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Image source= {require('../assets/images/icon.png')} style= {styles.logo}/>
            </View>
            <View style= {{flex: 2, alignItems: 'center', paddingTop: 5}}>
                <Text style={styles.titleTxt}>Login</Text>
                <View style={{width: '85%'}}>
                    <View>
                        <Input placeholder = 'email@address.com' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Your email address'
                            leftIcon={ <Icon name='at' size={24} 
                                color= {Theme.COLORS.ICON1}
                            />}
                            keyboardType = "email-address"
                            autoCompleteType = 'off'
                            
                            inputContainerStyle={ emailError ? {borderColor: Theme.COLORS.ERROR} : {borderColor: Theme.COLORS.INPUT.BORDER}}
                            errorMessage= { emailError ? 'Email address invalid' : ''}
                            onChange= {(e) => {setEmail(e.nativeEvent.text)}}
                            value = {email}
                        />
                    </View>
                    <View>
                        <Input placeholder = 'Password' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Your password'  
                            leftIcon={ <Icon name='key' size={24} 
                            color= {Theme.COLORS.ICON1}
                            />}

                            secureTextEntry={true}
                            onChange = {(e) => {setPassword(e.nativeEvent.text)}}
                            value = {password}
                            
                            
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        {notFoundError ? (<View>
                            <Text style = {{color: Theme.COLORS.ERROR}}>Email or password are incorrect</Text>
                            </View>) : <View/>
                        }
                        <View style={{width:'70%', paddingTop:10}}>
                            <Button
                                title = 'Log in'
                                buttonStyle = {{backgroundColor: Theme.COLORS.PRIMARY}}
                                disabled = {password.length == 0 ? true : false}
                                onPress ={() => {LogIn()}}
                            />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{width:'70%', paddingTop:10}}>
                            <Button
                                title = 'Log in with google'
                                buttonStyle = {{backgroundColor: Theme.COLORS.OTHER.GOOGLEBTN}}
                                icon = {<Icon name='google' size = {24} color='white' style={{marginRight:7}}/>}
                            />
                        </View>
                    </View>
                    <View style= {{paddingTop: 15, alignItems: 'center'}}>
                        <Text style={styles.textStyle}> New here?  <Text style={styles.linkText} onPress={() => {navigation.navigate('CreateAccount')}}>create an account</Text></Text>
                    </View>
                </View>
            </View>
            
        </ScrollView>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Theme.COLORS.DEFAULT,
        paddingTop: 10
        
    },

    logo:{
        width: '65%',
        height: '61.5%',
        paddingTop: '50%'
    },

    titleTxt:{
        fontSize: Theme.SIZES.TEXT.TITLE,
        color: Theme.COLORS.PRIMARY,
        fontWeight: 'bold'
    },

    textStyle:{
        color: Theme.COLORS.SECONDARY
    },
    linkText:{
        color: Theme.COLORS.SECONDARY,
        textDecorationLine: 'underline'
    }
})
