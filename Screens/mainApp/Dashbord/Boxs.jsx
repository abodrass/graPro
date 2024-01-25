import React from 'react'
import { styles } from '../../ScreensStyles/dashbordStyles';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from "../../../PageProvider";




const Boxs = (props) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {userRole,setUserRole}=usePageContext();
    console.log(userRole);
    return (
        <TouchableOpacity  style={darkMood?styles.box:styles.boxDark } 
            onPress={() => {
                console.log(userRole);
                if(userRole==="\"Dentist\""){
                props.navigations.navigate('DocPost', {
                    catgoryId:props.id,
                }); 
                }
                else if(userRole=="\"Patient\""){
                    props.navigations.navigate('MainPostNav', {
                        catgoryId:props.id
                    }); 
                }

            }}>
                
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Image
                    source={{ uri: `data:image/jpeg;base64,${props.imgurl}` }}
                    style={{ width: '100%', height: '80%', position:"absolute",top:0 }}
                />
                <Text style={darkMood?styles.boxText:styles.DarkboxText}>{language? props.ARname:props.EnName}</Text>

            </View>

        </TouchableOpacity>
    )
}

export default Boxs