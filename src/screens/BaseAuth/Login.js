import React, {useContext} from 'react'
import { View, StyleSheet} from "react-native"
import { Context as AuthContext } from "../../context/AuthContext"
import {AuthForm, NavLink} from "../../components/index"


const Login = ({navigation}) => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    const listener = navigation.addListener('blur', clearErrorMessage);

    return (

    <View style={styles.container}>


        <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="Giriş Yap"
        onSubmit={signin}//or just signup
        />

        <NavLink 
        text="Don't have an account? Sign up instead!"
        routeName="Register"
        />
            
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        
    }
})
export {Login}
