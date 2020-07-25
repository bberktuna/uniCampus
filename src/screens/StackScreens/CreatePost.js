import React, { useContext } from 'react'
import {Text, View} from "react-native"
import {CreatePostForm} from "../../components/index"
import {Context as PostContext} from "../../context/PostContext"

const CreatePost = ({navigation}) => {

    const { addPost } = useContext(PostContext)

    return (
        <View>
            <CreatePostForm
                onSubmit={(stringContent) => {
                    addPost( stringContent, () => navigation.navigate("Feed"))
            }}
            />
        </View>
    )
}

export {CreatePost}
