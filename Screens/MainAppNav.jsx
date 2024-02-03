
import { StyleSheet, Text, Pressable,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { PageProvider } from '../PageProvider';
import { styles } from './ScreensStyles/logInAndSignUp';
import Dashbords from './mainApp/Dashbord/Dashbords';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { usePageContext } from "../PageProvider";
import React, { useEffect } from 'react';
import Settings from './mainApp/Settings/Settings';
import {TopTabsGroup} from './mainApp/Appointment/Appotment';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from '@expo/vector-icons';
import CustomHeader from './layout/Header';
import AprovelNav from './mainApp/appointmentAprovel/AprovelNav';
import Dashbord from './mainApp/Dashbord/Dashbords';
import Main from './MainPage/Main';
import Notes from './mainApp/notes/Notes';
import Location from './mainApp/location/Location';
const Tab = createBottomTabNavigator();

const TabGroup =(props)=>{
  const {darkMood,setDarkMood}= usePageContext();
  const {language,setLanguage}= usePageContext();
  const {userRole,setUserRole}=usePageContext();
  let tabBarBackground=darkMood?'#161616':'#fff';
  console.log("hii"+userRole);
  const Stack = createStackNavigator();
  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{
            header: () => null,
          }}
          
        />
            <Stack.Screen
          name="Notes"
          component={Notes}
          options={{
            header: () => null,
          }}
          
        />
              <Stack.Screen
          name="Location"
          component={Location}
          options={{
            header: () => null,
          }}
          
        />
      </Stack.Navigator>
    );
  };
  
  const AppointmentStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Appointment"
          component={TopTabsGroup}
          options={{
            header: () => <CustomHeader />,
          }}
        />
        {/* Add other screens to the stack if needed */}
      </Stack.Navigator>
    );
  };
  return(
      <Tab.Navigator
      initialRouteName="Dashbord"
        screenOptions={({ route, navigation }) => ({
          tabBarStyle: {
            backgroundColor: tabBarBackground,
          },
        tabBarIcon: ({ color, focused, size }) => {
        let iconName;
        let label = ''; // Empty label to remove the text

        if (route.name === 'Main') {
          iconName = focused ? 'home' : 'home-outline';
          color = focused ? '#2374E1' : 'rgb(119, 115, 115)';
          return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        }   
        else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
          color = focused ? '#2374E1' : 'rgb(119, 115, 115)';
          return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        }
        else if (route.name === 'appointment') {
          iconName = focused ? 'calendar' : 'calendar-outline';
          color = focused ? '#2374E1' : 'rgb(119, 115, 115)';
          return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        }
        else if(route.name ==='AprovelNav'){
          iconName = focused ? 'check-square' : 'check-square';
          color = focused ? '#2374E1' : 'rgb(119, 115, 115)';
          return <Feather name="check-square" size={size} color={color} />
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarLabel: ({ color, focused, text, size }) => {
        return null; // Return null to remove the label
        },
      })}
    > 
      <Tab.Screen name ="Main" component={MainStack}
              options={{
                header: () => <CustomHeader />,
              }}
              navigation={props.logIN}
      />

      <Tab.Screen name ="appointment" component={TopTabsGroup}
              options={{
                header: () => <CustomHeader />,
              }}
      />

      {userRole ==="\"Dentist\"" && (
        <Tab.Screen
        name="AprovelNav"
        component={AprovelNav}
        logIN={props.navigation} // Note: Ensure you pass props correctly
        options={{
        header: () => <CustomHeader />,
        }}
        />
      )}  
   
    
      <Tab.Screen name ="Settings" component={Settings} logIN={props.navigation}
              options={{
                header: () => <CustomHeader />,
              }}
      />

    </Tab.Navigator>
  )
}

const MainAppPage=({ navigation })=> {

  const Stack = createStackNavigator();
  useEffect(() => {
    const handleBackButton = () => {
      // Do nothing when the back button is pressed
      return true;
    };

    // Add event listener for the hardware back button (Android)
    const backHandler = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      handleBackButton();
    });

    // Clean up the event listener when the component unmounts
    return () => backHandler();
  }, [navigation]);

  return (
    <PageProvider>
    <NavigationContainer style={styles.container} independent={true}>
      <TabGroup logIN={navigation}></TabGroup>
    </NavigationContainer>
    </PageProvider>
  );
    }
export default MainAppPage;