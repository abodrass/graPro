import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import Posts from './posts';
import { styles } from './postsStyles';
import { url } from '../../../../APIURLS';
import { usePageContext } from "../../../../PageProvider";
import { useEffect } from 'react';

import axios from 'react-native-axios';
const AppointmentPost = ({  navigation ,route  }) => {
    const {token}=usePageContext();
    const {catgoryId} = route.params;
    const [data,setData]=useState();
    const [flag,setFlag]=useState(false);
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
    }, [catgoryId]);

    
    const allposts=()=>{
        let posts=[];
        let flag=true;
        for (let i = 0; i < data.appointmentDates.length; i++) {
            posts.push(
                <Posts
                    key={data.appointmentDates[i].appointmentId}
                    date={data.appointmentDates[i].date}
                    imageUrl={data.appointmentDates[i].images[0]}
                    isImageE={flag}
                    navigations={navigation}
                    des={data.appointmentDates[i].dentistDescription} // Corrected access to dentistDescription
                />
            );
            flag=!flag;

        }
    
        return posts;
    }

        return (
            <ScrollView  style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
                {flag&&allposts()}
            </ScrollView>
            )

    
}

export default AppointmentPost