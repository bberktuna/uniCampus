import React, {useContext} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
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


    const { signout } = useContext(AuthContext)

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={{marginTop:-5}}>
                        <ImageBackground
                            source={require("../../assets/wp.png")}
                            style={{flex:1,width: "100%", height: "100%"}}
                        >
                        <View style={{flexDirection:'column'}}>
                            <Avatar.Image 
                                source={require("../../assets/brian.png")}
                                size={70}
                                style={{marginTop:10, marginLeft:10,}}
                            />
                            <View style={{marginLeft:15, }}>
                                <Title style={styles.title}>@admin</Title>  
                                <View style={{flexDirection:"row"}}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>442</Paragraph>
                                    <Caption style={styles.caption}>Friends</Caption>
                                </View>                             
                            </View>
                        </View>

                        <View style={styles.row}>
                        
                                
                            

                        </View>
                        </ImageBackground>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Feed"
                            onPress={() => {props.navigation.navigate('Feed')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Favorites"
                            onPress={() => {props.navigation.navigate('Favorites')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>


                    <Drawer.Section title="Groups" style={styles.drawerSection}>
                        <View style={{flexDirection: "row"}}>
                            <Avatar.Image
                                size={35}
                                source={require("../../assets/brian.png")} 
                                style={{margin:10}}
                                />
                            <DrawerItem
                                label="Yapay Zeka Kulübü"
                                onPress={() => console.log("going to group screen")}
                            />
                            </View> 

                            <View style={{flexDirection: "row"}}>
                            <Avatar.Image
                                size={35}
                                source={require("../../assets/cat.jpg")} 
                                style={{margin:10}}
                                />
                            <DrawerItem
                                label="Dans Kulübü"
                                onPress={() => console.log("going to group screen")}
                            />
                            </View>      
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => signout() }
                />
            </Drawer.Section>
        </View>
    );
}

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
      textShadowColor:'black',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:10,
      
    },
    caption: {
      fontSize: 16,
      lineHeight: 14,
      color: "white",
      marginRight:10,
      textShadowColor:'black',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:10,

    },
    paragraph:{
        marginRight:15
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

    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
