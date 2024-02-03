import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { usePageContext } from "../../PageProvider";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import { StyleSheet, ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import Dashbord from '../mainApp/Dashbord/Dashbords';
import Main from './Main';
import Appotment from '../mainApp/Appointment/Appotment';
import Notes from '../mainApp/notes/Notes';
import { useFocusEffect } from '@react-navigation/native';
const MainNav = (props) => {
    const Stack = createStackNavigator();
    const {darkMood,setDarkMood}= usePageContext();
    const {language,setLanguage}= usePageContext();
    const {headerTitel,setHeaderTitel}= usePageContext();
    useFocusEffect(()=>{
        setHeaderTitel(language?"الصفحة الرئيسية":"main page");
    });
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerShown: false,
                    tabBarVisible: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen name="Dashbord" component={Dashbord} options={{ headerShown: false, tabBarVisible: false }} />
                <Stack.Screen name="Main" navigation={props.navigation} component={Main} options={{ headerShown: false, tabBarVisible: false }} />
                <Stack.Screen name="app" navigation={props.navigation} component={Appotment} options={{ headerShown: false, tabBarVisible: false }} />
                <Stack.Screen name="Notes" navigation={props.navigation} component={Notes} options={{ headerShown: false, tabBarVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer> 
    )
}

export default MainNav;