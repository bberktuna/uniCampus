import React, {useContext} from 'react';
import { View, StyleSheet, ImageBackground , Image, FlatList , SafeAreaView} from 'react-native';
import Svg, { Text } from "react-native-svg";


import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ Context as AuthContext } from "../context/AuthContext"



function DrawerContent(props) {

    const { signout} = useContext(AuthContext)

    return(

        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} style={{backgroundColor: "black"}} >
                <View style={styles.drawerContent}>
                    <View style={{marginTop:-5}}>
                        <ImageBackground
                            source={require("../../assets/wp.jpg")}
                            style={{flex:1,width: "100%", height: "100%"}}
                        >
                        <View style={{flexDirection:'column'}}>
                            <Image 
                                source={require("../../assets/brian.png")}
                                style={styles.profilePic}
                            />

                        <View style={{marginLeft:15, }}>
                        <Svg height="40" width="100">
                            <Text
                                fill="white"
                                stroke="white"
                                fontSize="18"
                                x="0"
                                y="25"
                                style={styles.cusFont}
                            >
                            asdasd
                            </Text>
                        </Svg> 
                        <View style={{flexDirection:"row"}}>
                            <Svg height="25" width="45">
                                <Text
                                    fill="white"
                                    stroke="white"
                                    fontSize="18"
                                    x="0"
                                    y="20"
                                    style={styles.cusFont}
                                >
                                    422
                                </Text>
                            </Svg> 
                            <Svg height="25" width="90">
                                <Text
                                    fill="white"
                                    stroke="white"
                                    fontSize="18"
                                    x="0"
                                    y="20"
                                    style={styles.cusFont}
                                >
                                    Friends
                                </Text>
                        </Svg> 
                                </View>                             
                            </View>
                        </View>

                        <View style={styles.row}>
                        

                        </View>
                        </ImageBackground>
                    </View>

                    <Drawer.Section >
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="home-outline" 
                                color="white"
                                size={30}
                                />
                            )}
                            labelStyle={styles.drawerLabel}
                            label="Feed"
                            onPress={() => {props.navigation.navigate('Feed')}}
                            style={styles.drawerItemStyleTop}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-outline" 
                                color="white"
                                size={30}
                                />
                            )}
                            labelStyle={styles.drawerLabel}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                            
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="bookmark-outline" 
                                color="white"
                                size={30}
                                />
                            )}
                            labelStyle={styles.drawerLabel}
                            label="Favorites"
                            onPress={() => {props.navigation.navigate('Favorites')}}
                        />

                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-check-outline" 
                                color="white"
                                size={30}
                                />
                            )}
                            labelStyle={styles.drawerLabel}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                            style={styles.drawerItemStyle}
                        />


                        <View style={{flexDirection: "row", flex:1}}>
                            <DrawerItem
                                icon={ ()=> (
                                    <Image
                                        source={require("../../assets/group.jpg")} 
                                        style={styles.groupImage}
                                    />
                                )}
                                label="Yapay Zeka Kulübü"
                                labelStyle={styles.drawerLabel}
                                onPress={() => console.log("going to group screen")}
                            />
                        </View> 
                
                        </Drawer.Section>


                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="exit-to-app" 
                        color="white"
                        size={30}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={styles.drawerLabel}
                    onPress={() => signout() }
                />
            </Drawer.Section>
        </View>
    );
}

const data = [
    {
        title:"Yapay zeka kulübü", key:"1", 
    },
    {
        title:"dans kulübü", key:"2", 
    },
]
    



export {DrawerContent}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      color: "white",

      
    },

    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      
    },

    cusFont:{
        fontFamily:"Quicksand-Bold"
    },
    drawerLabel:{
        color:"white",
        fontFamily:"Quicksand-Bold",
        fontSize:18,
        marginBottom:6,
        marginLeft:-10
    },
    groupImage:{
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth:1,
        borderColor: "white",
    },
    drawerItemStyle:{
        borderBottomColor:"white",
        borderBottomWidth:2,
    },
    drawerItemStyleTop:{
        borderTopColor:"white",
        borderTopWidth:2,
    },
    profilePic:{
        height:70,
        width: 70,
        borderRadius: 35,
        borderWidth:2,
        borderColor: "white",
        marginLeft:15,
        marginTop:15
    },
    bottomSection:{
        backgroundColor: "black",
        marginBottom:0,
        borderTopWidth:2,
        borderColor: "white"
    }
  });
