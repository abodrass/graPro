import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../ScreensStyles/logInAndSignUp';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { url } from '../../APIURLS';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../StorageKey';
import { useNavigation, useRoute } from '@react-navigation/native';
const ForgetPaawordAuth = ({ navigation }) => {
    
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [code,setCode]=useState('');
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
    const handelContinuationPress=()=>{
        console.log(`what is here${requestBody}`);
        if(code==requestBody.authCode){
            navigation.navigate('RestPassword',{email:requestBody.email});
            
        }
        else{
            console.log(requestBody);
            setWrongInput(true);
        }
    }


    const wrongSubmitHandel=()=>{
        return <Text style={language?styles.wrongTextColorSignUpR:styles.wrongTextColorSignUpL}>{language?"معلومات غير صحيحه او مكرره":"the info is not correct or duplicated "}</Text>
    }





    return (
        <KeyboardAvoidingView
        style={!darkMood?styles.container:styles.darkContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <LinearGradient
        colors={!darkMood?['#ececea',"#5F6B6F"]:["#3E3E3E","#3E3E3E",'#ececea']}
        start={{ x: 1, y: .5 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
        >
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        <Animated.View sharedTransitionTag="tag" style={styles.inner}>
            <TouchableOpacity style={styles.darkmodeIcon} onPress={handelBackClick}>
                <AntDesign name="arrowleft" size={24} color={!darkMood?"#494949":'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.langu} onPress={handelLangugeClick}>
            <FontAwesome name="language" size={27}  color={!darkMood?"#494949":'white'} />
            </TouchableOpacity>
    
            <Image source={!darkMood?require("../../assets/logo-removebg-preview.png"):require("../../assets/logo-removebg-preview2.png")} style={styles.SingUplogo}></Image>
            <View style={styles.signUpbox}>
                
                
                <Text style={[ styles.logoInText,language && styles.textLeft,!darkMood && styles.blackColor]}>{language?"تغير كلمة السر":"reset Password"}</Text>
                
                <Text style={{color:darkMood?"#fff":"#161616",
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

export default ForgetPaawordAuth;