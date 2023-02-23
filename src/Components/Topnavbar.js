import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { icon1, logo2 } from '../CommonCss/pagecss'
import logo from '../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


const Topnavbar = ({navigation,page}) => {
  return (
    <View style={styles.container}>
    <Image source={logo} style={logo2}/>
    {
      page==='Mainpage' &&
    <Ionicons name="chatbubbles" color="black" style={icon1} onPress={()=>navigation.navigate('Allchats')}/>
    }
    {
      page==='My_UserProfile' &&
      <Ionicons name="settings-sharp"style={icon1} color="white" />
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