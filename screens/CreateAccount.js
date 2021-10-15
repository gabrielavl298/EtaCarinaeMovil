import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, Input, Button} from 'react-native-elements'

import Theme from '../constants/Theme'
import { color } from 'react-native-elements/dist/helpers';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const CreateAccount = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    async function RegisterUser(){
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            // ..
        });
    }
    return (
        <ScrollView  style = {styles.container}>
            <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Image source= {require('../assets/images/icon.png')} style= {styles.logo}/>
            </View>
            <View style= {{flex: 2, alignItems: 'center', paddingTop: 5}}>
            <Text style={styles.titleTxt}>Create account</Text>
                <View style={{width: '85%'}}>
                    <View>
                        <Input placeholder = 'Username' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Your username'
                            leftIcon={ <Icon name='user' size={24} 
                                color= {Theme.COLORS.ICON1}
                            />}
                            autoCompleteType = 'off'
                        />
                    </View>
                    <View>
                        <Input placeholder = '###-###-####' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Your phone number'
                            leftIcon={ <Icon name='phone' size={24} 
                                color= {Theme.COLORS.ICON1}
                            />}
                            autoCompleteType = 'off'
                        />
                    </View>
                    <View>
                        <Input placeholder = 'email@address.com' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Your email address'
                            leftIcon={ <Icon name='at' size={24} 
                                color= {Theme.COLORS.ICON1}
                            />}
                            autoCompleteType = 'off'
                            value = {email}
                            onChange = {(e) => setEmail(e.nativeEvent.text)}
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

                            value = {password}
                            onChange = {(e) => setPassword(e.nativeEvent.text)}
                        />
                        <Input placeholder = 'Confirm password' 
                            color={Theme.COLORS.SECONDARY}
                            placeholderTextColor={Theme.COLORS.PLACEHOLDER1}
                            labelStyle= {{color:  Theme.COLORS.LABEL1}}
                            label = 'Confirm your password'  
                            leftIcon={ <Icon name='key' size={24} 
                            color= {Theme.COLORS.ICON1}
                            />}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{width:'70%'}}>
                            <Button
                                title = 'Sign up'
                                buttonStyle = {{backgroundColor: Theme.COLORS.PRIMARY}}
                                onPress={() => RegisterUser()}
                            />
                        </View>
                    </View>
                    <View style= {{paddingTop: 5, alignItems: 'center'}}>
                        <Text style={styles.textStyle}> Already have an account?  <Text style={styles.linkText} onPress={() => {navigation.navigate('Login')}}>log in here</Text></Text>
                    </View>
                    <View style={{height:30}} /> 
                </View>
            </View>
        </ScrollView >
    )
}

export default CreateAccount

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
