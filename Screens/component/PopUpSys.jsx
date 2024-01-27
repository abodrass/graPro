
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { usePageContext } from '../../PageProvider'
import axios from 'react-native-axios';
import { url } from '../../APIURLS';

const PopUpSys = () => {
    const {showDelete, setShowDelete}= usePageContext();
    const {appotmentId,setappotmentId}= usePageContext();
    const {darkMood,setDarkMood}= usePageContext();
    const {tokenFlag, setTokenFlag}= usePageContext();
    const {token,setToken}= usePageContext();
    const {language,setLanguage}= usePageContext();


    const handelCancelPress=()=>{

        setShowDelete(false);
        setappotmentId(null);
        return;
    }
    const handelDeletePress=async()=>{
        
                console.log("Bearer "+token.replace(/"/g, ''));
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
                    const response = await axios.delete(url.AppointmentDelete+`?appointmentId=${appotmentId}`, {
                    headers: headers,
                    });
                if (response.status === 200) {
                    setShowDelete(false);
                    setappotmentId(null);
                    return;
                    // Navigate to the next screen or perform other actions
                } else {
                    console.error("delet faild with status:", response);   
                    
                    // Handle specific error cases based on response status or content
                }
                } catch (error) {
                    console.error("An error occurred", error);
                  // Handle unexpected errors
                } finally {
                  // Hide loading indicator or enable the login button here
                }
            };
    return (
        <View style={styles.container}>
            <View style={styles.incontainer}>
                <Text style={styles.text}>Are You sure You Want to Delete the Appointment</Text>
                <TouchableOpacity style={styles.cancelBo} onPress={handelCancelPress}>
                    <Text style={styles.PostInButtonText}>{language?"Cancel":"الغاء"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBo} onPress={handelDeletePress}>
                    <Text style={styles.PostInButtonText}>{language?"delete":"حذف"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        alignItems:"center",
        justifyContent:"center",
        width:'100%',
        height:700,
        backgroundColor:'#ffffff00'
    },
    incontainer: {
        width:"80%",
        height:"30%",
        position:'relative',
        backgroundColor:'white',
        borderRadius:30,
        padding:30
    },
    text: {
        position:'absolute',
        top:'10%',
        left:'10%',
        fontSize: 18,
        color:'red',
    },
  
    picker: {
        width: 150,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      
    },
    selectedGender: {
        marginTop: 20,
        fontSize: 16,
    },
    cancelBo:{
        position:"absolute",
        backgroundColor:"#4cb5f9",
        top:"90%",
        left:"80%",
        alignItems:'center',
        justifyContent:'center',
        width:"30%",
        height:35,
        borderRadius:20,
        color:"#fff"
    },
    PostInButtonText: {
        color: 'white',
        fontWeight: '800',
    },
    deleteBo:{
        position:"absolute",
        backgroundColor:"red",
        top:"90%",
        left:"10%",
        alignItems:'center',
        justifyContent:'center',
        width:"30%",
        height:35,
        borderRadius:20,
        color:"red"
    },
    PostInButtonText: {
        color: 'white',
        fontWeight: '800',
    },
  });

export default PopUpSys