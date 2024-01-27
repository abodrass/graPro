import React from 'react'
import { styles } from './MainStyles';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from "../../PageProvider";
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Main = (props) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {userRole,setUserRole}=usePageContext();
    const {headerTitel,setHeaderTitel}= usePageContext();
    console.log(userRole);
    const navigation = useNavigation();
    useFocusEffect(()=>{
        setHeaderTitel(language?"الصفحة الرئيسية":"main page");
    });
    return (

    <View style={{flexDirection:"row", flex:1, backgroundColor:!darkMood?"#ffff":"#161616" }}>
        
        <TouchableOpacity  style={darkMood?styles.box:styles.boxDark } onPress={()=>{
            navigation.navigate("Dashbord");

        }} >
                
            <View
                style={{
                    alignItems:language?"flex-end":'flex-start',
                    left:language?-20:20,
                    top:20
                }}
            >   
                {userRole=="\"Patient\""&&<Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? "احجز موعد":"book an appointment"}</Text>}
                {userRole=="\"Patient\""&&          <FontAwesome5 name="book-reader" size={55} color={darkMood?"#fff":"#161616"} style={{
                    
                    left:language?-35:35,
                    top:70
                }} />}

                {userRole=="\"Dentist\""&&<Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? "انشاء موعد":"Create an appointment"}</Text>}
                {userRole=="\"Dentist\""&&          <Ionicons name="create" size={55} color={darkMood?"#fff":"#161616"}  style={{
                    
                    left:language?-35:35,
                    top:70
                }} />}
      
            </View>

        </TouchableOpacity>


        <TouchableOpacity  style={darkMood?styles.box:styles.boxDark } onPress={()=>{
            navigation.navigate("appointment");

        }} >
                
            <View
                style={{
                    alignItems:language?"flex-end":'flex-start',
                    left:language?-20:20,
                    top:20
                }}
            >
                <Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? "مواعيدي":"My appointment"}</Text>
                <Ionicons name={"calendar"} size={55} color={darkMood?"#fff":"#161616"}
                style={{
                    
                    left:language?-35:35,
                    top:70
                }}></Ionicons>
            </View>

        </TouchableOpacity>


        <TouchableOpacity  style={darkMood?styles.widthBox:styles.widthBoxDark } onPress={()=>{
            navigation.navigate("Dashbord");

        }} >
                
            <View
            style={{
                alignItems:language?"flex-end":'flex-start',
                left:language?-20:20,
                top:20
            }}
            >
                <Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? "مواقع العيادات":"Clinic sites"}</Text>
                <Entypo name="location" size={44} color={darkMood?"#fff":"#161616"}
                style={{
                    
                    left:language?"-38%":"38%",
                    top:20
                }} 
                />
            </View>

        </TouchableOpacity>



        <TouchableOpacity  style={darkMood?styles.smallBox1:styles.smallBox1Dark } onPress={()=>{
            navigation.navigate("Dashbord");

        }} >
                
            <View
                style={{
                    alignItems:language?"flex-end":'flex-start',
                    left:language?-20:20,
                    top:20
                }}
            >
                <Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? "ابداء ملاحظاتك":"Give your feedback"}</Text>
                <FontAwesome5 name="sticky-note" size={40} color={darkMood?"#fff":"#161616"}
                 style={{
                    
                    left:language?"-27%":"27%",
                    top:30
                }} />
            </View> 

        </TouchableOpacity>







    </View>



    )
}

export default Main;