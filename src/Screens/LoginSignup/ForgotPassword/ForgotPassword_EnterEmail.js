import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';
import ForgotPassword_EnterVerificationCode from './ForgotPassword_EnterVerificationCode';

const ForgotPassword_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead2}>Verify Your Email</Text>
    <TextInput placeholder='Enter Your Email' style={formInput}/>
    <Text style={formbtn} onPress={()=>navigation.navigate('ForgotPassword_EnterVerificationCode')}>Next</Text>
  </View>
)
  
}

export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})