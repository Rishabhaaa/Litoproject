import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,Modal,FlatList,ScrollView,SafeAreaView,Dimensions,StyleSheet,TextInput,Linking} from 'react-native';
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Footer2 from "../../Component/Footer2";
import Whatsapp from "../../Component/Whatsapp";
import Rentscreen from '../RENT/Rentscreen';
import VideoPlayer from 'react-native-video-player';
// import YoutubePlayer from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Listshow from "./Copmonents/ListShow";
import TopBrands from './Copmonents/TopBrands'
import { color } from "react-native-reanimated";
 
export default class Home extends Component{
  constructor(props){
      super(props)
      this.state={
        maxWidth: Dimensions.get('window').width /4,
        flex:0.5,
        highLight:'',
        index_count:3,
        demo:'Click me',
        checkbox:false,
        popupVisible:false,
        data1:[{
            name:'https://file-examples.com/storage/feb2e515cc6339d7ba1ffcd/2017/04/file_example_MP4_480_1_5MG.mp4'
        }],
        data:[
            {
                id:1,
                image:require('../../Images/p4.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 12,300.00",
                Price:" 12,200.00",
                label:"17%",

            },

            {
                id:2,
                image:require('../../Images/p5.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 13,300.00",
                Price:" 12,200.00",
                label:"15%",

               
            },
            {
                id:3,
                image:require('../../Images/yellow_bag.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"Good Condition",
                ActuallPrice: " 199,300.00",
                Price:" 12,200.00",
                label:"8%",

               
            },
            {
                id:4,
                image:require('../../Images/p9.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"Excellent Condition",
                ActuallPrice: " 92,300.00",
                Price:" 12,200.00",
                label:"1%",


            },

            {
                id:5,
                image:require('../../Images/p10.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 72,300.00",
                Price:" 156,200.00",
                label:"18%",

            },
            {
                id:6,
                image:require('../../Images/p13.png'),
                image1:require('../../Images/p4.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 22,300.00",
                Price:" 14,200.00",
                label:"19%",

               
            },
            {
                id:7,
                image:require('../../Images/women_bag1.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 67,300.00",
                Price:" 1,200.00",
                label:"45%",

               
            },
            {
                id:8,
                image:require('../../Images/p5.png'),
                image1:require('../../Images/p4.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 16,800.00",
                Price:" 32,200.00",
                label:"6%",

               
            },
            {
                id:9,
                image:require('../../Images/p4.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 62,300.00",
                Price:" 12,200.00",
                label:"45%",

               
            },
            {
                id:10,
                image:require('../../Images/p10.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 52,400.00",
                Price:" 62,230.00",
                label:"4%",

               
            },
            {
                id:11,
                image:require('../../Images/p7.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 112,300.00",
                Price:" 10,280.00",
                label:"19%",

               
            },
            {
                id:12,
                image:require('../../Images/p13.png'),
                image1:require('../../Images/p4.png'),
                heading:"Tory Burch Reversible Logo Waist Belt",
                Size:"M",
                Tags:"New With Tags",
                ActuallPrice: " 10,590.00",
                Price:" 12,290.00",
                label:"60%",

               
            },
         
        ],
        branddata:[
            {
                imagesrc:require('../../Images/logo1.png'),
                imagesrc1:require('../../Images/logo_2.png'),
                imagesrc3:require('../../Images/logo_3.png'),
                imagesrc4:require('../../Images/logo_4.png'),
                id:1
            },
        ],
        // firtname:"",
        // lastname:"",

      }
  }  
  funcall(firtname){
    // alert("function calll")
    let a = this.state.firtname
    return a

  }
  render(){
      return(
            <SafeAreaView>
                <ScrollView>
                  <Header  onPress={()=> this.props.navigation.openDrawer()} />
                 <View style={styles.mainView}>
                 <Text style={styles.mainViewText}>Say YES to Secondhand!</Text>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Shop')}
                    style={styles.mainViewbtn}><Text style={{color:"#fff",textAlign:"center",fontWeight:"bold",fontSize:16,letterSpacing:3}}>SHOP NOW</Text></TouchableOpacity>
                    <Image source={require('../../Images/women_bag.png')} style={styles.mainViewimg}/>
                 </View>
               {/* Sir ka task start */}
               {/* <View style={{borderWidth:2}}>
                            <TextInput 
                            onChangeText={(text)=>this.setState({firtname:text})}
                                placeholder="Enter your name"></TextInput>
                            <TextInput 
                                onChangeText={(text)=>this.setState({lastname:text})}
                                placeholder="Enter your lastname"></TextInput>
                            <TouchableOpacity 
                                 onPress={()=>console.log(this.funcall())}
                                style={{backgroundColor:"blue",padding:12}}><Text style={{color:"#fff"}}>Submit</Text></TouchableOpacity> 
                 </View> */}
                                {/* Sir ka task end */}


                 <View style={styles.secondview}>
                      <Text  style={styles.secondviewtxt}>Discover Authentic Luxury </Text>
                      <Text style={styles.secondviewtxt1}>Explore Our Collection of Authentic Preloved Luxury</Text>
                    <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#292929",fontWeight:"400"}}>Bags, Apparel, Shoes, Accessories & More.</Text>
                 </View>

                 <View style={{flexDirection:"row",justifyContent:"center",justifyContent:'space-between',alignItems:'center',alignSelf:'center',marginTop:20}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <TouchableOpacity  
                            onPress={()=>this.props.navigation.navigate('Shop')}
                            style={{backgroundColor:"#000",padding:10,width:"40%"}}><Text style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>BUY</Text></TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Rentscreen')}
                        style={{backgroundColor:"#000",padding:10,paddingLeft:49,paddingRight:49}}><Text style={{color:"#fff",fontWeight:"bold",marginLeft:20}}>RENT</Text></TouchableOpacity>
                    </View>
                 </View>

                          <TouchableOpacity   
                          onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}}  
                          style={{backgroundColor:"#000",padding:10,width:"35%",alignSelf:"center",marginTop:30,marginBottom:20}}><Text style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>SELL</Text></TouchableOpacity>
                    
                <View style={{alignItems:"center",marginTop:20}}>
                      <Text  style={{fontSize:25,color:"#000"}}>New Arrivals</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Choose From Hundreds of New Arrivals Everyday.</Text>
                 </View>               

                 {/* <Listshow data={this.state.data} onPress={(val)=>console.log('select item',val)} /> */}
                 
                 <Listshow data={this.state.data} onPress={(val)=>this.props.navigation.navigate('Itemdata',{imteData:val})} />

                 {/* Top Brand start */}

                 <View style={{alignItems:"center",marginTop:20}}>
                      <Text  style={{fontSize:25,color:"#000"}}>Top Brands</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Discover All Your Favourite Luxury Brands Under One Roof</Text>
                 </View>
                 <TopBrands topData={this.state.branddata}/>
                 
                 {/* <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around",margin:6}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#959595",margin:6}}><Image source={require('../../Images/crop1.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#000",margin:6}}><Image source={require('../../Images/crop2.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                    </View>
                 </View>   */}



                                  {/* Top Brand end */}
                 {/* Top Brand flatlist start */}


                {/* Auction code start   */}

                <View style={{alignItems:"center",marginTop:20}}>
                      <Text  style={{fontSize:25,color:"#000"}}>Auction</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#000",fontWeight:"400",lineHeight: 30}}>Bid & Get your favourite product at 60% Off</Text>
                 </View>
                 <Image source={require('../../Images/Auction-Banner.jpg')} style={{width:'100%',height:380,marginTop:20}}/>

                {/* Auction code end */}

                 {/* Authenticity  code start   */}

                 <View style={{alignItems:"center",marginTop:30}}>
                      <Text  style={{fontSize:25,color:"#000"}}>Authenticity Guaranteed</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#000",fontWeight:"400",lineHeight: 30}}>100% Authentic or Money Back!</Text>
                 </View>
                 <TouchableOpacity style={{backgroundColor:"#2b2b2b",padding:16,width:"50%",alignSelf:"center",marginTop:30}}><Text style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>Read More</Text></TouchableOpacity>

                {/* Authenticity code end */}
               

                {/* Ziniosa  code start   */}

                <View style={{alignItems:"center",marginTop:30}}>
                      <Text  style={{fontSize:25,color:"#000"}}>Lito X Influencers</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#000",fontWeight:"400",lineHeight: 30}}>See Your Favourite Influencers Promote Pre-loved Fashion</Text>
                 </View>

                {/* Ziniosa code end */}
              <FlatList
                    data={[1,2,3]}
                    renderItem={({item})=>
                    <View>
                        <VideoPlayer
                        video={{ uri: 'https://file-examples.com/storage/feb2e515cc6339d7ba1ffcd/2017/04/file_example_MP4_480_1_5MG.mp4' }}
                        //autoplay
                        defaultMuted={true}
                        videoWidth={1600}
                        videoHeight={1000}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        endThumbnail={require('../../Images/Auction-Banner.jpg')}  // VIDEO END HONE PR YE IMAGE SHOW HOGI
                        showDuration={true}
                        // controlsTimeout={2000} // 2 sec k liye sickbar visible hogi yha pr
                        disableControlsAutoHide={true} // sickbar kbhi disable nhi ho uske liye
                        //defaultMuted={true} //video jb play hogi to wo muted form m play hogi usko hum unmuted bhi kr skte h 
                        disableSeek={true} // jo red line ka sickbar aa rha h use hi disable krna hai uske liye
                        pauseOnPress={true} 
                    />   

                    </View>
                
                }
                    />
                 {/* RENT NOW IMAGE */}

                        <View style={{marginLeft:30,marginRight:30}}>
                        <Image source={require('../../Images/Feed-Ads-6.jpg')} style={{width:'100%',height:380,marginTop:30,resizeMode:"contain"}}/>
                        </View>

                   {/* We’ve Made a Buzz! start */}

                <View style={{alignItems:"center",marginTop:20}}>
                      <Text  style={{fontSize:25,color:"#000"}}>{"We've Made a Buzz!"}</Text>
                      <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Discover All Your Favourite Luxury Brands Under One Roof</Text>
                 </View>

                 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1,marginRight:30}}><Image source={require('../../Images/logo1.png')} style={{width:120,height:70}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1}}><Image source={require('../../Images/logo_2.png')} style={{width:120,height:70}}/></TouchableOpacity>
                 </View>
                 </View>  
                 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1,marginRight:30}}><Image source={require('../../Images/logo_3.png')} style={{width:120,height:70}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1}}><Image source={require('../../Images/logo_4.png')} style={{width:120,height:70}}/></TouchableOpacity>
                    </View>
                 </View>  
                 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around",margin:6}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity 
                                onPress={()=>{}}
                                style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#959595",margin:6}}><Image source={require('../../Images/crop1.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#000",margin:6}}><Image source={require('../../Images/crop2.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                    </View>
                 </View>  
                                  {/* We’ve Made a Buzz! end */}


                                  {/* community code start */}

                   <View style={{alignItems:"center",marginTop:20}}>
                        <Text  style={{fontSize:25,color:"#000"}}>From Our Community</Text>
                        <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Our Community Loves & Trusts Us!</Text>
                        <Image source={require('../../Images/testimonial-1.jpg')} style={{borderRadius:400/1,width:200,height:200,marginTop:30}}/>
                        <Text style={{fontSize:18,color:"#000",marginTop:30}}>No more handbag woes,Subscribe!</Text>
                        <Text style={{fontSize:18,color:"#000"}}>Rent!Falunt</Text>
                        <Text style={{fontSize:19,color:"#000",marginTop:12}}>Utsavi Sharma</Text>
                        <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Robes & Drobes</Text>
                 </View>
                 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around",margin:6}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#959595",margin:6}}><Image source={require('../../Images/crop1.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#000",margin:6}}><Image source={require('../../Images/crop2.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                 </View>
                 </View>  
                                  {/* community code end */}


                                  {/* Sign up 1500 offf code start */}

                 <View style={{alignItems:"center",marginTop:20}}>
                        <Text  style={{fontSize:25,color:"#000"}}>Sign Up & Get Rs. 1500 Off!</Text>
                        <Text style={{textAlign:"center",fontSize:15,marginLeft:12,color:"#807b80",fontWeight:"400",lineHeight: 30}}>Sign Up for our Newsletter and get Rs. 1500 Off your Next Purchase.</Text>
                </View>
                 <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:30,marginBottom:30}}>
                        <TouchableOpacity><Text style={{borderBottomWidth:1,borderBottomColor:"#000",color:"#000",fontWeight:"bold"}}>SCHEDULE</Text></TouchableOpacity>
                        <TextInput placeholder="Enter Your Email Address" style={{borderBottomWidth:1,borderBottomColor:"#000"}}></TextInput>
                        <TouchableOpacity><Text style={{borderBottomWidth:1,borderBottomColor:"#000",color:"#000",fontWeight:"bold"}}>SUBSCRIBE</Text></TouchableOpacity>
                </View>
                <View style={{borderBottomWidth:1,borderBottomColor:"#e5e5e5"}}></View>

                                 {/* Sign up 1500 offf code end */}

                                    {/* Footer start */}
                                      <Footer/>
                                      <Footer2/>
                                     
                                
              </ScrollView>    
                                     {/* <View style={{marginTop:windowHeight-120,position:'absolute',alignSelf:'flex-end'}}>
                                        <TouchableOpacity><Image source={require('../../Images/whatsapp.png')} style={{width:80,height:80}}/></TouchableOpacity>
                                    </View> */}
                                    <Whatsapp onPress={()=> this.setState({popupVisible:!this.state.popupVisible})}/>


                                    <Modal visible={this.state.popupVisible}
                                        animationType="slide"
                                        transparent={true}
                                    >
<View style={styles.centeredView}>
    <View style={styles.modalView}>
    <Text style={{fontWeight:'bold',justifyContent:'flex-start',fontSize:35,color:'black'}}>Welcome to Lito!</Text>
    <Text style={{color:'black'}}> How can i help you today ?</Text>


 <View style={{flexDirection:'row',backgroundColor:'#25D366',borderRadius:20,marginTop:15}}>           
 <View style={{width:'40%',height:30}}>
<TouchableOpacity onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}}><Image source={require('../../Images/whatsapp.png')} style={{width:20,height:20,marginTop:7,marginLeft:80}} />
</TouchableOpacity>
</View>

<View> 
<TouchableOpacity onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}}>
<Text style={{color:'white',fontSize:10,marginRight:80,fontSize:15,marginTop:5}}>START CHAT</Text>
</TouchableOpacity>
</View>

</View>




 <Text style={{marginTop:10}}>Powered by interakt.shop</Text>

            </View>

          </View>
        </Modal>
          
            </SafeAreaView>
            
      )
  }
}

const styles = StyleSheet.create({
    mainView:({backgroundColor:"#f5e1d1",height:560}),
    mainViewText:({fontWeight:"900",color:"#000",fontSize:45,textAlign:"center"}),
    mainViewbtn:({backgroundColor:"#000",padding:7,width:"40%",alignSelf:"center",marginTop:30}),
    mainViewimg:({marginTop:30,width:"75%",height:300}),
    secondview:({alignItems:"center",marginTop:20}),
    secondviewtxt:({fontSize:25,color:"#000"}),
    secondviewtxt1:({textAlign:"center",fontSize:15,marginLeft:12,color:"#292929",fontWeight:"400",lineHeight: 30}),
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22,
        color:'red',
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },



})

