import React from 'react'

import {navigationRef} from "./RootNavigation"
import { Card } from "react-native-paper"

//navigation
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { useIsFocused } from '@react-navigation/native'

//screens
import {
    Login,
    Register,
    Auth,
    Profile,
    Feed,
    Messages,
    Search,
    Logout


} from "../screens/index"

const headerOff = () => ({
    headerShown: false
})
const headerLeftNull = () => ({
    headerLeft: null
})



const AppStack = createStackNavigator()
const BaseStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const BottomTab = createMaterialBottomTabNavigator()
const FeedStack = createStackNavigator()
const LoginStack= createStackNavigator()
const RegisterStack= createStackNavigator()

function _FeedStack(){
    return(
        <FeedStack.Navigator 
            initialRouteName="Feed">
            <FeedStack.Screen 
                name="Feed" 
                component={Feed}
                options={{
                    title:"Feed"
                }}
            />
        </FeedStack.Navigator>
    )
}

function _LoginStack(){
    return(
    <LoginStack.Navigator>
        <LoginStack.Screen 
            name="Login" 
            component={Login} 
            options={headerOff}
        />
    </LoginStack.Navigator>
    )
}  

function _RegisterStack(){
    return(
    <RegisterStack.Navigator>
        <RegisterStack.Screen 
            name="Register" 
            component={Register} 
            options={headerOff}
        />
    </RegisterStack.Navigator>
    )
}  


function TabNavigator(){
    return(
    <BottomTab.Navigator initialRouteName="Feed">
        <BottomTab.Screen
            name="_FeedStack"
            component={_FeedStack}
            options={{
                title:"Feed"
            }}
           />  
        <BottomTab.Screen 
            name="Search" 
            component={Search} 
            options={{
                title:"Search"
            }}
        />  
        <BottomTab.Screen 
            name="Messages"
            component={Messages} 
            options={{
                title:"Messages"
            }}
         />  
    </BottomTab.Navigator>
  )
}


function _BaseStack(){
    return(
        <BaseStack.Navigator initialRouteName="Login">

            <BaseStack.Screen 
                name="_LoginStack" 
                component={_LoginStack} 
                options={headerOff}
            />
            <BaseStack.Screen
                name="_RegisterStack" 
                component={_RegisterStack} 
                options={headerOff}
             />
        </BaseStack.Navigator>
    )
}

function DrawerNavigator({navigation}){
    return(
      <Drawer.Navigator initialRouteName="MenuTab" >
          <Drawer.Screen 
            name= "MenuTab" 
            component={TabNavigator} 
          />
          <Drawer.Screen 
            name= "Profile"
            component={Profile} 
           />
          <Drawer.Screen 
            name= "Logout" 
            component={Logout} 
          />
      </Drawer.Navigator>
  
    )
  }

const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <AppStack.Navigator initialRouteName="_BaseStack" >
                <AppStack.Screen 
                    name="_BaseStack" 
                    component={_BaseStack} 
                    options={headerOff}
                />

                <AppStack.Screen
                    name="HomeApp" 
                    component={DrawerNavigator}
                  />

            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export {AppNavigator}
