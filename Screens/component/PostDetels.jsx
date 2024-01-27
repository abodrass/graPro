import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../PageProvider';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { url } from '../../APIURLS';
import { styles } from '../mainApp/Dashbord/patientPost/postPick';
import Posts from './posts';






const PostDetels = ({  navigation ,route  }) => {
    const { props } = route.params;
    const dateObject = new Date(props.date);
    const {darkMood}=usePageContext();
    const {language}=usePageContext();
    const {token}=usePageContext();
    const{changeAprvelApp,setchangeAprvelApp}=usePageContext();
    const handelBackClick=()=>{
        navigation.navigate('Aprovel')
    }
    function hasArabicCharacters(str) {
        console.log("arbic ch")
        // Arabic Unicode range
        const arabicRegex = /[\u0600-\u06FF]/;
        // English Unicode range
        const englishRegex = /[a-zA-Z]/;
        // Check if the string contains Arabic or English characters
        return arabicRegex.test(str) ;
    }
    const imageShow=()=>{
        if(props.type!=true){
            return <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl}` }} style={{width:"100%",height:"100%"}}></Image>
        }

        console.log(props.imageUrl.length);
        if(props.imageUrl.length==0){
            return
        }
        if(props.imageUrl.length==1){ 
            return(<Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[0].imageData}`  }}  style={{ width: 370, height: 320 }} />);
        }
        else if(props.imageUrl.length==2){
            return(
                <View style={{flexDirection:'row'}}>
                    <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[0].imageData}` }} style={{ width: 185, height: 320 }} />
                    <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[1].imageData}` }} style={{ width: 185, height: 320 }} />
                </View>
            )
        }
        else if(props.imageUrl.length==3){
            return(
                <View style={{flexDirection:'row'}}>
                    <View>
                    <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[0].imageData}` }} style={{ width: 185, height: 160 }} />
                    <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[1].imageData}` }} style={{ width: 185, height: 160 }} />
                    </View>
                    <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[2].imageData}` }} style={{ width: 185, height: 320 }} />
                </View>
            )
        }
        else if(props.imageUrl.length==4){
            return(
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[0].imageData}` }} style={{ width: 185, height: 160}} />
                        <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[1].imageData}` }} style={{ width: 185, height: 160}} />
                    </View>
                    <View>
                        <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[2].imageData}` }} style={{ width: 185, height: 160}} />
                        <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl[3].imageData}` }} style={{ width: 185, height: 160}} />
                    </View>
                </View>
            )
        }
        
}


    const handelAcceptPress= async()=>{
        console.log("Bearer "+token.replace(/"/g, ''));
        // Your asynchronous code here
        console.log("Bearer "+token.replace(/"/g, ''));
        console.log(props.id);
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': "Bearer " + token.replace(/"/g, ''),
        };
            try {
                // Display loading indicator or disable the login button here
                const response = await axios.post(
                `${url.AppointmentBookedAccepted}?appointmentBookedId=${props.id.toString()}`,
                {}, // empty request body, modify this if you need to send data
            {
                    headers: headers,
            }
            );
            if (response.status === 200) {
                setchangeAprvelApp((prev)=>{return !prev})
                navigation.navigate("Aprovel");
                return;
              // Navigate to the next screen or perform other actions
            } else {
                console.error("delete failed with status:", response);
                // Handle specific error cases based on response status or content
            }
            } catch (error) {
                console.error("An error occurred", error);
                // Handle unexpected errors
            } finally {
            // Hide loading indicator or enable the login button here
            }
        }
    
    
    const  handelRejectPress= async()=>{
        console.log("Bearer "+token.replace(/"/g, ''));
                // Your asynchronous code here
                console.log("Bearer "+token.replace(/"/g, ''));
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer "+token.replace(/"/g, ''),
                };
                try {
                  // Display loading indicator or disable the login button here
                    const response = await axios.delete(url.AppointmentBookedRejected+`?appointmentBookedId=${props.id}`, {
                    headers: headers,
                    });
                if (response.status === 200) {
                    setchangeAprvelApp((prev)=>{return !prev})
                    navigation.navigate("Aprovel");
                    return;
                    // Navigate to the next screen or perform other actions
                } else {
                    console.error("delet faild with status:", response);   
                    
                    // Handle specific error cases based on response status or content
                }
                } catch (error) {
                    console.error("An error occurred", error);
                  // Handle unexpected errors
                } finally {
                  // Hide loading indicator or enable the login button here
                }
    }

    const handelMessengePress=()=>{
        return
    }



    return (
        <SafeAreaView style={darkMood?styles.darkContainer:styles.container} >

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 30}
            enabled={Platform.OS === "ios" ? true : false}
            style={styles.allview}
        >
        <View style={styles.rowv}>
        
        <TouchableOpacity onPress={handelBackClick}>
            <Feather name="x" size={27} color={darkMood?"white":"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postbo} >
            <Text style={styles.PostInButtonText}>{language?"Book":"احجز"}</Text>
        </TouchableOpacity>
        </View>
    
            <View style={styles.viewDes}>
            <Image source={require("../../assets/585e4beacb11b227491c3399.png")} style={!props.isImageE?styles.profilePic:styles.profilePic1} ></Image>  
            <Text style={!darkMood?styles.patientName:styles.patientNameDark}>  
                {props.patientUser.patientName} 
            </Text>

            <Text style={!hasArabicCharacters(props.des)?darkMood?styles.desDetels:styles.DarkDesDetels:
                darkMood?styles.ArdesDetels:styles.ArDarkDesDetels}>  
                {props.des.substring(0, 200)} 
            </Text>
            </View>


        


    


        
        <View style={styles.photo} >   
            { 
            imageShow()
            }
        </View>

        <View style={props.isImageE?styles.postinfoAprovel:styles.postinfoNoImgAprovel}>
                    <Text style={!darkMood?styles.genderAprovel:styles.genderDarkAprovel}>{language?"الجنس :":"gender :"}{props.patientUser.gender}</Text>
                    <Text style={!darkMood?styles.genderAprovel:styles.genderDarkAprovel}>{language?"رقم الهاتف :":"phone :"}{props.patientUser.phoneNumber}</Text>
                    <Text style={!darkMood?styles.genderAprovel:styles.genderDarkAprovel}>{language?" العمر:":"age :"}{props.patientUser.birthDay}</Text>
        </View>

        <View style={props.isImageE?styles.postDateAprovel:styles.postDateNoImgAprovel}>
                    <Text style={{color:!darkMood?'#161616':'#fff' ,marginRight:"48%"}}>{language?"التاريخ : ":"date :"}{dateObject.getFullYear()}/{dateObject.getMonth() + 1}/{dateObject.getDate()}</Text>
                    <Text style={darkMood?styles.Aproveltime:styles.AproveldarkTime}>{language?"الوقت: " :"time :"}{dateObject.getHours()}:{dateObject.getMinutes() }</Text>
        </View>
        
        <TouchableOpacity style={styles.rejectValue} onPress={handelRejectPress}>
            <Text style={styles.PostInButtonText}>{darkMood?"رفض":"reject"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messengeValue} onPress={handelMessengePress}>
            <Fontisto name="messenger" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptValue} onPress={handelAcceptPress}>
            <Text style={styles.PostInButtonText}>{darkMood?"قبول":"accept"}</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default PostDetels