import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { styles } from '../ScreensStyles/dashbordStyles';
import { BlurView } from 'expo-blur';

import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
const Settings = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();

    return (
        <LinearGradient
            colors={darkMood?['#CACBC8',"#7B695B"]:['#A1A29D',"#3E3E3E"]}
            start={{ x: 1, y: .5 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >   
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
        
            </ScrollView>
        </LinearGradient>
    )
}

export default Settings;