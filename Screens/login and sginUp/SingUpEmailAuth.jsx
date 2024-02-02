import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { PageProvider } from "../../PageProvider";
import { usePageContext } from "../../PageProvider";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../ScreensStyles/logInAndSignUp';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { url } from '../../APIURLS';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../StorageKey';
import { useNavigation, useRoute } from '@react-navigation/native';
import GenderSelection from '../component/genderSelction';
const SingUpEmailAuth = ({ navigation }) => {
    
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [code,setCode]=useState();
    const [wrongInput,setWrongInput]=useState(false);
    const [date,setDate]=useState( new Date());

    const mainTextColor = "rgba(182, 181, 181, 0.549)";
    const route = useRoute();

    // Access the requestBody parameter from the route
    const requestBody = route.params?.requestBody || {};
    const handleFocus = (inputId) => {

        if (inputId === 'email') {
            setIsFocusedEmail(true);
            setIsFocusedPass(false);
        } else if (inputId === 'pass') {
            setIsFocusedPass(true);
            setIsFocusedEmail(false);
        }
    };

    const handelBackClick=()=>{
        navigation.goBack();
    }

    const handelLangugeClick=async()=>{
        setLanguage((prev)=>{
            return !prev;
        });
        await AsyncStorage.setItem(StorageKey.STORAGE_KEY_LANGUAGE , JSON.stringify(!language));
    }
    const handleBlur = () => {
        setIsFocusedEmail(false);
        setIsFocusedPass(false);
    };

    const formattedDate = new Date(date).toISOString();
    const handelContinuationPress=async()=>{
        if(code==requestBody.authCode){

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'http://localhost:19006',
            };
            const requestBody1 = {
                fullName: requestBody.fullName,
                password: requestBody.password,
                confirmationPassword: requestBody.confirmationPassword,
                email:requestBody.email,
                phoneNumber:requestBody.phoneNumber,
                birthDay: requestBody.birthDay,
                nationalId: 0,
                genderId: requestBody.genderId
            };
            
            try {
                // Display loading indicator or disable the login button here
            
                const response = await axios.post(url.CreateTokenAndSaveUserOnDb, requestBody1, {
                    headers: headers,
                });
            
                if (response.status === 200) {
                    console.log("request good");
                    navigation.navigate('LogIn');
                    
                    return;
                  // Navigate to the next screen or perform other actions
                } else {
                    console.error("Request failed with status:", response.status);
                    setWrongInput(true);
                  // Handle specific error cases based on response status or content
                }
            } catch (error) {
                console.error("Request failed with status:", error);
                setWrongInput(true);
                // Handle unexpected errors
            } finally {
                // Hide loading indicator or enable the login button here
            }
            
            
        }
        else{
            console.log(requestBody);
        }

    }


    const wrongSubmitHandel=()=>{
        return <Text style={language?styles.wrongTextColorSignUpR:styles.wrongTextColorSignUpL}>{language?"معلومات غير صحيحه او مكرره":"the info is not correct or duplicated "}</Text>
    }





    return (
        <KeyboardAvoidingView
        style={darkMood?styles.container:styles.darkContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <LinearGradient
        colors={darkMood?['#ececea',"#5F6B6F"]:["#3E3E3E","#3E3E3E",'#ececea']}
        start={{ x: 1, y: .5 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
        >
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        <Animated.View sharedTransitionTag="tag" style={styles.inner}>
            <TouchableOpacity style={styles.darkmodeIcon} onPress={handelBackClick}>
                <AntDesign name="arrowleft" size={24} color={darkMood?"#494949":'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.langu} onPress={handelLangugeClick}>
            <FontAwesome name="language" size={27}  color={darkMood?"#494949":'white'} />
            </TouchableOpacity>
    
            <Image source={darkMood?require("../../assets/logo-removebg-preview.png"):require("../../assets/logo-removebg-preview2.png")} style={styles.SingUplogo}></Image>
            <View style={styles.signUpbox}>
                
                
                <Text style={[ styles.logoInText,language && styles.textLeft,darkMood && styles.blackColor]}>{language?"انشاء حسابك":"Sign Up"}</Text>
                
                <Text style={{color:!darkMood?"#fff":"#161616",
                fontSize:16,
                marginBottom:10
            }}>{language?"قد تم ارسال رقم التحقق لبريدك الاكتروني الرجاء ادخله هنا ":"An authentication code has been sent to your email. Please enter it here."}</Text>
                <TextInput
                    id='name'
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChangeText={(code) => setCode(code)}
                    value={code}
                    onFocus={() => handleFocus('email')}
                    keyboardType="numeric"
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                
                {wrongInput&&wrongSubmitHandel()}

            
                
                <View style={styles.signContener1}>
                <TouchableOpacity style={language?styles.loginLeft:styles.signIn} onPress={handelContinuationPress} >
                    <View style={styles.buttonGradient}>
                        <Text style={[styles.signInButtonText]}>{language?"متابعة":'continue'}</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
                
                <StatusBar style="light" />
            </Animated.View>
        </TouchableWithoutFeedback>
        </LinearGradient>
    </KeyboardAvoidingView>
    )
}

export default SingUpEmailAuth