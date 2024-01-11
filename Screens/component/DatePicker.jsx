import React from 'react'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import  DateTimePicker  from '@react-native-community/datetimepicker';

const [date,setDate]=useState( new Date());
const [showDateBox,setShowDateBox]=useState(false);

const[text,setText]=useState("Empty");

const showMode = (currentMode) => { 
    setShowDateBox(true);
    setMode(currentMode) ;
    }
const DatePicker = () => {
    return (
        <DateTimePicker
        ></DateTimePicker>
    )
}

export default DatePicker