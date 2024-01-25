import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../PageProvider';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { url } from '../../APIURLS';
import { styles } from './postsStyles';
const Posts = (props) => {
    const {darkMood}=usePageContext();
    const dateObject = new Date(props.date);
    const handelPostClick=()=>{
        props.navigations.navigate('PatientPostPick', {
            appointmentId:  props.id,
            date1:dateObject,
        }); 
    }

    function hasArabicCharacters(str) {
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


    return (
    
        <TouchableOpacity style={
        !props.type?
        !darkMood?
        props.isImageE?
        styles.mainBox:styles.mainBox1:
        props.isImageE?
        styles.mainBoxDark:styles.mainBox1Dark:
        
        !darkMood?
        props.isImageE?
        styles.aprovelmainBox:styles.mainBox1:
        props.isImageE?styles.aprovelmainBoxDark:styles.mainBox1Dark
        
        } onPress={handelPostClick}>
            <Image source={require("../../assets/585e4beacb11b227491c3399.png")} style={props.isImageE?styles.profilePic:styles.profilePic1} ></Image>  
                <View style={props.isImageE?styles.nameAndDateV:styles.nameAndDateV1}>
                </View>  
                    <Text  style={!darkMood?
                        hasArabicCharacters(props.des)?
                        props.isImageE?styles.des:styles.des1:props.isImageE?
                        styles.desEn:styles.des1:
                        hasArabicCharacters(props.des)?
                        props.isImageE?
                        styles.desDark:styles.des1Dark
                        :props.isImageE?
                        styles.desEnDark:styles.des1Dark}> 
                        {props.des.substring(0, 200)}
                </Text>
                <View style={props.isImageE?styles.postDate:styles.postDateNoImg}>
                    <Text style={{color:!darkMood?'#161616':'#fff'}}>date: {dateObject.getFullYear()}/{dateObject.getMonth() + 1}/{dateObject.getDate()}</Text>
                    <Text style={darkMood?styles.time:styles.darkTime}>time: {dateObject.getHours()}:{dateObject.getMinutes() }</Text>
                </View>
                <View>
                    <Text style={{color:!darkMood?'#161616':'#fff'}}>{props.patientUser.gender}</Text>
                </View>
            <View style={styles.postImage}>
                { props.isImageE&& imageShow()}
            </View>
        </TouchableOpacity>
    )
}

export default Posts