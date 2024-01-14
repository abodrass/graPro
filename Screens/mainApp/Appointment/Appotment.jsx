import React from 'react'
import { StyleSheet,SafeAreaView , ScrollView,Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppointmentBoxs from './AppointmentBoxs';
import { usePageContext } from "../../../PageProvider";
const TopTabs = createMaterialTopTabNavigator();

export function TopTabsGroup() {
    return (
        <TopTabs.Navigator
        screenOptions={{
            tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#1DA1F2",
        },
        }}
        >
        <TopTabs.Screen
            name="main"
            component={Appotment}
            options={{
            tabBarLabel: "Active",
            }}
        />
        <TopTabs.Screen name="past" component={AppotmentPast } />
        <TopTabs.Screen name="Cancelled" component={AppotmentCancelled } />
    </TopTabs.Navigator>
    );
}

const appointmentGenrate =(type)=>{
    //must be the number of the appotment in the database 
    let appointments=[];
    for(let i=0;i<3;i++){
        appointments.push(
            <AppointmentBoxs name={""} date={""} time={""} phone={""} type={type} ></AppointmentBoxs>
        )
    }
    return appointments
}
const Appotment = () => {
return (
    <ScrollView  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
        {appointmentGenrate("act")}
    </ScrollView>
    )
}


const AppotmentPast = () => {
    return (
        <ScrollView  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {appointmentGenrate("past")}
        </ScrollView>
        )
    }

const AppotmentCancelled = () => {
    return (
        <ScrollView  contentContainerStyle={{ justifyContent: 'flex-start', flexWrap:'wrap',flexDirection: 'row', }} >
            {appointmentGenrate("can")}
        </ScrollView>
        )
    }
        

export default Appotment;