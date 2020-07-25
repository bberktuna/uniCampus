import React, {useContext} from 'react'
import {View, Text,StyleSheet, FlatList,TouchableOpacity} from "react-native"
import {Context as PostContext} from "../../context/PostContext"

const PostDetail = ({route}) => {
    
    const { state } = useContext(PostContext)

    const feedPost = state.find((feedPost) => feedPost.id === route.params.id)

    return (
        <View>
            <Text>{feedPost.title} </Text>
            <Text>{feedPost.content} </Text>
        </View>
    )
}
const styles = StyleSheet.create({

})

export {PostDetail}
