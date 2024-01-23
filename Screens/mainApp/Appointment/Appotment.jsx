import React, { useState } from 'react'
import { StyleSheet,SafeAreaView,ActivityIndicator , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppointmentBoxs from './AppointmentBoxs';
import { usePageContext } from "../../../PageProvider";
import { url } from '../../../APIURLS';
import axios from 'react-native-axios';
import { useEffect } from 'react';
import PopUpSys from '../../component/PopUpSys';
const TopTabs = createMaterialTopTabNavigator();

export function TopTabsGroup() {
    const {darkMood,setDarkMood}= usePageContext();

    return (
        <TopTabs.Navigator
        screenOptions={{
            tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "bold",
            color: !darkMood ? '#161616' : 'white',    
        },
        tabBarIndicatorStyle: {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#1DA1F2",
        },
        tabBarStyle: {
            backgroundColor: darkMood ? '#161616' : 'white', // Set background color based on dark mode
        },
        }}
        >
        <TopTabs.Screen
            name="main"
            component={Appotment}
            options={{
            tabBarLabel: "MY Appotment",
            }}
        />
        <TopTabs.Screen name="past" component={AppotmentPast } />
        <TopTabs.Screen name="Cancelled" component={AppotmentCancelled } />
    </TopTabs.Navigator>
    );
}

const appointmentGenrate =(type,appointmentsData="")=>{
    //must be the number of the appotment in the database 
    let appointments=[];
    for(let i=0;i<appointmentsData.length;i++){
        const dateObject = new Date(appointmentsData[i].date);
        appointments.push(
            <AppointmentBoxs name={appointmentsData[i].categoryArabicName} key={appointmentsData[i].id} id={appointmentsData[i].id} date={dateObject} type={type} ></AppointmentBoxs>
        )
    }
    return appointments
}
const Appotment = () => {   
        const {token,setToken}= usePageContext();
        const [data,setData]=useState();
        const [flag,setFlag]=useState();
        const [showPopUp,setShowPopUp]=useState();
        const {darkMood,setDarkMood}= usePageContext();
        const {showDelete, setShowDelete}= usePageContext();
        const {appotmentId,setappotmentId}= usePageContext();
        const backGround=darkMood?" #161616":"#fff"
        useEffect(() => {
            const fetchData = async () => {
                console.log("Bearer " + token.replace(/"/g, ''));
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': 'http://localhost:19006',
                    'Authorization': "Bearer " + token.replace(/"/g, ''),
                };
                try {
                    const response = await axios.get(url.allActiveAppotments, {
                        headers: headers,
                    });
                    if (response.status === 200) {
                        console.log("GetAllCategorys request good");
                        const responseData = response.data;
                        console.log(responseData)
                        setData(responseData);
                        setFlag(true);
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
        
            // Initial call
            fetchData();
        
            // Set up an interval to call fetchData every 20 seconds
            const intervalId = setInterval(fetchData, 20000);
        
            // Cleanup the interval when the component unmounts
            return () => clearInterval(intervalId);
        }, [token,appotmentId]); // Include 'token' as a dependency to update the interval when token changes
        


return (
    
    <ScrollView style={{backgroundColor:darkMood ? '#161616' : 'white'}}  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row'}} >

        {showDelete&&<PopUpSys></PopUpSys>}   
        {flag?appointmentGenrate("act",data):<ActivityIndicator color={"#4cb5f9"} style={{top:"5%",left:"2%", }}></ActivityIndicator>}
        
    </ScrollView>
    )
}


const AppotmentPast = () => {
    const {darkMood,setDarkMood}= usePageContext();
    return (
        <ScrollView style={{backgroundColor:darkMood ? '#161616' : 'white'}}  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {appointmentGenrate("past")}
        </ScrollView>
        )
    }

const AppotmentCancelled = () => {
    const {darkMood,setDarkMood}= usePageContext();
    return (
        <ScrollView  style={{backgroundColor:darkMood ? '#161616' : 'white'}} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {appointmentGenrate("can")}
        </ScrollView>
        )
    }
        

export default Appotment;