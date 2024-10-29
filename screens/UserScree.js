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