import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { usePageContext } from '../../../PageProvider'; // Import your page context as needed

const Notes = () => {
    const { darkMood, language } = usePageContext();

    const emailTo = 'onlinejustcare@gmail.com';

    const handleEmailPress = () => {
        Linking.openURL(`mailto:${emailTo}`);
    };

    return (
        <View style={{ alignItems: 'center',justifyContent:'center', paddingTop: 20, width: '100%', height: '100%', backgroundColor: darkMood ? "#161616" : "#fff" }}>
            <Text style={{color:!darkMood ? "#161616" : "#fff", bottom:10}}>{language ? "ارسل ملاحظاتك الى البريد الاكتروني التالي" : "send your feedback to this email "}</Text>
            <TouchableOpacity onPress={handleEmailPress}>
                <Text style={{color:!darkMood ? "#4cb5f9" : "#4cb5f9", fontWeight:'500', fontSize:18} }>{emailTo}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Notes;