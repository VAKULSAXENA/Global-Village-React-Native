import { StyleSheet, Text, View , StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../CommonCss/pagecss'
import { formHead, formHead2 } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'


const My_UserProfile = ({navigation}) => {
  const data={
    username:'sanjana',
    followers:1000,
    following:1500,
    description:"I am a software developer",
    profile_image:'https://picsum.photos/500/500',
    posts:[
      {
      id:1,
      post_image:'https://picsum.photos/400/400'
    },
      {
      id:2,
      post_image:'https://picsum.photos/300/300'
    },
      {
      id:3,
      post_image:'https://picsum.photos/250/250'
    },
      {
      id:4,
      post_image:'https://picsum.photos/450/450'
    },
      {
      id:5,
      post_image:'https://picsum.photos/350/350'
    },
      {
      id:6,
      post_image:'https://picsum.photos/350/350'
    },
  ]
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Topnavbar navigation={navigation} page={'My_UserProfile'}/>
      <Bottomnavbar navigation={navigation} page={'My_UserProfile'}/>
      <ScrollView>
        <View style={styles.c1}>
          <Image style={styles.profile_pic} source={{uri:data.profile_image}}/>
          <Text style={styles.txt}>@{data.username}</Text>
          <View style={styles.c11}>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Followers</Text>
            <Text style={styles.txt2}>{data.followers}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Following</Text>
            <Text style={styles.txt2}>{data.following}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Followers</Text>
            <Text style={styles.txt2}>{data.posts.length}</Text>
            </View>
          </View>
          <Text style={styles.desc}>{data.description}</Text>
        </View>
        <View style={styles.c1}>
          <Text style={styles.post}>Your Posts</Text>
          <View style={styles.c12}>
          {
            data.posts.map((post,id)=>{
                return (
                <Image   style={styles.postpic}source={{uri:post.post_image}}/>
                )
            })
          }
          </View>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default My_UserProfile

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    paddingTop:115,
    backgroundColor:"#483D8B"
  },
  profile_pic:{
    width:100,
    height:100,
    borderRadius:55,
    margin:10
  },
  c1:{
    width:'100%',
    alignItems:'center'
  },
  txt:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    borderRadius:10,
    paddingVertical:20,
    paddingHorizontal:10,
  },
  txt1:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
  txt2:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
  c11:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around'
    
  },
  c111:{
    alignItems:'center'
  },
  line:{
    width:1,
    height:30,
    backgroundColor:'white'
  },
  desc:{
    color:'#6A5ACD',
    fontSize:17,
    fontWeight:'bold',
    margin:20
  },
  post:{
    color:'#6A5ACD',
    fontSize:18,
    fontWeight:'bold'
  },
  postpic:{
    width:'31%',
    height:150,
    margin:3,
    
  },
  c12:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly'
  }
 
})