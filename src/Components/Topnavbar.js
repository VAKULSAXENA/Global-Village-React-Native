import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { icon1, logo2 } from '../CommonCss/pagecss'
import logo from '../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'

const Topnavbar = ({navigation,page}) => {
  return (
    <View style={styles.container}>
    <Image source={logo} style={logo2}/>
    {
      page==='Mainpage' &&
    <Ionicons name="chatbubbles" size={24} color="black" style={icon1} onPress={()=>navigation.navigate('Allchats')}/>
    }
   
    </View>
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:10,
        position:'absolute',
        top:0,
        zIndex:100,
        backgroundColor:'#111111',
        paddingTop:Constants.statusBarHeight,
  

        
        
    }
})