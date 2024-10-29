//APP.JS
import React from 'react'
import { View,Text } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScree';
import UserScreen from './screens/UserScree';

const App = () => {

//IT IS NOT GOOD WAY TO MANAGE STACK NEVIGATOR
//   createNativeStackNavigator({
//     Home:HomeScreen,
//     Details:Details
// })


const Stack = createNativeStackNavigator()
  return (
   <>
   
   <NavigationContainer>
<Stack.Navigator
// initialRouteName='Profile'
// initialRouteName='Home' // if we want as per requirement
//sab hi screen me same design karne ke liye

screenOptions={{
  // sirf kisi ek me karne ke liye 
 
   statusBarColor:'orange',  //Home screen ke upar color karne ke liye
  //  title:'Home Screen',
   headerStyle:{
     backgroundColor:'orange'
   },
   headerTintColor:'#fff',
   headerTitleAlign:'center'

}}
>
  {/* <Stack.Screen name='Home' component={HomeScreen}/> */}


  <Stack.Screen name='Home' component={HomeScreen}

  // sirf kisi ek me karne ke liye 
  //  options={{
  //   statusBarColor:'orange',  //Home screen ke upar color karne ke liye
  //   title:'Home Screen',
  //   headerStyle:{
  //     backgroundColor:'orange'
  //   },
  //   headerTintColor:'#fff',
  //   headerTitleAlign:'center'
  //  }}
  
  
  />
  <Stack.Screen name='Profile' component={ProfileScreen}/>
  <Stack.Screen name='User' component={UserScreen}
  //ye sari design jo he options wali wo user ya kisi perticolor screen per nahi dikhane ke liye
  options={{
    // headerShown:false
    headerShown:true,
    //backerror ko hide karne ke liey 
    headerBackVisible:false,
    //khud ka arroa back or text likhe ke liye 
    // headerLeft:()=>{
    //   return (
    //     <Text style={{marginLeft:30}}>Hi</Text>
    //   )
    // }

  }}
  
  />

</Stack.Navigator>


   </NavigationContainer>
{/* <View>
  <HomeScreen/>
</View>
    */}
   </>
  )
}

export default App




// HomeScreen.js
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View,Button } from 'react-native'
// import { Button } from 'react-native-paper'

const HomeScreen = (props) => {
    console.log(props);
   
  return (
   <>
   
   <View style={styles.homeSceen}>
    <Text>Home Screen</Text>
    <Text>React Navigation</Text>
    <Button title='Profile' onPress={()=>props.navigation.navigate('Profile',{
        name:"javed"
    })}/>
   </View>
   
   </>
  )
}

export default HomeScreen


const styles=StyleSheet.create({
    homeSceen:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})




//ProfileScree.js
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const ProfileScreen = (props) => {
   console.log(props);
  return (
   <>
   
   <View style={styles.homeSceen}>
    <Text>Profile Screen</Text>
    <Text>React Navigation</Text>
    <Text>Hello ,Welcome {props.route.params.name}</Text>
    <Button title='User' onPress={()=>props.navigation.navigate('User')}/>

   </View>
   
   </>
  )
}

export default ProfileScreen


const styles=StyleSheet.create({
    homeSceen:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})




//UserScreen.js
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const UserScreen = (props) => {
   
  return (
   <>
   
   <View style={styles.homeSceen}>
    <Text>User Screen</Text>
    <Text>React Navigation</Text>
    <Button title='Home' onPress={()=>props.navigation.navigate('Home')}/>

   </View>
   
   </>
  )
}

export default UserScreen


const styles=StyleSheet.create({
    homeSceen:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})

