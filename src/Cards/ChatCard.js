import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatCard = ({item}) => {
    
  return (
    <View style={styles.card}>     
      <Text>{item.username}</Text>
      <Text>{item.message}</Text>

    </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        marginVertical:10
    },
    username:{
        color:'black',
        // fontSize:20
    }
})