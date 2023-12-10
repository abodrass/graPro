import LogIn from './Screens/LogIn';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import SignUp from './Screens/SignUp';
import { PageProvider } from "./PageProvider";
import { SharedTransition } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator();
  const customTransition = SharedTransition.custom((values) => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });
  return (
    <PageProvider>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogIn}   options={{ headerShown: false, tabBarVisible: false }}   sharedTransitionTag="tag"  />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, tabBarVisible: false }}   sharedTransitionTag="tag"/>
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

