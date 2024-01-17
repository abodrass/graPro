import React from 'react'

import { usePageContext } from "../../../../PageProvider";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import PatientPostPick from './PatientPostPick';
import AppointmentPost from './AppointmentPost';

const MainPostNav = ({route}) => {
    const Stack = createStackNavigator();
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {catgoryId} = route.params;
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator
                initialRouteName="AppointmentPost"
                screenOptions={{
                    headerShown: false,
                    tabBarVisible: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen name="AppointmentPost" component={AppointmentPost}  initialParams={{ catgoryId: catgoryId }}  options={{ headerShown: false, tabBarVisible: false }} />
                <Stack.Screen name="PatientPostPick" component={PatientPostPick} options={{ headerShown: false, tabBarVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer> 
    )
}

export default MainPostNav;