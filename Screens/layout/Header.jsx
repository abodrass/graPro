import React from "react";
import { Image, View, SafeAreaView,Text ,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
const CustomHeader = (props) => {
    return (
    <SafeAreaView
        style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        width:"100%",
        backgroundColor: "#C6C5C5", // Set your desired background color
        height:90
        }}
    >
        <Image
        source={require("../../assets/logo-removebg-preview2.png")}
        style={{
            top:15,
            width: 40,
            height: 40,
            borderRadius: 100,
            marginRight: 15,
        }}
        />
        <Text
        style={{
            top:15,
            fontSize:18,
            fontWeight:400,
            left:100,
        }}
        >{props.name}</Text>


        <TouchableOpacity  style={{
            position:'absolute',
            left:'97%',
            top:'64%',
            }}>
            <Ionicons name="menu" size={24} color="white"/>
        </TouchableOpacity>
    </SafeAreaView>
    );
};

export default CustomHeader;