import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput, ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';

const Signup_ChoosePassword = ({navigation,route}) => {
const{username,email}=route.params
const[password,setpassword]=useState('')
const[confirmPassword,setConfirmPassword]=useState('')
const[loading,setLoading]=useState(false)

const handlePassword=()=>{
 if(password===confirmPassword && password!=''&& confirmPassword!=''){
  setLoading(true);
  fetch('http://192.168.29.12:3000/signup',{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      username:username,
      email:email,
      password:password
    })
  }
  )
  .then(res=>res.json()).then(data=>{
    if(data.error==='User Not Registered'){
      alert("Registration not Successfull, Please Try Again")
      setLoading(false)
    }
    else if(data.message==="User Registered Successfully"){
      setLoading(false)
      alert(data.message);
      navigation.navigate('Signup_AccountCreated');
      // navigation.navigate('Signup_EnterVerificationCode',{
      //   usermail:data.email,
      //   userVerificationCode:data.verificationCode

      // })
    }
  }).catch(err=>console.log(`hello ${err}`))
}
 }


  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('Signup_ChooseUsername')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead2}>Choose a Strong Password</Text>
    <TextInput placeholder='Enter Your Password' style={formInput} secureTextEntry={true} 
    onChangeText={(text)=>setpassword(text)}/>
    <TextInput placeholder='Re-Enter Password' style={formInput} secureTextEntry={true}
    onChangeText={(text)=>setConfirmPassword(text)}/>
    {loading?<ActivityIndicator/>:<Text style={formbtn} onPress={handlePassword}>Next</Text>}
    
    
  </View>
  )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})