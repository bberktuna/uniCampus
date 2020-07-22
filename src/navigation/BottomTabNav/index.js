import React from 'react';
import {TouchableOpacity} from "react-native"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from "react-native-vector-icons/Ionicons"
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//SCREENSSSSSSSSSSSSSS
import {
  Feed,
  Search,
  Notifications,
  Messages,

} from "../../screens/BottomTab/index"

import {
  CreatePost,
  CreateMessage,

} from "../../screens/StackScreens"
import { navigationRef } from '../RootNavigation';


const Tab = createMaterialBottomTabNavigator();

const headerOff = ()=> ({
  headerShown:false
})



function BottomTabNavigation(){

return(
<React.Fragment>
    <Tab.Navigator 
    labeled={false}
    barStyle={{
      backgroundColor:"#000"
    }}
    
  >
    <Tab.Screen 
      name="_FeedStack" 
      component={_FeedStack} 
      options={{
        tabBarIcon: ({color})=> (
          <Icon name="home-outline" size={26} color={color}/>
        ),
      }}
    
    />  
    
    <Tab.Screen 
    name="_SearchStack" 
    component={_SearchStack} 
    options={{
      tabBarIcon: ({color})=> (
        <Icon name="search-outline" size={26} color={color} />
      )
    }}
    />  
                    
    <Tab.Screen 
    name="_NotificationsStack" 
    component={_NotificationsStack} 
    options={{
      tabBarIcon: ({color})=> (
        <Icon name="notifications-outline" size={26} color={color}/>
      )
    }}
    />

    <Tab.Screen 
    name="_MessagesStack"
    component={_MessagesStack} 
    options={{
      tabBarIcon: ({color})=> (
        <Icon name="chatbox-outline" size={26} color={color}/>
      )
    }}
    />

  </Tab.Navigator>
</React.Fragment>
)
}



const headerOptions = ({navigation}) => ({
  headerStyle:{
    backgroundColor: "black"
  },
  headerTitleStyle:{
    color:"white"
  },
  headerLeft: ()=> (

    <TouchableOpacity 
      onPress={()=> navigation.openDrawer()}
      style={{margin:5}}
    >
        <Avatar.Image
          size={40}
          source={require("../../../assets/brian.png")} 
        />
    </TouchableOpacity>
  ), 
  HeaderTitle: "Feed"
  
})


const FeedStack = createStackNavigator()
const SearchStack = createStackNavigator()
const NotificationsStack = createStackNavigator()
const MessagesStack = createStackNavigator()

const _FeedStack = () => (
  <FeedStack.Navigator initialRouteName="Feed">
    <FeedStack.Screen name="Feed" component={Feed} options={headerOptions}/>
    <FeedStack.Screen name="CreatePost" component={CreatePost} />
  </FeedStack.Navigator>
)

const _SearchStack = () => (
  <SearchStack.Navigator initialRouteName="Search">
    <SearchStack.Screen name="Search" component={Search} options={headerOptions}/>
  </SearchStack.Navigator>
)

const _NotificationsStack = () => (
  <NotificationsStack.Navigator initialRouteName="Notifications">
    <NotificationsStack.Screen name="Notifications" component={Notifications} options={headerOptions}/>
    <FeedStack.Screen name="CreatePost" component={CreatePost} />
  </NotificationsStack.Navigator>
)

const _MessagesStack = () => (
  <MessagesStack.Navigator initialRouteName="Messages">
    <MessagesStack.Screen name="Messages" component={Messages} options={headerOptions}/>
    <FeedStack.Screen name="CreateMessage" component={CreateMessage} />
  </MessagesStack.Navigator>
)



export {BottomTabNavigation}