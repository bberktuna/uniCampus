
const AppStack = createStackNavigator()
const BaseStack = createStackNavigator()
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









  //---------------------------------
  function BottomTabNavigation(){
    return(
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#000000"
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: '',
            tabBarColor: '#000000',
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: '',
            tabBarColor: '#000000',
            tabBarIcon: ({ color }) => (
              <Icon name="notifications-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarColor: '#000000',
            tabBarIcon: ({ color }) => (
              <Icon name="search-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: '',
            tabBarColor: '#000000',
            tabBarIcon: ({ color }) => (
              <Icon name="chatbox-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      )
  }


  