import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';
import ForgotPassword_EnterVerificationCode from './ForgotPassword_EnterVerificationCode';

const ForgotPassword_ChoosePassword = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword_EnterVerificationCode')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead2}>Choose a Strong Password</Text>
    <TextInput placeholder='Enter Your Password' style={formInput} secureTextEntry={true}/>
    <TextInput placeholder='Re-Enter Password' style={formInput} secureTextEntry={true}/>
    
    <Text style={formbtn} onPress={()=>navigation.navigate('ForgotPassword_AccountRecovered')}>Next</Text>
    </View>
  )
}

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})