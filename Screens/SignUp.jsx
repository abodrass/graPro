import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,Picker,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { PageProvider } from "../PageProvider";
import { usePageContext } from "../PageProvider";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './ScreensStyles/logIn';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { url } from '../APIURLS';
import  DateTimePicker  from '@react-native-community/datetimepicker';
const SignUp = ({ navigation }) => {


    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState("");
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

    const handelLangugeClick=()=>{
        setLanguage((prev)=>{
            return !prev;
        })
    }
    const handleBlur = () => {
        setIsFocusedEmail(false);
        setIsFocusedPass(false);
    };
    const handelContinuationPress=async()=>{
        console.log(date);
        if(password!=confirmPassword||userName==""||phone.length>10||phone.length<8||email==""){
            setWrongInput(true);
            return;
        }
        const requestBody = {
            fullName: userName,
            password: password,
            confirmationPassword: confirmPassword,
            email:email,
            phoneNumber: phone,
            age: age,
            "nationalId": 0,
            "genderId": 0
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
                console.log(responseData);
        
                const token = responseData.user;
                AsyncStorage.setItem(STORAGE_KEY_TOKEN, JSON.stringify(token));
                console.log(token);
              // Store the token securely (e.g., using AsyncStorage)
                navigation.navigate('MainAppPage');
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
        

    }
    const handelagePress=()=>{
        setShowDateBox(true);
    }

    const wrongSubmitHandel=()=>{
        return <Text style={language?styles.wrongTextColorR:styles.wrongTextColorL}>{language?"معلومات غير صحيحه او مكرره":"the info is not correct or duplicated "}</Text>
    }

    const onTimeChange=(event,selectedDate)=>{
        
        const {
            type,
            nativeEvent: { timestamp, utcOffset },
        } = event;
        
          // Handle the date change or dismissal here
        if (type === 'set') {
            // User selected a date
            console.log('Selected Date:', date);
            setDate(selectedDate);
            setShowDateBox(false);
            console.log('UTC Offset:', utcOffset);
        } else if (type === 'dismissed') {
            // User dismissed the picker
            console.log('Picker Dismissed');
            setShowDateBox(false);
        } else if (type === 'neutralButtonPressed') {
            // This is only available on Android when a neutral button is pressed
            setShowDateBox(false);
            console.log('Neutral Button Pressed');
        }
    }
    console.log(date);
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
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        <Animated.View sharedTransitionTag="tag" style={styles.inner}>
            <TouchableOpacity style={styles.darkmodeIcon} onPress={handelBackClick}>
                <AntDesign name="arrowleft" size={24} color={darkMood?"#494949":'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.langu} onPress={handelLangugeClick}>
            <FontAwesome name="language" size={27}  color={darkMood?"#494949":'white'} />
            </TouchableOpacity>
    
            <Image source={darkMood?require("../assets/logo-removebg-preview.png"):require("../assets/logo-removebg-preview2.png")} style={styles.SingUplogo}></Image>
            <View style={styles.signUpbox}>
                <Text style={[ styles.logoInText,language && styles.textLeft,darkMood && styles.blackColor]}>{language?"انشاء حسابك":"Sign Up"}</Text>
                <TextInput
                    id='name'
                    placeholder={language?"الاسم الكامل":'full name '}
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChange={(name) => setUserName(name)}
                    value={userName}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='email'
                    placeholder={language?"البريد الالكتروني":'email'}
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChange={(email) => setEmail(email)}
                    value={email}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='pass'
                    placeholder={language?"كلمة السر":'password'}
                    style={[styles.email, isFocusedPass && styles.focusedInput ,wrongInput&&styles.wrongInput]}
                    onChange={(e) => setPassword(e)}
                    onFocus={() => handleFocus('pass')}
                    onBlur={handleBlur}
                    value={password}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='confirmpass'
                    placeholder={language?"تاكيد كلمة السر":'confirm password'}
                    style={[styles.email, isFocusedPass && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChange={(e) => setconfirmPassword(e)}
                    onFocus={() => handleFocus('pass')}
                    onBlur={handleBlur}
                    value={confirmPassword}
                    placeholderTextColor={mainTextColor}
                ></TextInput>
                <TextInput
                    id='phone'
                    placeholder={language?"رقم الهاتف":'phone Number '}
                    style={[styles.email, isFocusedEmail && styles.focusedInput,wrongInput&&styles.wrongInput]}
                    onChange={(phone) => setPhone(phone)}
                    value={userName}
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
                <TouchableOpacity style={[styles.up, !language ? styles.Leftage : styles.signInage] } onPress={handelagePress} >
                    <View style={styles.buttonGradient}>
                        <Text style={[styles.signInButtonText]}>{language?"الجنس":'gender'}</Text>
                        <Picker
                            selectedValue={selectedGender}
                            onValueChange={(itemValue) => setSelectedGender(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
                    </View>
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
                        <Text style={[styles.signInButtonText]}>{language?"متابعة":'continuation'}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[language?styles.needHelpR:styles.needHelp,darkMood&&styles.blackColor]}>{language?"هل نسيت كلمة المرور":"forget password?"}</Text>
                </View>
                </View>
                
                <StatusBar style="light" />
            </Animated.View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </LinearGradient>
    )
}

export default SignUp