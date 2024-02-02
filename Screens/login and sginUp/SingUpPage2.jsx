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
import GenderSelection from '../component/genderSelction';
const SingUpPage2 = ({ navigation }) => {


    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState('');
    const [confirmPassword, setconfirmPassword ]= useState('');
    const [wrongInput,setWrongInput]=useState(false);
    const [date,setDate]=useState( new Date());
    const [showDateBox,setShowDateBox]=useState(false);
    const [phone ,setPhone]=useState("");
    const [selectedGender, setSelectedGender] = useState('');
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
        console.log(userName);
        console.log(password);
        console.log(confirmPassword);
        console.log(email);
        console.log(phone);
        console.log(selectedGender);
        console.log(formattedDate);
        /*if(password!=confirmPassword||userName==""||phone.length>10||phone.length<8||email==""){
            setWrongInput(true);
            return;
        }*/

        const requestBody = {
            fullName: userName,
            password: password,
            confirmationPassword: confirmPassword,
            email:email,
            phoneNumber:phone,
            birthDay: date,
            nationalId: 0,
            genderId: selectedGender
        };
        
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:19006',
        };
        
        try {
            // Display loading indicator or disable the login button here
        
            const response = await axios.post(url.SingUpURL, requestBody, {
                headers: headers,
            });
        
            if (response.status === 200) {
                console.log("request good");
                requestBody.authCode=response.data;
                navigation.navigate('SingUpEmailAuth', { requestBody: requestBody });
                
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
    const handelagePress=()=>{
        setShowDateBox(true);
    }

    const handleForgetPassword = () => {
        // Navigate to the SignUp screen
        console.log('hi');
        navigation.navigate('ForgetPassword');
    };

    const wrongSubmitHandel=()=>{
        return <Text style={language?styles.wrongTextColorSignUpR:styles.wrongTextColorSignUpL}>{language?"معلومات غير صحيحه او مكرره":"the info is not correct or duplicated "}</Text>
    }

    const onTimeChange = (event, selectedDate) => {
         // Call persist to remove the synthetic event from the pool
    
        const {
            type,
            nativeEvent: { timestamp, utcOffset },
        } = event;
    
        // Handle the date change or dismissal here
        if (type === 'set') {
            // User selected a date
            console.log('Selected Date:', selectedDate);
            setDate(selectedDate);  // Assuming setDate is defined elsewhere
            setShowDateBox(false);  // Assuming setShowDateBox is defined elsewhere
            console.log('UTC Offset:', utcOffset);
            event.persist();
        } else if (type === 'dismissed') {
            // User dismissed the picker
            console.log('Picker Dismissed');
            setShowDateBox(false);  // Assuming setShowDateBox is defined elsewhere
            event.persist();
        } else if (type === 'neutralButtonPressed') {
            // This is only available on Android when a neutral button is pressed
            setShowDateBox(false);  // Assuming setShowDateBox is defined elsewhere
            console.log('Neutral Button Pressed');
            event.persist();
        }
    };


    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };
    console.log(date);
    console.log(userName);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);
    console.log(phone);
    console.log(selectedGender);
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


                <TextInput
                    id='phone'
                    placeholder={language?"رقم الهاتف":'phone Number '}
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChangeText={(phone) => setPhone(phone)}
                    value={phone}
                    keyboardType="numeric"
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                
                
                <TouchableOpacity style={language?styles.Leftage:styles.signInage } onPress={handelagePress} >
                    <View style={styles.buttonGradient}>
                        <Text style={[styles.signInButtonText]}>{language?"تاريخ الميلاد":'age'}</Text>
                    </View>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={[styles.up, !language ? styles.Leftgender : styles.signInage] } >
                <GenderSelection selectedGender={selectedGender} onGenderChange={handleGenderChange}></GenderSelection>
                </TouchableOpacity>
                
                
                {wrongInput&&wrongSubmitHandel()}

                {showDateBox&&
                <DateTimePicker
                value={date}
                onChange={onTimeChange}
                ></DateTimePicker>
                }
                
                
                <View style={styles.signContener1}>
                <TouchableOpacity style={language?styles.loginLeft:styles.signIn} onPress={handelContinuationPress} >
                    <View style={styles.buttonGradient}>
                        <Text style={[styles.signInButtonText]}>{language?"متابعة":'continue'}</Text>
                    </View>
                </TouchableOpacity>
                <Text onPress={handleForgetPassword} style={[language?styles.needHelpR:styles.needHelp,!darkMood&&styles.blackColor]}>{language?"هل نسيت كلمة المرور":"forget password?"}</Text>
                </View>
            </View>
                
                <StatusBar style="light" />
            </Animated.View>
        </TouchableWithoutFeedback>
        </LinearGradient>
    </KeyboardAvoidingView>
   
    )
}

export default SingUpPage2