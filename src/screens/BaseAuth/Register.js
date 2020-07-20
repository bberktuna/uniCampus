import React, { useContext} from 'react'
import { View, StyleSheet } from "react-native"
import { Context as AuthContext} from "../../context/AuthContext"
import {AuthForm, NavLink} from "../../components/index"


const Register = ({navigation}) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    const listener = navigation.addListener('blur', clearErrorMessage);//baska screene gececekken addlistener


return (
    <View style={styles.container}>

        <AuthForm 
        errorMessage={state.errorMessage}
        submitButtonText="Kayıt Ol"
        onSubmit={signup}//or just signup
        />

        <NavLink 
        text="Allready have an account? Sign in instead!"
        routeName="Login"
        />
            
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})
export {Register}
