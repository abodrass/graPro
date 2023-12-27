import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { styles } from '../ScreensStyles/dashbordStyles';
import { BlurView } from 'expo-blur';

import { StyleSheet,SafeAreaView , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
const Profile = () => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const boxGen=()=>{
        let boxs=[];
        let type='dark';
        for (let i=0;i<boxData.length;i++){
            if(i%2==0){
                type="light"
            }else{
                type="dark"
            }

            boxs.push(

                <BlurView intensity={60} tint={type}  style={styles.box}>
                    <Text>{boxData[i].value}</Text>
                </BlurView>
            )
        }
        return boxs;
    }
    return (
        <SafeAreaView
            style={styles.container}
        >   
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {boxGen() }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile