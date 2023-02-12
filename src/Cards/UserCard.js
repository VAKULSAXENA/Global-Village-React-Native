import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const UserCard = ({data}) => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
       <Image source={{uri:data.profile_image}} style={styles.profilepics}/>
        <Text style={{fontWeight:'bold',fontSize:15}}>{data.username}</Text>
        </View>
      
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        backgroundColor:'#6A5ACD',
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'
        
    },
    card:{
        flexDirection:'row',
        alignItems:'center'
    },
    profilepics:{
        width:50,
        height:50,
        borderRadius:10,
        marginHorizontal:5,
        marginVertical:5
    },
})