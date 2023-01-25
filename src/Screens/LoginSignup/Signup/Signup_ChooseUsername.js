import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';

const Signup_ChooseUsername = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('Signup_EnterVerificationCode')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead2}>Choose a Username</Text>
    <TextInput placeholder='Enter Username' style={formInput}/>
    <Text style={formbtn} onPress={()=>navigation.navigate('Signup_ChoosePassword')}>Next</Text>
  </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})