import React from 'react'
import {styles}  from "../../ScreensStyles/appomentStyles.js"
import { StyleSheet,SafeAreaView , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
const AppointmentBoxs = (props) => {
    let boxType=styles.dateBox;
    let dateTextColor="#c9d8cd";
    if(props.type=="can"){
        boxType=styles.dateBoxRed
        dateTextColor="#F3BCBB";
    }
    else if(props.type=="past"){
        boxType=styles.dateBoxPur
        dateTextColor="#9697C8";
    }
    return (
        <View style={styles.contener}>
            <View style={boxType} >
                <Text style={{ color: dateTextColor }}>DATE</Text>
            </View>
            <View style={styles.delete}></View>
            <Text style={styles.time}>hours</Text>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.phone}>Phone Number</Text>
        </View>
    )
}

export default AppointmentBoxs