import React from 'react';
import {Image, TouchableOpacity} from "react-native"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';

import Icon from "react-native-vector-icons/Ionicons"
import { useIsFocused } from '@react-navigation/native'
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
  Feed,
  Search,
  Notifications,
  Messages
} from "../../screens/BottomTab/index"
import { navigationRef } from '../RootNavigation';


const Tab = createMaterialBottomTabNavigator();

const headerOff = ()=> ({
  headerShown:false
})



function BottomTabNavigation(props){

  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Search';

  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default :
      icon = 'feather';
      break;

  }
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
  headerLeft: ()=> (

    <TouchableOpacity 
      onPress={()=> navigation.openDrawer()}
      style={{margin:5}}
    >
        <Avatar.Image
        size={40}
        source={require("../../../assets/brian.png")} />
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
  </NotificationsStack.Navigator>
)

const _MessagesStack = () => (
  <MessagesStack.Navigator initialRouteName="Messages">
    <MessagesStack.Screen name="Messages" component={Messages} options={headerOptions}/>
  </MessagesStack.Navigator>
)


/*const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
*/

export {BottomTabNavigation}