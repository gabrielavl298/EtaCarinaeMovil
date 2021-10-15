import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HOME!</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
