import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from "react-native"

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                
                onPress={() => navigation.replace("HomeApp")}
            >
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("_RegisterStack")}
            >
                <Text>Don't have an account? <Text>Register</Text> </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex:1
    }
})

export {Login}
