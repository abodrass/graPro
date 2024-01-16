import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import Posts from './posts';
import { styles } from './postsStyles';

const AppointmentPost = ({  navigation  }) => {
    
    const allposts=()=>{
        let post=[];
        let flag=true;
        for (let i=0;i<10;i++){
            post.push(<Posts key={i} id={i}  isImageE={flag} navigations={navigation}></Posts>);
            flag=!flag;
        }

        return post;
    }

        return (
            <ScrollView  style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
                {allposts()}
            </ScrollView>
            )

    
}

export default AppointmentPost