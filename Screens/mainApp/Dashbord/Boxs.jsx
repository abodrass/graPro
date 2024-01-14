import React from 'react'
import { styles } from '../../ScreensStyles/dashbordStyles';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
import { usePageContext } from "../../../PageProvider";




const Boxs = (props) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    console.log(props.keys);
    return (
        <TouchableOpacity  style={darkMood?styles.box:styles.boxDark} 
            onPress={() => {
                props.navigations.navigate('DocPost', {
                boxValue: boxData[props.keys].value,
                });
            }}>
            <Text>{boxData[props.keys].value}</Text>
        </TouchableOpacity>
    )
}

export default Boxs