import React, { useEffect, useState, useCallback, useContext } from 'react'
import {View, Text,StyleSheet, Button, TextInput} from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {CustomFAB} from "../../components/index"
import {Context as AuthContext } from "../../context/AuthContext"

const Messages = () => {

    const {state, getUserData} = useContext(AuthContext)
 
    useEffect(() => {
        getUserData()
        return () => {
            getUserData()
        }
    }, [])
    return (

    <View style={styles.container}>

        <Text >
            {state.email}
            
        </Text>



    </View>
    )
}

  
     /*   <View style={styles.fab}>
            <CustomFAB 
                icon="email-plus-outline"
                onPressFab={()=> navigation.navigate("CreateMessage")}
            />
        </View>*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab:{
        flex:1,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    input:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:25,
        width:300,
        height:50,

    },
})

export {Messages}