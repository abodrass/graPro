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
import { useFocusEffect } from '@react-navigation/native';
import Refresh from '../../component/Refresh';
const AppointmentActive = () => {

        const {darkMood,setDarkMood}= usePageContext();
        const {token,setToken}= usePageContext();
        const [data,setData]=useState();
        const [flag,setFlag]=useState();
        const {language, setLanguage}=usePageContext();
        const [showPopUp,setShowPopUp]=useState();

        const {showDelete, setShowDelete}= usePageContext();
        const {userRole,setUserRole}= usePageContext();
        const {appotmentId,setappotmentId}= usePageContext();
        const {headerTitel,setHeaderTitel}= usePageContext();
        const [NoPost,setNoPost]= useState(false);
        const [refresh ,setRefresh]=useState(0);
        const backGround=darkMood?" #161616":"#fff"
        useFocusEffect(()=>{
            setHeaderTitel(language?"المواعيد":"appointments");
        });

        let urlF;
        if(userRole=="\"Patient\""){
            urlF=url.GetAllActiveAppointmentBookedForPatient;
        }
        else
            urlF=url.GetAllActiveAppointmentBookedForDentist;
        const handelRefresh=()=>{
            setRefresh((prev)=>{
                return prev+1;
            })
        }

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
                    console.log(urlF)
                    const response = await axios.get(urlF, {
                        headers: headers,
                    });
                    if (response.status === 200) {
                        console.log("GetAllActiveAppointmentBookedForDentist request good");
                        const responseData = response.data;
                        console.log(responseData)
                        setData(responseData);
                        setFlag(true);
                    } else {
                        setNoPost(true);
                    }
                } catch (error) {
                    console.error("delet faild with status:", response);   
                    setNoPost(true);
                    // Handle unexpected errors
                } finally {
                    // Hide loading indicator or enable the login button here
                    console.error("delet faild with status:", response);   
                    setNoPost(true);
                }
            };
        
            // Initial call
            if (headerTitel === "appointments"||headerTitel ==="المواعيد"){ 
                fetchData();
                }

        }, [refresh,headerTitel]);

        const appointmentGenrate =(type,appointmentsData="")=>{
            //must be the number of the appotment in the database 
            let appointments=[];
            appointments.push(<Refresh handelRefresh={handelRefresh} type={true} no={true}></Refresh>)
            for(let i=0;i<appointmentsData.length;i++){
                const dateObject = new Date(appointmentsData[i].appointmentBookedDto.date);
                appointments.push(
                    <AppointmentBoxs 
                        name={appointmentsData[i].appointmentBookedDto.categoryName.arabicName} 
                        key={appointmentsData[i].appointmentBookedDto.id} 
                        id={appointmentsData[i].appointmentBookedDto.id} 
                        date={dateObject} 
                        type={type} 
                        nameEn={appointmentsData[i].appointmentBookedDto.categoryName.englishName} 
                        >
                    </AppointmentBoxs>
                )
                appointments.push(<View style={styles.horizontalLine} />)
            }
            
            return appointments
        }
        
        const loader =()=>{
            console.log(NoPost)
            return  (NoPost?
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

export default AppointmentActive;