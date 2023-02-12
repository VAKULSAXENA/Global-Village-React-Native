import { StyleSheet, Text, View , StatusBar } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../CommonCss/pagecss'
import { formHead, formHead2 } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'


const My_UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Topnavbar navigation={navigation} page={'My_UserProfile'}/>
      <Bottomnavbar navigation={navigation} page={'My_UserProfile'}/>
      <Text style={formHead}>UserProfile</Text>
      
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
  }
})