import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ForgotPassword_AccountRecovered = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword_ChoosePassword')} style={goback}>
    <AntDesign name="back" size={28} color="black" />
    <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    <Image source={logo} style={logo1}/>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <MaterialCommunityIcons name="check-decagram" size={40} color="#99B83C" />
    <Text style={formHead2}> Account Recovered Successfully</Text>
    </View>
    <Text style={formbtn} onPress={()=>navigation.navigate('Mainpage')}>Let's start</Text>
    </View>
  )
}

export default ForgotPassword_AccountRecovered

const styles = StyleSheet.create({})