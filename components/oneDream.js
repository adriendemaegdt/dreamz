import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'
import ButtonAttribute from './buttonAttributes'




class OneDream extends React.Component {

    render() {
        
        return (
    <View style={styles.oneDream}>
        <View style= {styles.date}>
                <Text style = {styles.date_text}> 29 Septembre 1997 </Text>
        </View>
        <View style={styles.main_container}>
            <View style={styles.content_container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text} numberOfLines={1}>Un Voyage interminable </Text>
                </View>
                <View style= {styles.description_view}>
                    <Text style={styles.description_text}  numberOfLines={2} ellipsizeMode= "tail" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai </Text>
                    <TouchableOpacity
                        onPress={console.log('hey')}
                        style={styles.button_play}>
                        <View style={[styles.triangle,styles.arrowRight]}></View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attributes_view}>
                    <FlatList 
                    horizontal
                    data={[{key: 'galaxie'}, {key: 'voyage'}]}
                    renderItem={({item}) => <ButtonAttribute>{item.key}</ButtonAttribute>}
                    />
                </View>
            </View>
        </View>
    
    </View>
        )
    }
  }

  const styles = StyleSheet.create({

    oneDream:{
        height:220,
        padding:20,

    },
    date:{
        flex:1
    },
    date_text:{
        fontFamily:'Harmattan-Bold',
        color:'white',
        fontSize:20
    },
    main_container: {
        paddingLeft: 30,
        borderWidth: 1,
        backgroundColor: '#252947',
        borderRadius:22,
        flex:5
    },
    content_container:{
        height:'100%',
        width:"100%",
        flexDirection:"column",
    },
    title_view:{
        flex:1.8,
    },
    title_text:{
        fontFamily:'Harmattan-Bold',
        fontSize:16,
        color:'white'
    },
    description_view:{
        flex:3.4, 
        flexDirection:'row',
    },
    description_text:{
        fontFamily:'Harmattan-Regular',
        fontSize:12,
        color:'#F8F5FE', 
        flex:5, 
        lineHeight: 20,
        paddingRight:20
    },
    button_play: {
        flex:1,
        height:'80%',
        borderRadius: 180,
        backgroundColor:'#7A40C6',
        justifyContent:'center',
        alignItems:'center'
        // marginRight:10
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    arrowRight: {
        borderTopWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 14,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: "white",
        borderRadius:5
    },
    attributes_view:{
        flex:1.5, 
        flexDirection:'row',
        marginBottom:10
    },
    flatlist_items:{

    }
})

export default OneDream