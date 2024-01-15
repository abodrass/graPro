import React from 'react'
import { usePageContext } from "../../../PageProvider";
import { styles } from './settingStyle';
import { StorageKey } from '../../../StorageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from '../../../Nav';
import { useNavigation } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import RNRestart from 'react-native-restart';
import { StyleSheet, ScrollView,Text, SafeAreaView,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
const Settings = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {tokenFlag, setTokenFlag}= usePageContext();
    const {setToken}=usePageContext();
    const handleLogOut = async () => {
        try {
          await AsyncStorage.removeItem(StorageKey.STORAGE_KEY_TOKEN);
          console.log('Data removed successfully');
          setToken(""); // Update token state
          setTokenFlag(false);
          await Updates.reloadAsync();
          return;
        } catch (error) {
          console.error(error);
        }
      }


    

    const handelDarkMoodClick=()=>{
        console.log("hi");
        setDarkMood((prev)=>{
            return !prev;
        });
    }
    const handelLangugeClick=()=>{
        setLanguage((prev)=>{
            return !prev;
        })
    }
    return (
        <ScrollView
        style={{
            backgroundColor:darkMood?"#fff":"#3E3E3E"
        }}
        >
            <TouchableOpacity onPress={handelDarkMoodClick} style={styles.row} >
                    <Text >{!language?"النمط الاسود":"Dark Mode"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handelLangugeClick} style={styles.row} >
                    <Text >{!language?" اللغه":"language"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogOut} style={styles.row} >
                    <Text >{!language?"تسجيل الخروج":"logout"}</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Settings;