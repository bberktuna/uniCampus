import React from 'react'

//navigation
import { createStackNavigator } from '@react-navigation/stack';
import {navigationRef} from "./src/navigation/RootNavigation"
import {NavigationContainer} from "@react-navigation/native"

//CONTEXT
import { Provider as AuthProvider} from "./src/context/AuthContext"
import { Provider as PostProvider} from "./src/context/PostContext"

//SCREENS
import {DrawerNavigation} from "./src/navigation/DrawerNav/index"
import {
  Auth,
  Login,
  Register,
} from "./src/screens/BaseAuth"

const RootStack = createStackNavigator();

//REDUXXXX
import {Provider as ReduxProvider} from "react-redux"
import {store} from "./src/redux/store"


const App = () => {
  return (
//<ReduxProvider store={store}>
    <PostProvider>
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>

        <RootStack.Navigator initialRouteName="Auth">
            <RootStack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
            <RootStack.Screen name="HomeApp" component={DrawerNavigation}  options={{headerShown: false}}/>
            <RootStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <RootStack.Screen name="Register" component={Register} options={{headerShown:false}}/> 
            
        </RootStack.Navigator>

      </NavigationContainer>
    </AuthProvider>
    </PostProvider>

//</ReduxProvider>
  )
}

export default App
