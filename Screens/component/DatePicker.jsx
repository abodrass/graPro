import React from 'react'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import  DateTimePicker  from '@react-native-community/datetimepicker';



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

const showMode = (currentMode) => { 
    setShowDateBox(true);
    setMode(currentMode) ;
    }
const DatePicker = () => {

    const [date,setDate]=useState( new Date());
const [showDateBox,setShowDateBox]=useState(false);

const[text,setText]=useState("Empty");
    return (
        <DateTimePicker
        ></DateTimePicker>
    )
}

export default DatePicker