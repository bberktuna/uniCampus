import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationRef} from "./RootNavigation"
import {NavigationContainer} from "@react-navigation/native"

//screens
import {} from "./BottomTabNav/index"
import {DrawerNavigation} from "./DrawerNav/index"

import {
    Auth,
    Login,
    Register,
} from "../screens/BaseAuth"


const RootStack = createStackNavigator();




const AppNavigator = () => {



    return (

    <NavigationContainer ref={navigationRef}>

        <RootStack.Navigator initialRouteName="Auth">
            <RootStack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
            <RootStack.Screen name="Login" component={DrawerNavigation} options={{headerShown:false}}/>
            <RootStack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </RootStack.Navigator>

    </NavigationContainer>

    )
}

export {AppNavigator}
