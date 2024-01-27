import React from "react";
import { usePageContext } from "../../PageProvider";
import { Image, View, SafeAreaView,Text ,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
const CustomHeader = (props) => {
    const {darkMood,setDarkMood}= usePageContext();
    const {headerTitel,setHeaderTitel}=usePageContext();
    let backGround=darkMood?"#161616":"#fff";
    return (
    <SafeAreaView
        style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        width:"100%",
        backgroundColor: backGround, // Set your desired background color
        height:70,
        alignItems:"center",

        }}
    >
        <Image
        source={darkMood?require("../../assets/logo-removebg-preview2.png"):require("../../assets/logo-removebg-preview.png")}
        style={{
            width: 55,
            height: 55,
            borderRadius: 100,
            marginRight: 15,
        }}
        />
        <Text
        style={{
            fontSize:18,
            fontWeight:400,
            alignItems:'center',
            color:darkMood?"#fff":"#161616"
        }}
        >{headerTitel}</Text>


        <TouchableOpacity  style={{
            position:'absolute',
            left:'97%',
            top:'49%',
            }}>
            <Ionicons name="notifications" size={24} color={darkMood?"white":"black"} />
        </TouchableOpacity>
    </SafeAreaView>
    );
};

export default CustomHeader;