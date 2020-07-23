import React from 'react'
import {View, StyleSheet, Text} from "react-native"
import {CustomFAB} from "../../components/index"
import { navigationRef } from '../../navigation/RootNavigation'

const Feed = ({navigation}) => {
    return (
        <View style={styles.container}>

        <Text style={styles.cusFont}> 
            asdasdasdasqweq33
        </Text>

            
            <View style={styles.fab}>
                <CustomFAB 
                    icon="plus"
                    onPressFab={()=> navigation.navigate("CreatePost")}
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
    },
    cusFont:{
        fontFamily:"Quicksand-Bold"
    }
})

export {Feed}
