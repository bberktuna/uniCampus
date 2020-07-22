import React from 'react'
import {View, Text,StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {CustomFAB} from "../../components/index"

const Messages = () => {
    return (
    <View style={styles.container}>

        <View>
            <Text>Messages</Text>
        </View>
        
        <View style={styles.fab}>
            <CustomFAB 
                icon="email-plus-outline"
                onPressFab={()=> navigation.navigate("CreateMessage")}
            />
        </View>

    </View>
    )
}


            
const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    fab:{
        flex:1,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export {Messages}