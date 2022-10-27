
import React, { Component} from "react";
import Header from "../../Component/Header";
import Footer2 from "../../Component/Footer2";
import {View,Text, TextInput, StyleSheet, FlatList,Image} from 'react-native';
export default class Salescreen extends Component{
  constructor(props)
    {
    super(props)
      this.state = {
    }
  }
  render(){
    const names =[
      {
        name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')}/>,
        heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
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
    <View>
         <Text style={styles.flatlistdata}>{item.name}</Text>
        
    </View>
  )}}
/>
);
}}
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

