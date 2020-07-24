import React, {useContext} from 'react'
import {View, StyleSheet, Text} from "react-native"
import {CustomFAB} from "../../components/index"
import {Context as PostContext} from "../../context/PostContext"



const Feed = ({route}) => {

    const { state } = useContext(PostContext)

    const feedPost = state.find((feedPost) => feedPost.id === route.params.id)


    return (

        <View>
            <Text>{feedPost.stringContent} </Text>
        </View>
            
    )
}










const styles = StyleSheet.create({


})

export {Feed}
