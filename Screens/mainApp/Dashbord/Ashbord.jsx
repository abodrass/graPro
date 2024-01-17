import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../../PageProvider";
import { styles } from '../../ScreensStyles/dashbordStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import axios from 'react-native-axios';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { boxData } from './boxData';
import { url } from '../../../APIURLS';
import Boxs from './Boxs';

const Ashbord = ({ navigation }) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {token}=usePageContext();
    const [loader,setLoader]=useState(false);
    const [data,setData]=useState();
    useEffect(() => {
        console.log("Bearer "+token.replace(/"/g, ''));
        const fetchData = async () => {
            // Your asynchronous code here
            console.log("Bearer "+token.replace(/"/g, ''));
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'http://localhost:19006',
                'Authorization': "Bearer "+token.replace(/"/g, ''),
            };
            try {
              // Display loading indicator or disable the login button here
                const response = await axios.get(url.GetAllCategorys, {
                headers: headers,
                });
            if (response.status === 200) {
                console.log("GetAllCategorys request good");
                const responseData = response.data;
                
                console.log(responseData[0])
                setData(responseData);
                setLoader(true);
                return;
                // Navigate to the next screen or perform other actions
            } else {
                console.error("Request failed with status:", response.status);   
                
                // Handle specific error cases based on response status or content
            }
            } catch (error) {
                console.error("An error occurred", error);
              // Handle unexpected errors
            } finally {
              // Hide loading indicator or enable the login button here
            }
        };
        
        fetchData();
    }, [token]);

    const boxGen=(data)=>{
        let boxs=[];
        for (let i=0;i<2;i++){
        

            boxs.push(
                <Boxs keys={data[i].id}  id={data[i].id} ARname={data[i].arabicName} EnName={data[i].englishName} imgurl={data[i].image} navigations={navigation}></Boxs>
            )
        }
        return boxs;
    }
    

    return (
        <LinearGradient
        colors={darkMood?["#161616","#161616"]:['#ececea',"#5F6B6F"]}
        start={{ x: 1, y: .5 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
        >  
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {loader?boxGen(data):"" }
            </ScrollView>
        </LinearGradient>
    )
}

export default Ashbord