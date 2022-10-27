import React, { Component} from "react";
import Header from "../../Component/Header";
import Footer2 from "../../Component/Footer2";
 import Offerheader from "../../Component/Offerheader";
import {View,Text, TextInput, StyleSheet, FlatList,Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
export default class Brandscreen extends Component{
  constructor(props)
    {
    super(props)
      this.state = {
    }
  }
  render(){
    const names =[
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b4.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />
      },   {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b7.png')} />
      },   {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
      },
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b9.png')} />
      },   {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b10.png')} />
      },   {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b11.png')} />
      },   {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b12.png')} />
      },
      ]
    return(
        
<FlatList
// horizontal
showsHorizontalScrollIndicator={false}
numColumns={2}
// inverted
 data={names}
 renderItem = {({item}) =>{
  // console.log("Element data",item)
  // horizontal
  return(
    
    <SafeAreaView>
        <ScrollView>  
                      
        <View>
         <Text style={styles.flatlistdata}>{item.name}</Text>
    </View>
        </ScrollView>
    </SafeAreaView>
   
  )}}
/>
);}}
const styles = StyleSheet.create({
  flatlistdata:{
    fontSize:20,
    padding:60,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:'silver',
    // width:"70%",
    alignSelf:"center",
    margin:12,
    textAlign:"center",
    color:"#fff"
  }
})