import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font'
import Search from './components/search'
import FilmItem from './components/filmItem';
import OneDream from './components/oneDream';
import Plus from './components/plus';
import { render } from 'react-dom';
import {LinearGradient} from 'expo-linear-gradient'
import Header from './components/header';
import JournalScreen from './components/journalScreen';
import NavBar from './components/navBar';

const getFonts = () => Font.loadAsync({
  'Harmattan-Bold':require('./assets/fonts/Harmattan-Bold.ttf'),
  'Harmattan-Regular': require('./assets/fonts/Harmattan-Regular.ttf'),
  'Rancho': require('./assets/fonts/Rancho-Regular.ttf'),
    });

export default function App(){

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(!fontsLoaded){
    return (
      // <Text style= {{fontFamily: 'Harmattan-Bold'}}> MyGod</Text>
      <AppLoading 
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
    
  }
  else{
    return <NavBar/>
  }
}

//   const [fontLoaded, setfontLoaded] = useState(false)

//   if (!fontLoaded){
//     return 
//     <AppLoading 
//       startAsync={fetchFont}
//       onError = {() => console.log('error loading font')}
//       onFinish = {() =>{
//         setfontLoaded(true)
      
//       }}
//     />
//   }






  // constructor() {
  //   super();
  //   this.state={
  //     fontLoaded : false 
  //   };
  // }
  // componentDidMount(){
  //   Font.loadAsync({
  //     'Harmattan-Bold':require('./assets/fonts/Harmattan-Bold.ttf'),
  //     'Harmattan-Regular': require('./assets/fonts/Harmattan-Regular.ttf'),
  //   });
  //   this.setState({fontLoaded : true})
  // }

  // const [loaded] = useFonts({
  //   HarmattanBold: require('./assets/fonts/Harmattan-Bold.ttf'),
  //   HarmattanRegular: require('./assets/fonts/Harmattan-Regular.ttf'),
  // });
  
    



