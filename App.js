import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_EnterEmail from './src/Screens/LoginSignup/Signup/Signup_EnterEmail';
import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername';
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_AccountCreated from './src/Screens/LoginSignup/Signup/Signup_AccountCreated';
import Signup_EnterVerificationCode from './src/Screens/LoginSignup/Signup/Signup_EnterVerificationCode';
import ForgotPassword_EnterEmail from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPassword_ChoosePassword from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecovered from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecovered';
import Mainpage from './src/Screens/Mainpage/Mainpage';
import Allchats from './src/Screens/ChatSection/Allchats';
import NotificationPage from './src/Screens/Mainpage/NotificationPage';
import SearchUserPage from './src/Screens/Mainpage/SearchUserPage';
import My_UserProfile from './src/Screens/Profile/My_UserProfile';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{
      headerShown:false,
      animation:'slide_from_right'
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
      <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
      <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
      <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
      <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />
      <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
      <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />
      <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
      <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />
      <Stack.Screen name="Allchats" component={Allchats} options={{animation:'slide_from_bottom'}} />
      <Stack.Screen name="SearchUserPage" component={SearchUserPage} options={{animation:'slide_from_left'}} />
      <Stack.Screen name="NotificationPage" component={NotificationPage} options={{animation:'slide_from_left'}} />
      <Stack.Screen name="My_UserProfile" component={My_UserProfile} options={{animation:'slide_from_left'}} />
      <Stack.Screen name="Mainpage" component={Mainpage} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
