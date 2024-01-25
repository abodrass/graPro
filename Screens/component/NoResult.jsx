import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ImageBackground  } from 'react-native';
import { usePageContext } from '../../PageProvider'
import axios from 'react-native-axios';
import { url } from '../../APIURLS';
import { styles } from '../ScreensStyles/appomentStyles';
const NoResult = (props) => {
    return (
        <ImageBackground source={require("../../assets/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg")} style={styles.noResult} >
        
            <Text style={{alignSelf:'center', top:"90%", fontWeight:'600',}}> {props.des}   </Text>
        
        </ImageBackground>
    )
}

export default NoResult