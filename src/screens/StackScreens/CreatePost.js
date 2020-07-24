import React, { useContext } from 'react'
import {Text, View} from "react-native"
import {CreatePostForm} from "../../components/index"
import { Context} from "../../context/PostContext"

const CreatePost = ({navigation}) => {

    const { addPost } = useContext(Context)

    return (
        <View>
            <CreatePostForm
                onSubmit={(stringContent) => {
                    addPost( stringContent, () => navigation.navigate("_FeedStack"))
            }}
            />
        </View>
    )
}

export {CreatePost}
