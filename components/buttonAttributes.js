import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
class ButtonAttribute extends React.Component {
    render() {
      
      
      return (
          <View style= {styles.button}>
              <Text style= {styles.text_attributes}> Rene </Text>
          </View>
      )}
    }
const styles = StyleSheet.create({
    button: {
        height: 30,
        width:50,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0F143A',
        flex:3, 
        borderRadius:5, 
        marginRight:20,
        

    },
    text_attributes:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:12
    }

})

export default ButtonAttribute