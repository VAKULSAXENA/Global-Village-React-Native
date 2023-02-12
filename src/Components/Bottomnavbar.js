import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/pagecss';

const Bottomnavbar = ({navigation,page}) => {
  
  return (
    <View style={styles.container}>
    {
      page==='Mainpage' ? <Entypo name="home" color="black"  style={styles.activeicons1}
      onPress={()=>navigation.navigate('Mainpage')}
      />:<Entypo name="home"  color="black"  style={icon1}
      onPress={()=>navigation.navigate('Mainpage')}
      />
    }
   {
    page==='SearchUserPage' ?  <AntDesign name="search1" color="black"  style={styles.activeicons1}
    onPress={()=>navigation.navigate('SearchUserPage')}
   />: <AntDesign name="search1" size={24} color="black"  style={icon1}
   onPress={()=>navigation.navigate('SearchUserPage')}
  />
   }
    {
      page==="NotificationPage" ? <Ionicons name="ios-heart-sharp" color="black"  style={styles.activeicons1}
      onPress={()=>navigation.navigate('NotificationPage')}
     />:<Ionicons name="ios-heart-sharp"  color="black"  style={icon1}
     onPress={()=>navigation.navigate('NotificationPage')}
    />
    }
    {
      page==="My_UserProfile" ? <FontAwesome name="user-circle" color="black"  style={styles.activeicons1}
      onPress={()=>navigation.navigate('My_UserProfile')}
     />:<FontAwesome name="user-circle"  color="black"  style={icon1}
     onPress={()=>navigation.navigate('My_UserProfile')}
    />
    }
    
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#111111',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        paddingVertical:10,
        alignItems:'center'
      },
     activeicons1:{
      backgroundColor:'white',
      borderRadius:50,
      fontSize:50,  
      
     } 
})