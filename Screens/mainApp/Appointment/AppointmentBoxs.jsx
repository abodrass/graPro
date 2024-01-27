import React, { useState } from 'react'
import {styles}  from "../../ScreensStyles/appomentStyles.js"
import { usePageContext } from "../../../PageProvider";
import { AntDesign } from '@expo/vector-icons';
import { url } from '../../../APIURLS';
import axios from 'react-native-axios';
import { StyleSheet,SafeAreaView , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
const AppointmentBoxs = (props) => {

    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {token}=usePageContext();
    const {showDelete, setShowDelete}= usePageContext();
    const {appotmentId,setappotmentId}= usePageContext();
    let boxType=!language?styles.dateBox:styles.dateBoxSAr;
    let dateTextColor=darkMood?"#fff":"#8da393";
    if(props.type=="can"){
        boxType=!language?styles.dateBoxRed:styles.dateBoxRedAr
        dateTextColor=darkMood?"#fff":"#d89695";
    }
    else if(props.type=="past"){
        boxType=!language?styles.dateBoxPur:styles.dateBoxPurAr
        dateTextColor=darkMood?"#fff":"#9697C8";
    }
    const handelDelete=async()=>{
            setappotmentId(props.id);
            setShowDelete(true);
            
        };

        const handelEdit=()=>{

        }
    

    return (
        <View style={darkMood?styles.darkContener:styles.contener}>
            <View style={boxType}>
                <Text style={{ color: dateTextColor }}>
                    {`${props.date.getFullYear()}/${props.date.getMonth() + 1}/${props.date.getDate()}`}
                </Text>
            </View>
            
            <View style={styles.delete}></View>
            
            <Text style={!language ? [styles.time, { color: darkMood ? 'white' : 'black' }] : [styles.timeAr, { color: darkMood ? 'white' : 'black' }]}>
                {language ? `وقت الموعد: ${props.date.getHours()}:${props.date.getMinutes()}` : `Time:${props.date.getHours()}:${props.date.getMinutes()}`}
            </Text>
            
            <Text style={!language ? [styles.name, { color: darkMood ? 'white' : 'black' }] : [styles.nameAr, { color: darkMood ? 'white' : 'black' }]}>
                {!language ? `procedure: ${props.nameEn}` : `الاجراء :${props.name}`}
            </Text>
            
            <Text style={!language ? [styles.phone, { color: darkMood ? 'white' : 'black' }] : [styles.phoneAr, { color: darkMood ? 'white' : 'black' }]}>
                {!language ? `appointment number : ${props.id}` : `رقم الموعد: ${props.id}`}
            </Text>
            
            {props.type=="past"&&
            <TouchableOpacity style={!language ? [styles.delete, { color: darkMood ? 'white' : 'black' }] : [styles.deleteAr, { color: darkMood ? 'white' : 'black' }]} onPress={handelDelete}>
                <AntDesign name="delete" size={24} color="red"  />
            </TouchableOpacity>}
            {props.type=="past"&&
            <TouchableOpacity style={!language ? [styles.edit, { color: darkMood ? 'white' : 'black' }] : [styles.editAr, { color: darkMood ? 'white' : 'black' }]} onPress={handelEdit}>
                <AntDesign name="edit" size={24} color={darkMood ? 'white' : 'black' } />
            </TouchableOpacity>
            }
        </View>
    )
}

export default AppointmentBoxs