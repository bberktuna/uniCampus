import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import {CustomFAB} from "../../components/index"
import { navigationRef } from '../../navigation/RootNavigation'

const Feed = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Feed</Text>
            </View>
            
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
    }
})

export {Feed}
