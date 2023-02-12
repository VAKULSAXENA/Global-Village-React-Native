import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Post_Big_Card = ({
    postpic,
    profilepic,
    username,
    likes,
    comments
}) => {
    const[isliked,setIsliked] = useState(false)
    const[showcomments,setShowcomments] = useState(false)

  return (
    <View style={styles.container}>
        <View style={styles.c1}>
       <Image source={{uri:profilepic}} style={styles.profilepics}/>     
      <Text style={styles.username}>{username}</Text>
      </View>
      
      <Image source={{uri:postpic}} style={styles.postimage}/>
      <View style={styles.s2}>
        {
            isliked ? <View style={styles.s21}>
            <AntDesign name="heart" size={40} color="pink" onPress={()=>{
                setIsliked(false) 
            }}/>
            <Text style={styles.likes}>{likes.length+1}</Text>
            
            </View>:

            <View style={styles.s21}>
            <AntDesign name="hearto" size={40} color="white" onPress={()=>{
                setIsliked(true)
            }}/>
            <Text style={styles.likes}>{likes.length}</Text>
             
            </View>
        }
        <View style={styles.s22}>
        <FontAwesome name="comment-o" color="white" style={styles.comment} onPress={()=>{
            setShowcomments(!showcomments)
        }}/>
        </View>

      </View>
      {
        showcomments==true &&
        <View style={styles.s3}>
            {
            comments.map((item,index)=>{
                return(
                    <View style={styles.s31} key={item.id}>
                        <Text style={{fontWeight:'bold'}}>{item.username}</Text>
                        <Text style={styles.commentText}>{item.comment}</Text>
                    </View>
                )
            })
        }
        </View>
      }
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container:{
        width:'100%',
        // height:300,
        // borderRadius:10,
        marginVertical:10,
        backgroundColor:'white',
        borderColor:'white',
        borderWidth:1
    
    },
    c1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:3,
        backgroundColor:'black'
    },
    profilepics:{
        width:50,
        height:50,
        borderRadius:10
    },
    username:{
        color:'white',
        fontSize:15,
        marginLeft:10,
        fontWeight:'bold'
    },
    postimage:{
        width:'100%',
        aspectRatio:1     
    },
    s21:{
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center'
    },
    likes:{
        color:'white',
        marginLeft:10,
        fontSize:25
    },
    s2:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:'black',
        padding:5,
        // alignItems:'center'
    },
    comment:{
        color:'white',
        marginLeft:10,
        fontSize:40,
       
    },
    s3:{
        width:'100%',
        backgroundColor:'pink'
    },
    commentText:{
        color:'white',
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold'
       
    },
    s31:{
        flexDirection:'row',
        alignItems:'center'
    }
})