import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput, ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';
import Signup_EnterVerificationCode from './Signup_EnterVerificationCode';

const Signup_EnterEmail = ({navigation}) => {

  const[email,setEmail]=useState('');
  const[loading,setLoading]=useState(false);

  const handleMail=()=>{
    // setLoading(true);
    if(email==''){
      alert('Please enter email')
    }
    else{
      setLoading(true)
      fetch('http://192.168.29.12:3000/verify',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email:email
        })
      }
      )
      .then(res=>res.json()).then(data=>{
        if(data.error==='Invalid Credentials'){
          alert("Invalid Credentials")
          setLoading(false)
        }
        else if(data.message==="Email sent"){
          setLoading(false)
          alert(data.message);
          navigation.navigate('Signup_EnterVerificationCode',{
            usermail:data.email,
            userVerificationCode:data.verificationCode

          })
        }
      }).catch(err=>console.log(`hello ${err}`))
    }
    
  }
  
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={goback}>
      <AntDesign name="back" size={28} color="black" />
      <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1}/>
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}
      onChangeText={(text)=>{
        setEmail(text);
      }}
      />
      {/* <Text style={formbtn} onPress={()=>navigation.navigate('Signup_EnterVerificationCode')}>Next</Text> */}
     
      {
        loading ? <ActivityIndicator size='large' />: <Text style={formbtn} onPress={()=>handleMail()}>Next</Text>
      }
    </View>
  )
}

export default Signup_EnterEmail

