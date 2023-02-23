import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead3, formInput } from '../../../CommonCss/formcss';
import ForgotPassword_ChoosePassword from './../ForgotPassword/ForgotPassword_ChoosePassword';

const Signup_EnterVerificationCode = ({navigation,route}) => {
  const {usermail,userVerificationCode}=route.params
  console.log(usermail,userVerificationCode);
  let[code,setCode]=useState(null);

  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('Signup_EnterEmail')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    {/* <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text> */}
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead3}>A verification code has been sent to your email</Text>
    <TextInput placeholder='Enter 6-digit code here' style={formInput} onChangeText={(text)=>{
      const num=parseInt(text);
      setCode(num)
    }}/>
    
    {code===userVerificationCode?
     <Text style={formbtn} onPress={()=>navigation.navigate('Signup_ChooseUsername',{
      email:usermail
     })}>Next</Text>: 
     <Text style={{fontSize:18,color:'red'}}>Enter Correct Verification Code to go Next</Text>
    }
    
    
   
  
   
    
  </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})