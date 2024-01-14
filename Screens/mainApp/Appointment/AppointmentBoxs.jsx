import React from 'react'
import {styles}  from "../../ScreensStyles/appomentStyles.js"
import { usePageContext } from "../../../PageProvider";
import { StyleSheet,SafeAreaView , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
const AppointmentBoxs = (props) => {

    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();

    let boxType=language?styles.dateBox:styles.dateBoxSAr;
    let dateTextColor="#8da393";
    if(props.type=="can"){
        boxType=language?styles.dateBoxRed:styles.dateBoxRedAr
        dateTextColor="#d89695";
    }
    else if(props.type=="past"){
        boxType=language?styles.dateBoxPur:styles.dateBoxPurAr
        dateTextColor="#9697C8";
    }
    return (
        <View style={styles.contener}>
            <View style={boxType} >
                <Text style={{ color: dateTextColor }}> {language?"DATE":"التاريخ"}</Text>
            </View>
            <View style={styles.delete}></View>
            <Text style={language?styles.time:styles.timeAr}>{language?"hours":"الساعة"}</Text>
            <Text style={language?styles.name:styles.nameAr}>{language?"Name":"الاسم" }</Text>
            <Text style={language?styles.phone:styles.phoneAr}>{language?"Phone Number":"رقم الهاتف"}</Text>
        </View>
    )
}

export default AppointmentBoxs