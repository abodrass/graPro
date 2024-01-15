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
        backgroundColor: "#fff", // Set your desired background color
        height:70,
        alignItems:"center",

        }}
    >
        <Image
        source={require("../../assets/logo-removebg-preview.png")}
        style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            marginRight: 15,
        }}
        />
        <Text
        style={{
            fontSize:18,
            fontWeight:400,
            left:100,
        }}
        >{props.name}</Text>


        <TouchableOpacity  style={{
            position:'absolute',
            left:'97%',
            top:'49%',
            }}>
            <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
    </SafeAreaView>
    );
};

export default CustomHeader;