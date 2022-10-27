import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,Linking,Dimensions,Alert,Modal} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Whatsapp extends Component{
  constructor(props){
      super(props)
      this.state={
        visible:true
      }
  }


//   createThreeButtonAlert = () =>
//     Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Ask me later",
//         }
      
  
  render(){
      return(
                     <View style={{marginTop:windowHeight-120,position:'absolute',alignSelf:'flex-end'}}>
                         <TouchableOpacity onPress= {()=>this.props.onPress()}>
                         {/* <TouchableOpacity onPress= {()=>this.props.navigation.navigate('Shop')}> */}

                        <Image source={require('../Images/whatsapp.png')} style={{width:60,height:60}}/></TouchableOpacity>
                    </View>
                             
            
      )
  }
}