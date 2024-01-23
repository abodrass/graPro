import React from 'react'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from '../../../../PageProvider';
import { styles } from './postPick';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import { url } from '../../../../APIURLS';
const PatientPostPick = ({ navigation, route  }) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [numImg,setNumImg]=useState(1);
    const [showDateBox,setShowDateBox]=useState(false);
    const [showTimeBox,setShowTimeBox]=useState(false);
    const [imgPicked,setImgPicked]= useState(false);
    const [time ,setTime]=useState(new Date())
    const [date,setDate]=useState( new Date());
    const [des,setDes]=useState("");
    let images=[];
    const {token,setToken}=usePageContext();
    const[text,setText]=useState("Empty");
    const { appointmentId } = route.params;
    const mainTextColor= darkMood?"white":"black";



    const handelPostPress = async () => {

        const requestBody = {
            appointmentId: appointmentId ,
            patientDescription: des.substring(0, 200),
            images:images
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
            const response = await axios.post(url.AppointmentBook, requestBody, {
                headers: headers,
            });
    
            console.log("Response:", response.data);
    
            // Check if the response status is successful (2xx range)
            if (response.status >= 200 && response.status < 300) {
                console.log("Request successful");
                navigation.navigate('AppointmentPost');
                return;
                // Perform actions on successful response
            } else {
                console.error("Request failed with status:", response.status);
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
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
        });
    
        console.log("this is the");
        console.log(result);
    
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
            images.push(result.assets[0].uri);
            if (result.assets[1] && result.assets[1].uri !== null) {
                setImage1(result.assets[1].uri);
                images.push(result.assets[1].uri);
                setNumImg(2);
            }
    
            if (result.assets[2] && result.assets[2].uri !== null) {
                setImage2(result.assets[2].uri);
                images.push(result.assets[2].uri);
                setNumImg(3);
            }
    
            if (result.assets[3] && result.assets[3].uri !== null) {
                setImage3(result.assets[3].uri);
                images.push(result.assets[3].uri);
                setNumImg(4);
            }
    
            setImgPicked(true);
        }
    };
    

        const imageShow=()=>{
                if(numImg==1){ 
                    return(<Image source={{ uri: image }} style={{ width: 370, height: 320 }} />);
                }
                else if(numImg==2){
                    return(
                        <View style={{flexDirection:'row'}}>
                            <Image source={{ uri: image }} style={{ width: 185, height: 320 }} />
                            <Image source={{ uri: image1 }} style={{ width: 185, height: 320 }} />
                        </View>
                    )
                }
                else if(numImg==3){
                    return(
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image source={{ uri: image }} style={{ width: 185, height: 160 }} />
                            <Image source={{ uri: image1 }} style={{ width: 185, height: 160 }} />
                            </View>
                            <Image source={{ uri: image2 }} style={{ width: 185, height: 320 }} />
                        </View>
                    )
                }
                else if(numImg==4){
                    return(
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image source={{ uri: image }} style={{ width: 185, height: 160}} />
                                <Image source={{ uri: image1 }} style={{ width: 185, height: 160}} />
                            </View>
                            <View>
                                <Image source={{ uri: image2 }} style={{ width: 185, height: 160}} />
                                <Image source={{ uri: image3 }} style={{ width: 185, height: 160}} />
                            </View>
                        </View>
                    )
                }
                
        }
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
            navigation.navigate('AppointmentPost')
        }



    return (
        <SafeAreaView style={darkMood?styles.darkContainer:styles.container} >

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 30}
                enabled={Platform.OS === "ios" ? true : false}
                style={styles.allview}
            >
            <View style={styles.rowv}>
            
            <TouchableOpacity onPress={handelBackClick}>
                <Feather name="x" size={27} color={darkMood?"white":"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postbo} onPress={handelPostPress}>
                <Text style={styles.PostInButtonText}>{language?"Book":"احجز"}</Text>
            </TouchableOpacity>
            
            </View>
            <TextInput 
                style={styles.des}
                placeholderTextColor={mainTextColor}
                placeholder={!language?"اكتب الوصف الذي تريده"  :'Description|'}
                value={des}
                onChangeText={handelDesChange}
            ></TextInput>
            
            <TouchableOpacity style={styles.photo} onPress={pickImage} >   
                { !imgPicked?
                <Feather style={styles.uploadIcon} name="upload" size={24} color={darkMood?'white':"#494949"} />:
                imageShow()
                }
            </TouchableOpacity>

            <View style={styles.catagory}>
                <Text style={styles.PostInButtonText}>nothing</Text>
            </View>
            
            <View style={styles.DateValue}>
                <Text style={styles.PostInButtonText}>{date.getFullYear()}/</Text>
                <Text style={styles.PostInButtonText}>{date.getMonth() + 1}/</Text>
                <Text style={styles.PostInButtonText}>{date.getDate()}</Text>
            </View>
            <View style={styles.TimeValue}>
                <Text style={styles.PostInButtonText}>{time.getHours()}:</Text>
                <Text style={styles.PostInButtonText}>{time.getMinutes() }</Text>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default PatientPostPick