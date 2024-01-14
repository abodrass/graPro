
import React from 'react'

import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../../../PageProvider';
import { styles } from './DocPostStyles';
import { Feather } from '@expo/vector-icons';
const DocPost = ({ route }) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const { boxValue } = route.params;
    const mainTextColor = "rgba(182, 181, 181, 0.549)";
    return (
        <SafeAreaView style={darkMood?styles.container:styles.darkContainer} >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 30}
                enabled={Platform.OS === "ios" ? true : false}
        >
            <TextInput 
            style={styles.title}
            placeholderTextColor={mainTextColor}
            placeholder={!language?"العنوان":'Title'}
            ></TextInput>


            <TextInput 
            style={styles.des}
            placeholderTextColor={mainTextColor}
            placeholder={!language?"الوصف":'Description'}
            ></TextInput>
            <View style={styles.catagory}>
            <Text >{boxValue}</Text>
            </View>
            <TouchableOpacity style={styles.photo} >
                <Text style={language?styles.uploadText:styles.uploadTextAr}> {language?"upload photo":"ارفع صورة"}</Text>
                <Feather style={styles.uploadIcon} name="upload" size={24} color={darkMood?"#494949":'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postbo}>
                <Text>{language?"Post":"انشر"}</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default DocPost