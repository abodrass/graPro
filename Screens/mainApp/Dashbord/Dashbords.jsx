import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../../PageProvider";
import { styles } from '../../ScreensStyles/dashbordStyles';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from '../boxData';
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

                <TouchableOpacity  style={darkMood?styles.box:styles.boxDark}>
                    <Text>{boxData[i].value}</Text>
                </TouchableOpacity>
            )
        }
        return boxs;
    }
    return (
        <LinearGradient
        colors={darkMood?['#ececea',"#5F6B6F"]:["#3E3E3E","#3E3E3E",'#ececea']}
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