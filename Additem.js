import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const Additem = (props) => {
    return (
        <View style = {styles.Additem}>
            <View style = {styles.input}>
            <TextInput
            onChangeText= {(e) => props.onChangeText(e, props.index)}
             />
            </View>
            <View style = {styles.btn}>
             <Button title = 'Add' onPress ={() => props.Add(props.key)}/>
            </View>
        </View>
    )
}

export default Additem

const styles = StyleSheet.create({
    Additem:{
       
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    input:{
        borderWidth: 2,
        borderRadius: 8,
        width: '50%',
        
    },

    btn:{
        width: '30%',
        padding: 10,
        
    }
})
