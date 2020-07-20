import React from 'react'
import {DrawerContent} from "../../components/DrawerContent"
import {BottomTabNavigation} from "../BottomTabNav/index"


//navigation
import {createDrawerNavigator} from "@react-navigation/drawer"


//screens
import {
AboutUs,
Profile,
Logout,
Favorites,
Settings,
} from "../../screens/Drawer/index"


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {

    return (

              <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={BottomTabNavigation} />
                    <Drawer.Screen name="AboutUs" component={AboutUs} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="BookmarkScreen" component={Favorites} />
                    <Drawer.Screen name="Logout" component={Logout} />
                    <Drawer.Screen name="Profile" component={Profile} />
              </Drawer.Navigator>

    )
}

export {DrawerNavigation}
