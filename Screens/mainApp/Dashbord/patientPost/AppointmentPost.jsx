import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, ActivityIndicator } from 'react-native';
import Posts from '../../../component/posts';
import { styles } from '../../../component/postsStyles';
import { url } from '../../../../APIURLS';
import { usePageContext } from "../../../../PageProvider";
import { useEffect } from 'react';

import axios from 'react-native-axios';
import NoResult from '../../../component/NoResult';
const AppointmentPost = ({  navigation ,route  }) => {
    const {token}=usePageContext();
    const{darkMood}=usePageContext();
    const{language}=usePageContext();
    const {catgoryId} = route.params;
    const [data,setData]=useState();
    const [flag,setFlag]=useState(false);
    const [NoPost,setNoPost]= useState(false);
    useEffect(() => {
        console.log("this is the catgory id in the app post "+catgoryId)
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
                const response = await axios.get(url.GetALLPostForThisCategory+catgoryId.toString(), {
                headers: headers,
                });
            if (response.status === 200) {
                console.log("GetAllCategorys request good");
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
                console.error("An error occurred", error);
                setNoPost(true);
            } finally {
                setNoPost(true);
            }
        };
        
        fetchData();
    }, [catgoryId]);

    
    const allposts=()=>{
        let posts=[];
        let flag=true;
        for (let i = 0; i < data.appointmentDates.length; i++) {
            if(!data.appointmentDates[i].images[0]?.imageData){
                flag=false
            }

            console.log(data.appointmentDates[i].date);
            posts.push(
                <Posts
                    key={data.appointmentDates[i].appointmentId}
                    id={data.appointmentDates[i].appointmentId}
                    date={data.appointmentDates[i].date}
                    imageUrl={data.appointmentDates[i].images[0]?.imageData}
                    isImageE={flag}
                    type={false}
                    navigations={navigation}
                    des={data.appointmentDates[i].dentistDescription} // Corrected access to dentistDescription
                />
            );
            posts.push(
                <View style={styles.horizontalLine} />
            )
            
            flag=true;
        }
    
        return posts;
    }

    const loader =()=>{
        console.log(NoPost)
        return  (!NoPost?
                <ActivityIndicator color={"#4cb5f9"} style={{top:"50%",left:"2%", }}></ActivityIndicator>:
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

export default AppointmentPost