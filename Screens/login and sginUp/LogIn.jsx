import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../ScreensStyles/logInAndSignUp';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import axios from 'react-native-axios';
import { StorageKey } from '../../StorageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../APIURLS';
import * as SecureStore from 'expo-secure-store';
import Nav from '../../Nav';

const isBrowser = typeof window !== 'undefined';
const LogIn=({ navigation })=> {
    const {darkMood,setDarkMood}= usePageContext();
    const {tokenFlag, setTokenFlag}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {token,setToken}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [wrongInput,setWrongInput]=useState(false);
    
    const mainTextColor = "rgba(182, 181, 181, 0.549)";
  
    const handleFocus = (inputId) => {

        if (inputId === 'email') {
            setIsFocusedEmail(true);
            setIsFocusedPass(false);
        } else if (inputId === 'pass') {
            setIsFocusedPass(true);
            setIsFocusedEmail(false);
        }
    };


    
    const handleBlur = () => {
        setIsFocusedEmail(false);
        setIsFocusedPass(false);
    };
    
    const handleLogin = async () => {
      const requestBody = {
        Email: userName,
        Password: password,
      };
    
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      };
    
      try {
        // Display loading indicator or disable the login button here
    
        const response = await axios.post(url.LoginURL, requestBody, {
          headers: headers,
        });
    
        if (response.status === 200) {
          console.log("request good");
          const responseData = response.data;
          
          console.log(responseData)
          
          if(tokenFlag!=true){
          await AsyncStorage.setItem(StorageKey.STORAGE_KEY_TOKEN, JSON.stringify(responseData.token));
          await SecureStore.setItemAsync(StorageKey.STORAGE_KEY_Role,JSON.stringify(responseData.userRole));
          }
          // Store the token securely (e.g., using AsyncStorage)
          setTokenFlag(true);
          return;
          // Navigate to the next screen or perform other actions
        } else {
          console.error("Request failed with status:", response.status);   
          setWrongInput(true);
          // Handle specific error cases based on response status or content
        }
      } catch (error) {
        console.error("An error occurred", error);

        setWrongInput(true);
        // Handle unexpected errors
      } finally {
        // Hide loading indicator or enable the login button here
      }
    };
    
    const handleUserNameChange = (text) => {
      console.log('Username:', text);
      setUserName(text);
    };
  
    const handlePasswordChange = (text) => {
      console.log('Password:', text);
      setPassword(text);
    };
  

    const handleSignUp = () => {
      // Navigate to the SignUp screen
      console.log('hi');
      navigation.navigate('SignUp');
    };


    const handelDarkMoodClick=()=>{
      console.log("hi");
      setDarkMood((prev)=>{
        return !prev;
      });
    }

    const handelLangugeClick=()=>{
      setLanguage((prev)=>{
        return !prev;
      })
    }

    const wrongSubmitHandel=()=>{
      return <Text style={language?styles.wrongTextColorR:styles.wrongTextColorL}>{language?"البريد الاكتروني المستخدم او كلمة المرور غير صحيحه":"The email or password incorrect "}</Text>
  }
    
    return (
      
      

      <LinearGradient
      colors={darkMood?['#ececea',"#5F6B6F"]:["#3E3E3E","#3E3E3E",'#ececea']}
      start={{ x: 1, y: .5 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
      >
      
        <KeyboardAvoidingView
        style={darkMood?styles.container:styles.darkContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 30}
        enabled={Platform.OS === "ios" ? true : false}
        >
    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    
        <Animated.View sharedTransitionTag="tag" style={styles.inner}>
            <TouchableOpacity style={styles.darkmodeIcon} onPress={handelDarkMoodClick}>
            {darkMood?<Ionicons name="ios-moon" size={27} color="#494949" />
            :<Ionicons name="sunny-sharp" size={27} color="white" />
            }
            </TouchableOpacity>
            <TouchableOpacity style={styles.langu} onPress={handelLangugeClick}>
            <FontAwesome name="language" size={27}  color={darkMood?"#494949":'white'} />
            </TouchableOpacity>
            <Image source={darkMood?require("../../assets/logo-removebg-preview.png"):require("../../assets/logo-removebg-preview2.png")} style={styles.logo}></Image>
            <View style={styles.box}>
              <Text style={[ styles.logoInText,language && styles.textLeft,darkMood && styles.blackColor]}>{language?"تسجيل الدخول لحسابك":"Login to your account"}</Text>
              <TextInput
                    id='email'
                    placeholder={language?"البريد الالكتروني":'email'}
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChangeText={handleUserNameChange}
                    value={userName}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
              ></TextInput>
              <TextInput
                    id='pass'
                    placeholder={language?"كلمة السر":'password'}
                    style={[styles.email, isFocusedPass && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                    onFocus={() => handleFocus('pass')}
                    onBlur={handleBlur}
                    value={password}
                    placeholderTextColor={mainTextColor}
              ></TextInput>
              {wrongInput&& wrongSubmitHandel()}
              
              <View style={styles.signContener}>
              <TouchableOpacity style={language?styles.loginLeft:styles.signIn} onPress={handleLogin}>
                  <View style={styles.buttonGradient}>
                    <Text style={[styles.signInButtonText]}>{language?"تسجيل الدخول":'Log in'}</Text>
                  </View>
              </TouchableOpacity>
              <Text style={[language?styles.needHelpR:styles.needHelp,darkMood&&styles.blackColor]}>{language?"هل نسيت كلمة المرور":"forget password?"}</Text>
              </View>
            </View>
              <TouchableOpacity onPress={handleSignUp} style={styles.bottomTextContainer}>
                <Text style={[styles.signUp,language?styles.right25:styles.left25]} >{language?"انشاء حساب جديد":"Create new account"}</Text>
              </TouchableOpacity>

              
                <StatusBar style="light" />
            </Animated.View>
        </TouchableWithoutFeedback>
        
    </KeyboardAvoidingView>
    </LinearGradient>
  
    );
    }
export default LogIn