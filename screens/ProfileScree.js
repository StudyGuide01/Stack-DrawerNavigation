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
    {/* <Text>Hello ,Welcome {props.route.params.name}</Text> */}
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