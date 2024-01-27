import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView,ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard, ActivityIndicator } from 'react-native';
import Posts from '../../component/posts';
import { styles } from '../../component/postsStyles';
import { url } from '../../../APIURLS';
import { usePageContext } from "../../../PageProvider";
import { useEffect } from 'react';
import axios from 'react-native-axios';
import NoResult from '../../component/NoResult';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import Aprovel from './Aprovel';
import PostDetels from '../../component/PostDetels';
import { useFocusEffect } from '@react-navigation/native';
const AprovelNav = () => {
    const Stack = createStackNavigator();
    const {headerTitel,setHeaderTitel}= usePageContext();
    const {language}= usePageContext();
    useFocusEffect(()=>{
      setHeaderTitel(language?"المواعيد المطلوبه":"aprovel page");
  });
  return (

        <NavigationContainer independent={true} >
        <Stack.Navigator
        initialRouteName="Aprovel"
        screenOptions={{
            headerShown: false,
            tabBarVisible: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Aprovel" component={Aprovel} options={{ headerShown: false, tabBarVisible: false }} />
        <Stack.Screen name="PostDetels" component={PostDetels} options={{ headerShown: false, tabBarVisible: false }} />
        
    </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default AprovelNav