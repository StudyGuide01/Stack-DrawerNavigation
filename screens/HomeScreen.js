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