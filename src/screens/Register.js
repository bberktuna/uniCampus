import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from "react-native"

const Register = ({navigation}) => {
    return (


        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("_LoginStack")}
            >
                <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("_LoginStack")}
            >
                <Text>Allready have an account? <Text>Login</Text> </Text>
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

export {Register}