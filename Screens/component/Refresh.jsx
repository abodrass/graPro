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
import { FontAwesome } from '@expo/vector-icons';
const Refresh = (props) => {
    const {darkMood}=usePageContext();
    const {language}=usePageContext();
    return (
        <TouchableOpacity style={{alignSelf:'center',left:
        props.no?
        props.type?"32%":"27%"
        :
        props.type?"20%":"27%"

        
        ,marginTop:20 ,marginBottom:20}} onPress={props.handelRefresh}>
        
            <FontAwesome  name="refresh" size={24} color={darkMood?"#fff":"#161616"} style={{left:5}} />
            <Text style={{color:darkMood?"#fff":"#161616", right:language?20:7}}>{!language?"refresh":"اعادة التحميل"}</Text>
        </TouchableOpacity>
    )
}

export default Refresh