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
    let boxType=!language?styles.dateBox:styles.dateBoxSAr;
    let dateTextColor="#8da393";
    if(props.type=="can"){
        boxType=!language?styles.dateBoxRed:styles.dateBoxRedAr
        dateTextColor="#d89695";
    }
    else if(props.type=="past"){
        boxType=!language?styles.dateBoxPur:styles.dateBoxPurAr
        dateTextColor="#9697C8";
    }
    const handelDelete=async()=>{
            console.log("Bearer "+token.replace(/"/g, ''));
            // Your asynchronous code here
            console.log("Bearer "+token.replace(/"/g, ''));
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'http://localhost:19006',
                'Authorization': "Bearer "+token.replace(/"/g, ''),
            };
            try {
              // Display loading indicator or disable the login button here
                const response = await axios.delete(url.AppointmentDelete+`/${props.id}`, {
                headers: headers,
                });
            if (response.status === 200) {
                return;
                // Navigate to the next screen or perform other actions
            } else {
                console.error("delet faild with status:", response.status);   
                
                // Handle specific error cases based on response status or content
            }
            } catch (error) {
                console.error("An error occurred", error);
              // Handle unexpected errors
            } finally {
              // Hide loading indicator or enable the login button here
            }
        };
    

    return (
        <View style={styles.contener}>
            <View style={boxType} >
                <Text style={{ color: dateTextColor }}> {`${props.date.getFullYear()}/${props.date.getMonth()+1}/${props.date.getDate()}`}</Text>
            </View>
            <View style={styles.delete}></View>
            <Text style={!language?styles.time:styles.timeAr}>{language?`وقت الموعد: ${props.date.getHours()}:${props.date.getMinutes()}`:`Time:${props.date.getHours()}:${props.date.getMinutes()}`}</Text>
            <Text style={!language?styles.name:styles.nameAr}>{!language?`Name`:`الاجراء :${props.name}` }</Text>
            <Text style={!language?styles.phone:styles.phoneAr}>{!language?"Phone Number":`رقم الموعد: ${props.id}`}</Text>
            <TouchableOpacity style={!language?styles.delete:styles.deleteAr} onPress={handelDelete}>
                <AntDesign name="delete" size={24} color="red"  />
            </TouchableOpacity>
        </View>
    )
}

export default AppointmentBoxs