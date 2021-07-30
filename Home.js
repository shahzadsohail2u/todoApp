import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

const Home = () => {


    return (
        <View style = {{backgroundColor: 'brown', width: "100%", }}>
            <Text style = {styles.content}>
                Todo List
            </Text>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    content:{
        padding: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: "white",
    }
})
