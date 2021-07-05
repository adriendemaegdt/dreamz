import React from 'react'
import {FlatList, Text, StyleSheet, View, Button, TextInput } from 'react-native'
import films from '../helpers/filmData'
import FilmItem from './filmItem'
class Search extends React.Component{
    render() {
        return (
            <View style = { styles.view} >
                <TextInput placeholder = 'Quel est votre état ?' style= {styles.textInput} />
                <Button title = 'RechEEECH' onPress={ () => {}} style = {styles.button} />
                <FlatList 
                    data = {films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem = {({item}) => <FilmItem film = {item} /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 100,
        flex: 3,
        justifyContent: 'center',
        alignItems:'center'
    },

    textInput: {
        backgroundColor: 'purple',
        borderWidth : 1, 
        marginLeft: 10,
        marginRight: 10,
        width: 200
    },
    button: {
        height: 50,
        width: 300

    }
})
export default Search 