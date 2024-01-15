import React from 'react'
import { styles } from '../../ScreensStyles/dashbordStyles';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { usePageContext } from "../../../PageProvider";




const Boxs = (props) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    console.log(props.keys);
    console.log(props.imgurl);
    return (
        <TouchableOpacity  style={darkMood?styles.box:styles.boxDark } 
            onPress={() => {
                props.navigations.navigate('DocPost', {
                boxValue: props.EnName,
                });
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
                <Text style={styles.boxText}>{props.EnName}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default Boxs