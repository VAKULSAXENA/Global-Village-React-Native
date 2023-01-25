import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead3, formInput } from '../../../CommonCss/formcss';


const ForgotPassword_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword_EnterEmail')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead3}>A verification code has been sent to your email</Text>
    <TextInput placeholder='Enter 6-digit code here' style={formInput}/>
    <Text style={formbtn} onPress={()=>navigation.navigate('ForgotPassword_ChoosePassword')}>Next</Text>
  </View>
  )
}

export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})