import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../CommonCss/pagecss'

const Mainpage = ({navigation}) => {
  return (
    <View style={containerFull}>
      <StatusBar/>
      <Text>Mainpage</Text>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({})