import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, Input, Button} from 'react-native-elements'

import Theme from '../constants/Theme'
import { color } from 'react-native-elements/dist/helpers';

const LoginScreen = ({ navigation }) => {
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
                            autoCompleteType = 'off'
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
                            
                            
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{width:'70%'}}>
                            <Button
                                title = 'Log in'
                                buttonStyle = {{backgroundColor: Theme.COLORS.PRIMARY}}
                                onPress ={() => {navigation.navigate('DrawerNav')}}
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
