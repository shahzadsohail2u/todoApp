import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodoLists = (props) => {
    console.log(props.index)
    return (
       <TouchableOpacity onPress = {() => props.Delete(props.index)}>
           <Text style = {styles.item}>{props.item.text}</Text>
       </TouchableOpacity>
    )
}

export default TodoLists

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        backgroundColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})
