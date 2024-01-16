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
                boxValue: language? props.EnName:props.ARname,
                }); 
                }
                else if(userRole=="\"patient\""){
                    props.navigations.navigate('MainPostNav', {
                        boxValue: language? props.EnName:props.ARname,
                        }); 
                }

            }}>
                
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                }}
            >
            <Image
                source={{ uri: `data:image/jpeg;base64,${props.imgurl}` }}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                />
                <Text style={styles.boxText}>{language? props.EnName:props.ARname}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default Boxs