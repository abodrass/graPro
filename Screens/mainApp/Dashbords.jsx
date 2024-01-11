import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";
import { styles } from '../ScreensStyles/dashbordStyles';
import { BlurView } from 'expo-blur';

import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
const Dashbord = () => {
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

                <View   style={darkMood?styles.box:styles.boxDark}>
                    <Text>{boxData[i].value}</Text>
                </View>
            )
        }
        return boxs;
    }
    return (
        <LinearGradient
        colors={darkMood?['#D0D1CD',"#7B695B"]:['#A1A29D',"#292929"]}
        start={{ x: 1, y: .5 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
    >  
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {boxGen() }
            </ScrollView>
        </LinearGradient>
    )
}

export default Dashbord;