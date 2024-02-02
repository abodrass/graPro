import LogIn from './Screens/login and sginUp/LogIn';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
import SignUp from './Screens/login and sginUp/SignUp';
import Try from "./Screens/Try"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators} from '@react-navigation/stack';
import MainAppPage from './Screens/MainAppNav';
import { usePageContext } from "./PageProvider";
import { StorageKey } from './StorageKey';
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SingUpEmailAuth from './Screens/login and sginUp/SingUpEmailAuth';
import ForgetPaawordAuth from './Screens/login and sginUp/ForgetPaawordAuth';
import ForgetPassword from './Screens/login and sginUp/ForgetPassword';
import RestPassword from'./Screens/login and sginUp/RestPassword';
export default function Nav() {
    const {tokenFlag, setTokenFlag}= usePageContext();
    const Stack = createStackNavigator();
    const [tokenExists, setTokenExists] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const storedToken = await AsyncStorage.getItem(StorageKey.STORAGE_KEY_TOKEN);
            setTokenExists(storedToken !== null);
        };

        checkToken();
    }, [tokenFlag]);


    return (
        <NavigationContainer style={styles.container}>
            {tokenExists ? (
                <Stack.Navigator
                    initialRouteName="MainAppPage"
                    screenOptions={{
                        headerShown: false,
                        tabBarVisible: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name="MainAppNav" component={MainAppPage} options={{ headerShown: false, tabBarVisible: false }} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator
                    initialRouteName="LogIn"
                    screenOptions={{
                        headerShown: false,
                        tabBarVisible: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false, tabBarVisible: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, tabBarVisible: false }} />
                    <Stack.Screen name="SingUpEmailAuth" component={SingUpEmailAuth} options={{ headerShown: false, tabBarVisible: false }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false, tabBarVisible: false }} />
                    <Stack.Screen name="ForgetPaawordAuth" component={ForgetPaawordAuth} options={{ headerShown: false, tabBarVisible: false }} />
                    <Stack.Screen name="RestPassword" component={RestPassword} options={{ headerShown: false, tabBarVisible: false }} />
                    {/* Additional screens as needed */}
                </Stack.Navigator>
            )}
        </NavigationContainer>
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