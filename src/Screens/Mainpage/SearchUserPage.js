import { StyleSheet, Text, View , StatusBar, TextInput, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../CommonCss/pagecss'
import { formHead, formHead2 } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import UserCard from './../../Cards/UserCard';

const SearchUserPage = ({navigation}) => {
  let data=[
    {
    username:'rahul',
    profile_image:'https://picsum.photos/200/300'
  },
    {
    username:'sham',
    profile_image:'https://picsum.photos/200/300'
  },
    {
    username:'mohan',
    profile_image:'https://picsum.photos/200/300'
  },
    {
    username:'abhishek',
    profile_image:'https://picsum.photos/200/300'
  },
    {
    username:'vijay',
    profile_image:'https://picsum.photos/200/300'
  },
    {
    username:'sonu',
    profile_image:'https://picsum.photos/200/300'
  },
]

const[keyword,setKeyword]=useState('')

  return (
    <View style={styles.container}>
      <StatusBar />
      <Topnavbar navigation={navigation} page={'SearchUserPage'}/>
      <Bottomnavbar navigation={navigation} page={'SearchUserPage'}/>
      <TextInput placeholder='Search by Username' style={styles.searchbar}
      onChangeText={(text)=>setKeyword(text)}></TextInput>
    <ScrollView>
      {
        
        data.filter((user)=>{
            if(keyword==''){
              return null
            }
            else if(user.username.toLowerCase().includes(keyword.toLowerCase())){
              return user
            }
        }).map((item,index)=>{
          
          return <UserCard key={index} data={item}/>
        
        })
      
      }
    </ScrollView>
    </View>
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    paddingTop:115,
    backgroundColor:"#483D8B",
  
    
  },
  searchbar:{
    marginTop:10,
    width:'95%',
    backgroundColor:'white',
    borderRadius:30,
    height:50,
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:17
    

  }
})