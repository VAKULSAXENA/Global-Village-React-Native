import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput, ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';

const Signup_ChooseUsername = ({navigation,route}) => {

  const {email}=route.params
  const[username,setUsername]=useState('')
  const[loading,setLoading]=useState(false)

  const handleUsername=()=>{
    if(username==''){
      alert('Please enter username')
    }
    else{
      setLoading(true)
      fetch('http://192.168.29.12:3000/changeusername',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username:username,
          email:email
        })
      }
      )
      .then(res=>res.json()).then((data)=>{
        if(data.message=='Username Available'){
          navigation.navigate('Signup_ChoosePassword',{username:username,email:email})
        }
        else{
          setLoading(false)
          alert('Username not Available')
          
        }
      })

    }
    

  }

  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('Signup_EnterEmail')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <Text style={formHead2}>Choose a Username</Text>
    <TextInput placeholder='Enter Username' style={formInput} onChangeText={(text)=>setUsername(text)}/>
    {
      loading?<ActivityIndicator/>:<Text style={formbtn} onPress={handleUsername}>Next</Text>
   }
    
  </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})