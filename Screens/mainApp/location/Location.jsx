import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { usePageContext } from '../../../PageProvider'; // Import your page context as needed

const Location = () => {
    const { darkMood, language } = usePageContext();

    return (
        <View style={{ alignItems: 'center',justifyContent:'center', paddingTop: 20, width: '100%', height: '100%', backgroundColor: darkMood ? "#161616" : "#fff" }}>
            <Text style={{color:!darkMood ? "#161616" : "#fff", bottom:10}}>{language ? 
            
            "الموقع الاول : اربد مقابل مدينة الحسن الرياضية في شارع الدفاع" : "first location : irbid  Opposite Al-Hasan Sport City"}</Text>

<Text style={{color:!darkMood ? "#161616" : "#fff", bottom:10}}>{language ? 
            
            "الموقع الثاني :جامعة العلوم والتكنولوجيا في المباني الطبيه D" : "The second location :Jordan University of Science and Technology in the Medical Buildings D."}</Text>
        </View>
    );
};

export default Location;