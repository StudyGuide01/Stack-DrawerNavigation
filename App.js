import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer,useNavigation,DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ProfileScree";
import UserScreen from "./screens/UserScree";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from "./DrawerContent";


const StackNav =()=>{
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      statusBarColor: "blue",

      headerStyle: {
        backgroundColor: "blue",
      },
      headerTintColor: "#fff",
      headerTitleAlign: "center",

      //jo icon or header hamene Drawer navigation me hide kiya he use dikhane ke liye
//       headerLeft:()=>{
//         return (
// <Icon
// name="menu"
// onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
// size={24}
// color={'#fff'}

// />
//         )
//       }
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} options={{
         headerLeft:()=>{
          return (
  <Icon
  name="menu"
  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
  size={24}
  color={'#fff'}
  
  />
          )
        }
    }}/>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerShown: true,

        headerBackVisible: false,
        //khud ka arroa back or text likhe ke liye
        // headerLeft:()=>{
        //   return (
        //     <Text style={{marginLeft:30}}>Hi</Text>
        //   )
        // }
      }}
    />
  </Stack.Navigator>
    
  )
}


const DrawerNav =()=>{
  const Drawer = createDrawerNavigator()
  return (
<Drawer.Navigator
drawerContent={props=><DrawerContent  {...props}/>}
screenOptions={{
  headerShown:false
}}

>

<Drawer.Screen name='Home' component={StackNav}/>


  {/* <Drawer.Screen name='Home' component={HomeScreen}/>
  <Drawer.Screen name='Profile' component={ProfileScreen}/>
  <Drawer.Screen name='User' component={UserScreen}/> */}

</Drawer.Navigator>
  )
}
const App = () => {
  // const Drawer = createDrawerNavigator() // this help to pass drewer screens 
  // const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>

        <DrawerNav/>
{/* <Drawer.Navigator

// screenOptions={{
//   statusBarColor: "blue",

//   headerStyle: {
//     backgroundColor: "blue"
//   },
//   headerTintColor: "#fff",
//   headerTitleAlign: "center",
// }}
>
  <Drawer.Screen name='Home' component={HomeScreen}/>
  <Drawer.Screen name='Profile' component={ProfileScreen}/>
  <Drawer.Screen name='User' component={UserScreen}/>

</Drawer.Navigator> */}

        {/* <Stack.Navigator
          screenOptions={{
            statusBarColor: "orange",

            headerStyle: {
              backgroundColor: "orange",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{
              headerShown: true,

              headerBackVisible: false,
              //khud ka arroa back or text likhe ke liye
              // headerLeft:()=>{
              //   return (
              //     <Text style={{marginLeft:30}}>Hi</Text>
              //   )
              // }
            }}
          />
        </Stack.Navigator> */}


      </NavigationContainer>
      {/* <View>
  <HomeScreen/>
</View>
    */}
    </>
  );
};

export default App;
