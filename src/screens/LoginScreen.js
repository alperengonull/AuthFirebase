import {
    StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity,
    TextInput,
} from 'react-native'
import React,{useState,useEffect} from 'react'
import { auth } from '../../firebase'

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log('Registered with:', user.email)
            })
            .catch(error => {
                console.error(error)
            })   
    }

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log('Logged in with:', user.email)
            })
            .catch(error => {
                console.error(error)
            })   
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        }
        )
    }
    ,[])

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                <TextInput style={styles.input} secureTextEntry placeholder="Password" value={password} onChangeText={text => setPassword(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={handleSignUp}>
                    <Text style={styles.outlineButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#333',
        padding:10,
        width: '45%',
        borderRadius: 5,
    },
    outlineButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#333',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    outlineButtonText: {
        color: '#333',
        textAlign: 'center',
    },

})