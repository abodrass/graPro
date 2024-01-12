import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../../PageProvider";
import { styles } from '../../ScreensStyles/dashbordStyles';
import { BlurView } from 'expo-blur';

import { StyleSheet, ScrollView,Text, SafeAreaView,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from '../boxData';
const Settings = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();

    return (
        <SafeAreaView
        style={{
            backgroundColor:darkMood?"#fff":"#3E3E3E"
        }}
        >
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
        
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings;