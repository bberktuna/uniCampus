import React, {useContext, useEffect, useState,useMemo} from 'react'
import {View, Text,StyleSheet, FlatList, TouchableOpacity} from "react-native"
import {CustomFAB} from "../../components/index"
import {Context as PostContext}  from "../../context/PostContext"
import Icon from "react-native-vector-icons"
import uniCampusApi from "../../api/index"
const Feed = ({navigation}) => {

    const {state, getPost} = useContext(PostContext)

   
   useEffect(() => {

        getPost()

        const listener = navigation.addListener('focus', () => {
            getPost()          
        });

        return listener

    }, [])//empty array means execute this function one time 




    return (
        <View style={styles.container}> 

            
            <FlatList 
            contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
            inverted
            data={state}
            keyExtractor={(feedPost) => feedPost.stringContent }
            renderItem={( {item} ) => {
                return(
                 /* <TouchableOpacity
                        onPress={()=> navigation.navigate("PostDetail", {id: item.id})}
                    >*/
                        <View style={styles.row}>
                            <Text style={styles.title}>

                                {item.stringContent}

                            </Text>
                        </View>
                  /*  </TouchableOpacity>*/
                )
            } }
            /> 














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
    addPostText:{
        fontSize:18,
        alignSelf:"center",
        
        
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:1,
        borderColor:"gray",
        paddingHorizontal:10,
        borderWidth:1,
        paddingVertical:10
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:20,
        
    },
    container:{
        flex:1
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
