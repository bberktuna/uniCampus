import React ,{useState, useContext, useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
  } from 'react-native';
import {Context as PostContext} from "../../context/PostContext"

const CreatePost = ({initialValues,navigation}) => {

    const [stringContent, setStringContent] = useState(initialValues.stringContent)


    const { addPost, getPost } = useContext(PostContext)


    return (
        <View>
            <TextInput 
                value={stringContent}
                onChangeText={(text) => setStringContent(text)}
                style={styles.input}
            />

       

        <TouchableOpacity
            onPress={()=> addPost(stringContent)}
            
            >
            <Text>POST</Text>
        </TouchableOpacity>

    </View>
    )
}

CreatePost.defaultProps = {
    initialValues: {
        stringContent:"",
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:"black",
        width:200,
        marginBottom:10,
        marginLeft:10

    }
})
export {CreatePost}
