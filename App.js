import LogIn from './Screens/LogIn';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import SignUp from './Screens/SignUp';
import { PageProvider } from "./PageProvider";
import Try from "./Screens/Try"
import Animated from 'react-native-reanimated';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import MainAppPage from './Screens/MainAppPage';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <PageProvider>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator 
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Try" component={Try}   options={{ headerShown: false, tabBarVisible: false }}   />
        <Stack.Screen name="LogIn" component={LogIn}   options={{ headerShown: false, tabBarVisible: false }}   />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, tabBarVisible: false }}    />
        <Stack.Screen name="MainAppPage" component={MainAppPage} options={{ headerShown: false, tabBarVisible: false }}    />
      </Stack.Navigator>
    </NavigationContainer>
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

