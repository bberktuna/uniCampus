import React ,{useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
  } from 'react-native';

const CreatePostForm = ({ onSubmit, initialValues }) => {

    const [stringContent, setStringContent] = useState(initialValues.stringContent)

    return (
    <View >

        <TextInput 
            value={stringContent}
            onChangeText={(text) => setStringContent(text)}
            style={styles.input}
        />


        <TouchableOpacity
            onPress={()=> onSubmit(stringContent)}
            >
            <Text>POST</Text>
        </TouchableOpacity>
    </View>
    )
}

CreatePostForm.defaultProps = {
    initialValues: {
        stringContent:"asdasd",
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
export {CreatePostForm}
