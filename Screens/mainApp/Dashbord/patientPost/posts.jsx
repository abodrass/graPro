import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../../../PageProvider';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { url } from '../../../../APIURLS';
import { styles } from './postsStyles';
const Posts = (props) => {
    const handelPostClick=()=>{
        props.navigations.navigate('PatientPostPick', {
            boxValue:  props.id,
            }); 
    }
    return (
    
        <TouchableOpacity style={props.isImageE?styles.mainBox:styles.mainBox1} onPress={handelPostClick}>
            <Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl}` }} style={props.isImageE?styles.profilePic:styles.profilePic1} ></Image>  
                <View style={props.isImageE?styles.nameAndDateV:styles.nameAndDateV1}>
                <View style={styles.nameAndDateVPos}>
                    <Text  style={styles.name}>abod aboras</Text>
                    <Text  style={styles.date}>3:30 am </Text>
                </View>
                </View>  
                    <Text  style={props.isImageE?styles.des:styles.des1}> 
                        {props.des.substring(0, 200)}
                </Text>
            <View style={styles.postImage}>
                { props.isImageE&&<Image source={{ uri: `data:image/jpeg;base64,${props.imageUrl}` }} style={{width:"100%",height:"100%"}}></Image>}
            </View>
        </TouchableOpacity>
    )
}

export default Posts