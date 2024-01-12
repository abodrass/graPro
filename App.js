import LogIn from './Screens/login and sginUp/LogIn';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import SignUp from './Screens/login and sginUp/SignUp';
import { PageProvider } from "./PageProvider";
import Try from "./Screens/Try"
import Animated from 'react-native-reanimated';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import MainAppPage from './Screens/MainAppNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY_TOKEN } from './Screens/login and sginUp/LogIn';
import { usePageContext } from "./PageProvider";
import Nav from './Nav';
export default function App() {
  return (
    <PageProvider>
      <Nav></Nav>
    </PageProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    backgroundColor: '#ffff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    
  },})

