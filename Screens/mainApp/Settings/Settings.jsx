import React from 'react'
import { usePageContext } from "../../../PageProvider";
import { styles } from './settingStyle';
import { StorageKey } from '../../../StorageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from '../../../Nav';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView,Text, SafeAreaView,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
const Settings = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {tokenFlag, setTokenFlag}= usePageContext();

    const handleLogOut= async()=>{
        try {
            await AsyncStorage.removeItem(StorageKey.STORAGE_KEY_TOKEN);
            console.log('Data removed successfully');
            setTokenFlag(false);
            return;
            } catch (error) {
            console.error('Error removing data from AsyncStorage:', error);
            }
    }
    return (
        <SafeAreaView
        style={{
            backgroundColor:darkMood?"#fff":"#3E3E3E"
        }}
        >
            <TouchableOpacity onPress={handleLogOut} style={styles.row} >
                    <Text >{language?"تسجيل الخروج":"logout"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Settings;