import { StyleSheet, Text, View , StatusBar } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../CommonCss/pagecss'
import { formHead2 } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Mainpage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Topnavbar navigation={navigation} page={'Mainpage'}/>
      <Bottomnavbar navigation={navigation} page={'Mainpage'}/>
      <FollowersRandomPost/>
      
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    paddingTop:115,
    backgroundColor:"#483D8B"
  }
})