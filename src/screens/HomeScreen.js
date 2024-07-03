import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'

export default function HomeScreen({ navigation}) {


    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.navigate('Login')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text>Email : {auth.currentUser?.email} </Text>

            <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={handleSignOut}>
                <Text style={styles.outlineButtonText}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    outlineButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    outlineButtonText: {
        color: 'black'
    }

})