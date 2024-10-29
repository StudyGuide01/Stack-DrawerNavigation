import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustomText from './components/CustomText';
import Loading from "./components/Loading";
import TextForm from "./components/TextForm";
import SimpleList from "./components/SimpleList";

export default function App() {
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState(false);
  const [list,setList]=useState(false);

const showComponents =(title)=>{
  if(title === 'list'){
    setList(true);
    setForm(false);
    setLoading(false);
  }else if(title === 'loading'){
    setLoading(true);
    setList(false);
    setForm(false);
    
  }else if(title === 'form'){
    setForm(true);
    setLoading(false);
    setList(false);

  }else{
    setForm(true);
    setLoading(true);
    setList(true);
  }
 
}

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Demo Of Component</Text>

      <View style={styles.buttonContainer}>
        <Button style={[styles.button, { backgroundColor: 'red' }]} textColor="white" labelStyle={styles.buttonLabel} onPress={()=>showComponents('list')}>SimpleList</Button>
        <Button style={[styles.button, { backgroundColor: 'green' }]} textColor="white" labelStyle={styles.buttonLabel} onPress={()=>showComponents('loading')}>Loading</Button>
        <Button style={[styles.button, { backgroundColor: 'blue' }]} textColor="white" labelStyle={styles.buttonLabel} onPress={()=>showComponents('form')}>Form</Button>
        <Button style={[styles.button, { backgroundColor: 'orange' }]} textColor="white" labelStyle={styles.buttonLabel} onPress={()=>showComponents('')}>Show ALL</Button>
      </View>

      <View style={styles.contentContainer}>
      {list? <SimpleList style={styles.simpleList} /> : ""}
        
        {loading ? <Loading /> : ""}
        {form ? <TextForm style={{marginBottom:60}} /> : ""}
        
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0', // Light background color for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 20,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  simpleList: {
    marginTop: 20,
  },
  form:{
    marginBottom:60
  }
});




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import CustomText from './components/CustomText';
// import { Button } from 'react-native-paper';
// import Loading from './components/Loading';
// import TextForm from './components/TextForm';

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       <View style={styles.container}>
//         <Text style={styles.textStyle}>Demo of Component</Text>
//         <Button style={[styles.buttons, { backgroundColor: 'red' }]} textColor='white' labelStyle={{ fontSize: 20 }}>
//           Show Loading
//         </Button>

//         <Button style={[styles.buttons, { backgroundColor: 'blue' }]} textColor='white' labelStyle={{ fontSize: 20 }}>
//           Show Form
//         </Button>

//         <Button style={[styles.buttons, { backgroundColor: 'green' }]} textColor='white' labelStyle={{ fontSize: 20 }}>
//           Show Flatlist
//         </Button>

//         <Button style={[styles.buttons, { backgroundColor: 'black' }]} textColor='white' labelStyle={{ fontSize: 20 }}>
//           Show All
//         </Button>
//       </View>

//       <View style={styles.loadingContainer}>
//         <Loading style={styles.loading} />
//         <TextForm style={styles.form} />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Ensure the container takes full height
//     justifyContent: 'flex-start', // Align content to the top
//     padding: 20, // Add some padding for better layout
//   },
//   textStyle: {
//     fontSize: 30,
//     color: 'black',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   buttons: {
//     width: '100%',
//     borderRadius: 3,
//     marginBottom: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center', // Center horizontally
//     position: 'absolute', // Position it over other content
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     gap: 30,
//   },
//   loading: {
//     marginTop: 500,
//   },
//   form: {
//     marginTop: 20, // Changed to a positive value for better visibility
//   },
// });
 