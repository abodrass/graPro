import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { styles } from './dashbordStyles';
import { BlurView } from 'expo-blur';

import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
const Settings = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();

    return (
        <LinearGradient
            colors={darkMood?['#ffffff', '#579bb6']:['rgb(43, 39, 39)', '#74c2e0']}
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