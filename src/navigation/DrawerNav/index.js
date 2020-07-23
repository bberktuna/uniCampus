import React from 'react'
import {DrawerContent} from "../../components/DrawerContent"
import {BottomTabNavigation} from "../BottomTabNav/index"


//navigation
import {createDrawerNavigator} from "@react-navigation/drawer"


//screens
import {
Profile,
Logout,
Favorites,
Settings,
} from "../../screens/Drawer/index"


const Drawer = createDrawerNavigator();


function DrawerNavigation(){

    return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props }/>}>
        <Drawer.Screen name="HomeDrawer" component={BottomTabNavigation} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favorites" component={Favorites} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Logout" component={Logout} />
        
    </Drawer.Navigator>

    )
}

export {DrawerNavigation}
