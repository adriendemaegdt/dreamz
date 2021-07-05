import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'


class Plus extends React.Component {
    render() {
      return (
        <View style = {styles.button_view}>
            
            <TouchableOpacity 
            style= {styles.button}
            onPress={console.log('hey')}
            >
                <LinearGradient
            colors={['#7039B8', '#9654EC']}
            style={styles.gradient}
            >
                
                <View style = {styles.vertical}></View>
                <View  style = {styles.horizontal}></View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      )}
    }
const styles = StyleSheet.create({
    button_view:{
        justifyContent:'center',
        alignItems:'center',
        height:65,
        width:65,
        
    },
    button: {
        width:'100%',
        height:'100%',
        borderRadius: 180,
        backgroundColor:'#7A40C6',
        justifyContent:'center',
        alignItems:'center',
    },
    vertical:{
        backgroundColor:'#F8F5FE',
        height:'45%',
        borderRadius:50,
        width:7
    },
    horizontal: {
        backgroundColor:'#F8F5FE', 
        borderRadius:50,
        width:'45%',
        height:7,
        position:'absolute'

    },
    gradient:{
        width:'100%',
        height:'100%',
        borderRadius: 180,
        justifyContent:'center',
        alignItems:'center'
    }
    
})
export default Plus