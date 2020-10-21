import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, CustomButton } from "components";
import { colors } from "constants";
import { useDispatch } from 'react-redux';
import { signUp, login } from '../store/auth/authAction'

const AuthScreen = ( ) => {
    const [isSignUp, setisSignUp] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signupHandler = useCallback(() => {
        isSignUp ? dispatch(signUp(name, email, password)) : dispatch(login( email, password))

    },[]);
    
    const setisSignUpHandler =useCallback(() =>{
        setisSignUp(prevState => !prevState)
    },[setisSignUp])

    return (

        <View style={styles.container}>
            <View style={styles.authScreen}>
                <View style={styles.cartContainer}>
                    <ScrollView>
                        {isSignUp && <Input
                            label={'name'}
                            value={name}
                            onChangeText={(value)=>setName(value)}
                        />}
                        <Input
                            label={'email'}
                            value={email}
                            onChangeText={(value)=>setEmail(value)}
                            />
                        <Input
                            label={'password'}
                            value={password}
                            onChangeText={(value)=>setPassword(value)}
                        />

                        <CustomButton title={isSignUp ? 'SignUp' : 'Login'} onPress={signupHandler}
                            color={colors.primary} />
                        <View style={styles.marginVertical}>
                            <CustomButton style={styles.marginVertical} title={`Switch  to ${isSignUp ? 'Login' : 'signUp'}`}
                                onPress={setisSignUpHandler}
                                color={colors.primary} />
                        </View>
                    </ScrollView>
                </View>
            </View>


        </View>
    )
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,


    },
    cartContainer: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    authScreen: {
        justifyContent: 'center',
        flex: 1,

    }, marginVertical: { marginVertical: 20 }
})