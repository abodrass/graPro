import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { PageProvider } from "../PageProvider";
import { usePageContext } from "../PageProvider";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './ScreensStyles/logIn';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const SignUp = ({ navigation }) => {


    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
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

    const handelBackClick=()=>{
        navigation.goBack();
    }

    const handelLangugeClick=()=>{
        setLanguage((prev)=>{
            return !prev;
        })
    }
    const handleBlur = () => {
        setIsFocusedEmail(false);
        setIsFocusedPass(false);
    };
    
    return (
        <LinearGradient
        colors={darkMood?['#ffffff','#b8cbd3','#b8cbd3', '#a1bac4','#a1bac4','#8ac3da', '#6e9daf', '#579bb6']:['rgb(43, 39, 39)','rgb(43, 39, 39)','rgb(61, 58, 58)', 'rgb(61, 58, 58)','#6a818a','#8ac3da', '#6e9daf', '#579bb6']}
        start={{ x: 1, y: .5 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
        >
        <KeyboardAvoidingView
        style={darkMood?styles.container:styles.darkContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        <View style={styles.inner}>
            <TouchableOpacity style={styles.darkmodeIcon} onPress={handelBackClick}>
                <AntDesign name="arrowleft" size={24} color={darkMood?"#494949":'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.langu} onPress={handelLangugeClick}>
            <FontAwesome name="language" size={27}  color={darkMood?"#494949":'white'} />
            </TouchableOpacity>
    
            <Image source={darkMood?require("../assets/logo-removebg-preview.png"):require("../assets/logo-removebg-preview2.png")} style={styles.SingUplogo}></Image>
            <View style={styles.box}>
                <Text style={[ styles.logoInText,language && styles.textLeft,darkMood && styles.blackColor]}>{language?"انشاء حسابك":"Sign Up"}</Text>
                <TextInput
                    id='email'
                    placeholder={language?"الاسم الكامل":'full name '}
                    style={[styles.email, isFocusedEmail && styles.focusedInput]}
                    onChange={(email) => setUserName(email)}
                    value={userName}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='email'
                    placeholder={language?"البريد الالكتروني":'email'}
                    style={[styles.email, isFocusedEmail && styles.focusedInput]}
                    onChange={(email) => setUserName(email)}
                    value={userName}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='pass'
                    placeholder={language?"كلمة السر":'password'}
                    style={[styles.email, isFocusedPass && styles.focusedInput]}
                    onChange={(e) => setPassword(e)}
                    onFocus={() => handleFocus('pass')}
                    onBlur={handleBlur}
                    value={password}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='confirmpass'
                    placeholder={language?"تاكيد كلمة السر":'confirm password'}
                    style={[styles.email, isFocusedPass && styles.focusedInput]}
                    onChange={(e) => setPassword(e)}
                    onFocus={() => handleFocus('pass')}
                    onBlur={handleBlur}
                    value={password}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <View style={styles.signContener}>
                <TouchableOpacity style={language?styles.loginLeft:styles.signIn} >
                    <View style={styles.buttonGradient}>
                        <Text style={[styles.signInButtonText]}>{language?"تسجيل الدخول":'Log in'}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[language?styles.needHelpR:styles.needHelp,darkMood&&styles.blackColor]}>{language?"هل تحتاج مساعده":"Need Help?"}</Text>
                </View>
                </View>
                <StatusBar style="light" />
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </LinearGradient>
    )
}

export default SignUp