import { StyleSheet, Text, View,TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { containerFull, goback, icon1 } from '../../CommonCss/pagecss'
import { formHead2 } from '../../CommonCss/formcss'
import Constants from 'expo-constants'
import ChatCard from '../../Cards/ChatCard';

const Allchats = ({navigation}) => {
  const chat=[{
    username:'Arun',
    message:'hello'
  },
  {
    username:'Sonu',
    message:'hello'
  },
  {
    username:'Rahul',
    message:'hello'
  }
]

  const[keyword,setKeyword]=useState('')
  return (
    <ScrollView style={styles.container}>
   
    <AntDesign name="back"  style={icon1} onPress={()=>navigation.navigate('Mainpage')}  />
   
    
    <View style={styles.c1}>
    <Text style={formHead2}>All Chats</Text>
    <TextInput placeholder='Search' style={styles.seachbar} onChangeText={(text)=>{
        setKeyword(text)
    }}></TextInput>
   
    </View>
    <View style={styles.c2}>
    {
      chat.filter((item)=>{
        if(keyword=='') {
          return item
        }
        else if(
          item.username.toLowerCase().includes(keyword.toLowerCase())
        ) {
          return item
        }
      }).map((item,id)=>{
        return <ChatCard key={id} item={item}/>
      })
    }
    </View>
    </ScrollView>
  )
}

export default Allchats

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#009B77',
        paddingTop:Constants.statusBarHeight,
        
    },
 
    seachbar:{
        marginTop:10,
        width:'95%',
        backgroundColor:'white',
        borderRadius:30,
        height:50,
        paddingVertical:10,
        paddingHorizontal:20,
        fontSize:17
    },
    c1:{
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:40
    },
    c2:{
      width:'100%',
      padding:10,
      // backgroundColor:'black'
    }
})