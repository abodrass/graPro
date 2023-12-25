
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import { PageProvider } from '../PageProvider';
import { styles } from './ScreensStyles/logIn';
import Dashbord from './mainApp/Dashbord';
import { Ionicons } from '@expo/vector-icons';
import Profile from './mainApp/profile';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import Settings from './mainApp/Settings';
const Tab = createBottomTabNavigator();
const TabGroup =()=>{
  return(
    <Tab.Navigator
  screenOptions={({ route, navigation }) => ({
    tabBarIcon: ({ color, focused, size }) => {
      let iconName;
      let label = ''; // Empty label to remove the text

      if (route.name === 'Dashbord') {
        iconName = focused ? 'home' : 'home-outline';
        color = focused ? 'rgb(43, 39, 39)' : 'rgb(119, 115, 115)';
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
      } else if (route.name === 'Profile') {
        iconName = focused ? 'user' : 'user-o';
        color = focused ? 'rgb(43, 39, 39)' : 'rgb(119, 115, 115)';
        
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
        color = focused ? 'rgb(43, 39, 39)' : 'rgb(119, 115, 115)';
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    },
    tabBarLabel: ({ color, focused, text, size }) => {
      return null; // Return null to remove the label
    },
  })}
>
      
      <Tab.Screen name ="Profile" component={Profile}/>
      <Tab.Screen name ="Dashbord" component={Dashbord}/>
      <Tab.Screen name ="Settings" component={Settings}/>
    </Tab.Navigator>
  )
}
const MainAppPage=({ navigation })=> {


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
      <TabGroup></TabGroup>
    </NavigationContainer>
    </PageProvider>
  );
    }
export default MainAppPage;