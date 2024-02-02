import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, ActivityIndicator } from 'react-native';
import Posts from '../../component/posts';
import { styles } from '../../component/postsStyles';
import { url } from '../../../APIURLS';
import { usePageContext } from "../../../PageProvider";
import { useEffect } from 'react';
import axios from 'react-native-axios';
import NoResult from '../../component/NoResult';
import DoctorPost from '../../component/DoctorPost';
import { FontAwesome } from '@expo/vector-icons';
import Refresh from '../../component/Refresh';
    const  Aprovel = ({  navigation ,route  }) => {
        const {token}=usePageContext();
        const{darkMood}=usePageContext();
        const{language}=usePageContext();
        const [data,setData]=useState();
        const [flag,setFlag]=useState(false);
        const [NoPost,setNoPost]= useState(false);
        const [numImg,setnumImg]=useState(1);
        const{changeAprvelApp,setchangeAprvelApp}=usePageContext();
        const {headerTitel,setHeaderTitel}= usePageContext();
        const [refresh ,setRefresh]=useState(0);


        useEffect(() => {
            console.log("Bearer "+token.replace(/"/g, ''));
            
            const fetchData = async () => {
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': 'http://localhost:19006',
                    'Authorization': "Bearer "+token.replace(/"/g, ''),
                };
                try {
                  // Display loading indicator or disable the login button here
                    const response = await axios.get(url.GetAllWaitingApprovalAppointments, {
                    headers: headers,
                    });
                if (response.status === 200) {
                    console.log("GetAllWaitingApprovalAppointments request good");
                    const responseData = response.data;
                    
                    console.log(responseData)
                    setData(responseData);
                    setFlag(true);
                    return;
                    // Navigate to the next screen or perform other actions
                } else {
                    console.error("Request failed with status:", response);   

                    setNoPost(true);
                    // Handle specific error cases based on response status or content
                }
                } catch (error) {
                    console.log(error);
                    if (error=="Error: Request failed with status code 404"){
                        setData(null);
                        setFlag(false);
                    }
                    setNoPost(true);
                } finally {
                    setNoPost(true);
                }
            };
            if (headerTitel === "aprovel page"||headerTitel ==="المواعيد المطلوبه"){ 
            fetchData();
            }


        },[changeAprvelApp,headerTitel,refresh] );


        const handelRefresh=()=>{
            setRefresh((prev)=>{
                return prev+1;
            })
        }
    
        
        const allposts=()=>{
            let posts=[];
            let flag1=true;
            if (data===null){
                return;
            }
            posts.push(<Refresh handelRefresh={handelRefresh} type={false}></Refresh>)
            for (let i = 0; i < data.length; i++) {
                if(!data[i].images[0]?.imageData){
                    flag1=false
                }
                
    
                console.log(data[i].date);
                posts.push(
                    <DoctorPost
                        key={data[i].appointmentBookedId}
                        id={data[i].appointmentBookedId}
                        date={data[i].date}
                        imageUrl={data[i].images}
                        isImageE={flag1}
                        patientUser={data[i].patientUser}
                        status={data[i].status}
                        navigations={navigation}
                        categoryEnglishName={data[i].category.englishName}
                        categoryArabicName={data[i].category.arabicName}
                        des={data[i].patientDescription}
                        type={true}
                        // Corrected access to dentistDescription
                    />
                );
                posts.push(
                    <View style={styles.horizontalLine} />
                )
                
                flag1=true;
            }

            return posts;
        }
    
        const loader =()=>{
            console.log(NoPost)
            return  (
                    <NoResult des={language?"لا يوجد هناك مواعيد عد لاحقا":"no appointment founded"}></NoResult>
            )
        }
    
            return (
                <View>
                {!flag?loader()
                    :
                <ScrollView  style={!darkMood?styles.container:styles.containerDark} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
                
                    {flag &&allposts()}
                </ScrollView>
                
                }
                
                </View>
                )
    
        
    }
    

export default Aprovel