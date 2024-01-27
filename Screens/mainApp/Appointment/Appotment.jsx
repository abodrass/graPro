import React, { useState } from 'react'
import { StyleSheet,SafeAreaView,ActivityIndicator , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppointmentBoxs from './AppointmentBoxs';
import { usePageContext } from "../../../PageProvider";
import { url } from '../../../APIURLS';
import axios from 'react-native-axios';
import { styles } from '../../ScreensStyles/appomentStyles';
import { useEffect } from 'react';
import PopUpSys from '../../component/PopUpSys';
import NoResult from '../../component/NoResult';
import AppointmentNotBooked from './AppointmentNotBooked';
import AppointmentActive from './AppointmentActive';
import AprovelNav from '../appointmentAprovel/AprovelNav';
import AppointmentReject from './AppointmentReject';
const TopTabs = createMaterialTopTabNavigator();

export function TopTabsGroup() {
    const {darkMood,setDarkMood}= usePageContext();
    const {language, setLanguage}=usePageContext();
    const {userRole,setUserRole}=usePageContext();
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
            name="AppointmentActiv"
            component={AppointmentActive}
            options={{
            tabBarLabel:language?"المواعيد المحجوزه":"BOOKED",
            }}
        />

    {userRole=="\"Dentist\""&& <TopTabs.Screen 
            name="Not booked" 
            component={AppointmentNotBooked }
            options={{
                tabBarLabel:language?"المواعيد غير المحجوزه":"BOOKED",
            }} />}


<TopTabs.Screen
            name="Rejected"
            component={AppointmentReject}
            options={{
            tabBarLabel:language?"المواعيد المرفوضه": "Rejected",
            }}
        />
    </TopTabs.Navigator>
    );
}

const appointmentGenrate =(type,appointmentsData="")=>{
    //must be the number of the appotment in the database 
    let appointments=[];
    for(let i=0;i<appointmentsData.length;i++){
        const dateObject = new Date(appointmentsData[i].date);
        appointments.push(
            <AppointmentBoxs 
                name={appointmentsData[i].categoryArabicName} 
                key={appointmentsData[i].id} 
                id={appointmentsData[i].id} 
                date={dateObject} 
                type={type} 
                nameEn={appointmentsData[i].categoryEnglishName} 
                ></AppointmentBoxs>
        )
        appointments.push(<View style={styles.horizontalLine} />)
    }
    return appointments
}






const Appotment = () => {   
        const {token,setToken}= usePageContext();
        const [data,setData]=useState();
        const [flag,setFlag]=useState();
        const {language, setLanguage}=usePageContext();
        const [showPopUp,setShowPopUp]=useState();
        const {darkMood,setDarkMood}= usePageContext();
        const {showDelete, setShowDelete}= usePageContext();
        const {appotmentId,setappotmentId}= usePageContext();
        const [NoPost,setNoPost]= useState(false);
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
                        setNoPost(true);
                    }
                } catch (error) {
                    setNoPost(true);
                    // Handle unexpected errors
                } finally {
                    // Hide loading indicator or enable the login button here
                    setNoPost(true);
                }
            };
        
            // Initial call
            fetchData();
        }, []); // Include 'token' as a dependency to update the interval when token changes
        

    const loader =()=>{
        console.log(NoPost)
        return  (!NoPost?
                <ActivityIndicator color={"#4cb5f9"} style={{top:"5%",left:"2%", }}></ActivityIndicator>:
                <NoResult des={language?"ليس لديك مواعيد":"You do not have appointments"}></NoResult>
        )
    }
return (
    !flag?loader()
    :
    <ScrollView style={{backgroundColor:darkMood ? '#161616' : 'white'}}  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row'}} >

    {showDelete&&<PopUpSys></PopUpSys>} 
    
    {flag&&!showDelete&&appointmentGenrate("act",data)}
    
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