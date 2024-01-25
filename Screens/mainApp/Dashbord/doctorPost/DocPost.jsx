
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../../../PageProvider';
import { styles } from './DocPostStyles';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { url } from '../../../../APIURLS';
const DocPost = ({ route, navigation  }) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [image, setImage] = useState(null);
    const [image64, setImage64] = useState([]);
    const [showDateBox,setShowDateBox]=useState(false);
    const [showTimeBox,setShowTimeBox]=useState(false);
    const [imgPicked,setImgPicked]= useState(false);
    const [time ,setTime]=useState(new Date())
    const [date,setDate]=useState( new Date());
    const [des,setDes]=useState("");
    const {token,setToken}=usePageContext();
    const[text,setText]=useState("Empty");
    const {catgoryId} = route.params;
    const mainTextColor= darkMood?"black":"white";



    const handelPostPress = async () => {
        
        const requestBody = {
            date: date,
            dentistDescription: des.substring(0, 200),
            categoryId: catgoryId,
            images:image64
        };
        const bar="Bearer "
        console.log("Bearer "+token.replace(/"/g, ''));
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:19006',
            'Authorization': "Bearer "+token.replace(/"/g, '')
        };
    
        try {
            // Display loading indicator or disable the button here
            const response = await axios.post(url.CreateApptment, requestBody, {
                headers: headers,
            });
    
            console.log("Response:", response.data);
    
            // Check if the response status is successful (2xx range)
            if (response.status >= 200 && response.status < 300) {
                console.log("Request successful");
                navigation.navigate('Asborde');
                return;
                // Perform actions on successful response
            } else {
                console.error("Request failed with status:", response);
                // Handle specific error cases based on response status or content
                // Example: if (response.status === 401) { /* handle unauthorized */ }
            }
        } catch (error) {
            console.error("An error occurred", error);
    
            // Check for specific error conditions and handle accordingly
            if (axios.isAxiosError(error)) {
                console.error("Axios error details:", error.response?.data);
                // Additional error handling for Axios-specific errors
            }
    
            // Handle unexpected errors
        } finally {
            // Hide loading indicator or enable the button here
        }
    };
    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
            multiple: true, // Enable multiple image selection
        });
    
        if (!result.cancelled) {
            const imageArray = result.assets.map((image) => image.base64);
            setImage64(imageArray);
            setImage(result.assets[0].uri); // Assuming you want to display the first selected image
            setImgPicked(true);
        }
    };
    

        const handelDatePress=()=>{
            setShowDateBox(true);
        }
        const handelTimePress=()=>{
            setShowTimeBox(true);
        }
        const handelDesChange=(des)=>{
            setDes(des);
        }

        const handelBackClick=()=>{
            navigation.navigate('Asborde')
        }

        const onDateChange = (event, selectedDate) => {
            // Call persist to remove the synthetic event from the pool   
            const {
                type,
                nativeEvent: { timestamp, utcOffset },
            } = event;
           // Handle the date change or dismissal here
            if (type === 'set') {
               // User selected a date
                console.log('Selected Date:', selectedDate);
                setDate(selectedDate);
                console.log('UTC Offset:', utcOffset);
                setShowDateBox(false); 
                event.persist();
                
            } else if (type === 'dismissed') {
               // User dismissed the picker
                console.log('Picker Dismissed');
                setShowDateBox(false);  // Assuming setShowDateBox is defined elsewhere
                event.persist();
            } else if (type === 'neutralButtonPressed') {
               // This is only available on Android when a neutral button is pressed
                setShowDateBox(false);  // Assuming setShowDateBox is defined elsewhere
                console.log('Neutral Button Pressed');
                event.persist();
                }
        };

        const onTimeChange = (event, selectedDate) => {
            // Call persist to remove the synthetic event from the pool   
            const {
                type,
                nativeEvent: { timestamp, utcOffset },
            } = event;
           // Handle the date change or dismissal here
            if (type === 'set') {
               // User selected a date
                console.log('Selected Date:', selectedDate);
                date.setHours(selectedDate.getHours());
                date.setMinutes(selectedDate.getMinutes());
                // Assuming setDate is defined elsewhere
                 // Assuming setShowDateBox is defined elsewhere
                console.log('UTC Offset:', utcOffset);
                setShowTimeBox(false); 
                event.persist();
                
            } else if (type === 'dismissed') {
               // User dismissed the picker
                console.log('Picker Dismissed');
                setShowTimeBox(false);  // Assuming setShowDateBox is defined elsewhere
                event.persist();
            } else if (type === 'neutralButtonPressed') {
               // This is only available on Android when a neutral button is pressed
               setShowTimeBox(false);  // Assuming setShowDateBox is defined elsewhere
                console.log('Neutral Button Pressed');
                event.persist();
                }
        };


    return (
        <SafeAreaView style={!darkMood?styles.container:styles.darkContainer} >

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 30}
                enabled={Platform.OS === "ios" ? true : false}
                style={styles.allview}
                >
            <View style={styles.rowv}>
            
            <TouchableOpacity onPress={handelBackClick}>
                <Feather name="x" size={27} color={!darkMood?"black":"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postbo} onPress={handelPostPress}>
                <Text style={styles.PostInButtonText}>{!language?"Post":"انشر"}</Text>
            </TouchableOpacity>
            
            </View>
            <TextInput 
            style={!darkMood?styles.des:styles.desBlack}
            placeholderTextColor={!darkMood?"#161616":"#fff"}
            placeholder={language?"اكتب الوصف الذي تريده"  :'Description|'}
            value={des}
            onChangeText={handelDesChange}
            ></TextInput>
            
            

            {showDateBox&&
                <DateTimePicker
                value={date}
                onChange={onDateChange}
                ></DateTimePicker>
            }
            {showTimeBox&&
                <DateTimePicker
                value={time}
                onChange={onTimeChange}
                mode='time'
                ></DateTimePicker>
            }
            <TouchableOpacity style={styles.photo} onPress={pickImage} >
                
                { !imgPicked?
                <Feather style={styles.uploadIcon} name="upload" size={24} color={!darkMood?"#494949":'white'} />:
                <Image source={{ uri: image }} style={{ width: 370, height: 320 }} />
                }
            </TouchableOpacity>
            
            <View style={styles.pickers}>

                <TouchableOpacity style={styles.Date} onPress={handelDatePress} >
                    <Text style={styles.PostInButtonText}>{!language?"Add a date" :"اضف التاريخ"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Date} onPress={handelTimePress} >
                    <Text style={styles.PostInButtonText}>{!language?"Add a Time" :"اضف وقت"}</Text>
                </TouchableOpacity>
            
            </View>
            <TouchableOpacity style={styles.pic} onPress={pickImage}>
            <AntDesign name="picture"  size={24} color={!darkMood?"black":"white"} />
            </TouchableOpacity>

            <View style={styles.catagory}>
                <Text style={styles.PostInButtonText}>{catgoryId}</Text>
            </View>
            
            <View style={styles.DateValue}>
                <Text style={styles.PostInButtonText}>{date.getFullYear()}/</Text>
                <Text style={styles.PostInButtonText}>{date.getMonth() + 1}/</Text>
                <Text style={styles.PostInButtonText}>{date.getDate()}</Text>
            </View>
            <View style={styles.TimeValue}>
                <Text style={styles.PostInButtonText}>{date.getHours()}:</Text>
                <Text style={styles.PostInButtonText}>{date.getMinutes() }</Text>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default DocPost