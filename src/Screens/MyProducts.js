import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,StatusBar } from 'react-native'
import React,{useState} from 'react'

const MyProducts = () => {
    let arr=[
        {
        username:'rahul',
        image:'https://picsum.photos/200/300',
        brand:"Puma",
        price:2500,
        qty:0
      },
        {
        username:'sham',
        image:'https://picsum.photos/200/300',
        price:1950,
        qty:0,
        brand:"Puma",
      },
        {
        username:'mohan',
        image:'https://picsum.photos/200/300',
        price:5000,
        qty:0,
        brand:"Puma"
      },
        {
        username:'abhishek',
        image:'https://picsum.photos/200/300',
        price:1500,
        qty:0,
        brand:"Puma"
      },
        {
        username:'vijay',
        image:'https://picsum.photos/200/300',
        price:1900,
        qty:0,
        brand:"Puma",
      },
        {
        username:'sonu',
        image:'https://picsum.photos/200/300',
        price:2200,
        qty:0,
        brand:"Puma"
      },
    ]

   

  return (
    <View style={{flex:1,backgroundColor:'gold'}}>
      
      <View style={styles.head}>
        <Text style={styles.text}>Redux Toolkit Demo</Text>
      </View>
      <ScrollView>
      { 
        arr.map((item,index)=>{
        return(
        <View key={index} style={styles.card}>
            <Image style={styles.img} source={{uri:item.image}}></Image>
            <View>
                <Text style={{fontSize:30,fontWeight:'bold'}}>{item.username}</Text>
                <Text style={{fontSize:25,color:'silver'}}>{item.brand}</Text>
                <Text style={{fontSize:20,color:'violet'}}>{'₹'+item.price}</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:10,height:30,
                width:100,justifyContent:'center',alignItems:'center',marginTop:10}}
                >
                <Text style={{fontSize:15}}>Add to Cart</Text>
                </TouchableOpacity>
                {item.qty==0?null:
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:10,height:30,
                width:70,justifyContent:'center',alignItems:'center',marginTop:10,marginLeft:10}}>
                <Text style={{fontSize:25}}>-</Text>
                </TouchableOpacity>}
                {item.qty==0?null:
                <Text style={{fontSize:25,marginLeft:10,marginTop:10}}>0</Text>}
                {item.qty==0?null:
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:10,height:30,
                width:70,justifyContent:'center',alignItems:'center',marginTop:10,marginLeft:10}}>
                <Text style={{fontSize:25}}>+</Text>
                </TouchableOpacity>}
                </View>
               

            </View>
    
        </View>)
        
      })}
      </ScrollView>
    </View>
  )
}

export default MyProducts

const styles = StyleSheet.create({
    head:{
        backgroundColor:'green',
        width:'100%',
        alignItems:'center',
        height:60,
        flexDirection:'row',
        paddingLeft:20,
        elevation:1

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'silver'
    },
    card:{
        width:'100%',
        height:200,
        backgroundColor:'brown',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'

    },
    img:{
        width:80,
        height:100,
        margin:10,
        borderRadius:10
        
,
    }
})