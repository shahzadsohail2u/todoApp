import Home from './src/components/Home'
import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList,  } from 'react-native'
import TodoLists from './src/components/TodoLists'
import Additem from './src/components/Additem'

export class App extends Component {
  state = {
    Data: [
    {text: 'Buy Beef', key: '1'},
    {text: 'Buy Rice', key: '2'},
    {text: 'Buy Onion', key: '3'},
    {text: 'Buy Oil', key: '4'},
    {text: 'Buy Spice', key: '5'},
    {text: 'Cook Biryani', key: '6'}
    ], text:''
  }
 
  onAddHandler = (key) =>{
     let{ Data } = this.state
     Data.push({text: this.state.text, key: key+1})
     this.setState(Data)
     console.log("ata")
  }

  onChangeText = (val)=>{ 
    let tempData = [...this.state.text]
    tempData.text= val
   this.setState({...tempData})
  }
  

  onPressHandler = (index) =>{
    let{ Data} = this.state
    Data.splice(index, 1)
    this.setState({...Data})
    
    
  }
  
  render() {
    return (
    
      <View style =  {styles.container}>
        <Home/>
        <Additem Add = {this.onAddHandler}
        onChangeText={this.onChangeText}/>
          <View style = {styles.content}>
            <View style = {styles.list}>
             <FlatList
            
             data = {this.state.Data}
             key = {this.state.key}
             renderItem = {({ item,index, text }) =>(<TodoLists index={index} text ={text} item = {item}   Delete = {this.onPressHandler}   />)}/>
             
            </View>
  
          </View>
  
        </View>
    )
  }
  
  }
 
export default App

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: 'white'
  },

  content:{
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
})

