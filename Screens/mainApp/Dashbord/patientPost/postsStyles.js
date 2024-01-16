import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        flexWrap:'wrap',
        overflow:'visible',
    },
    mainBox:{
        width:"100%",
        height:"109%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        overflow:'scroll',
    },
    mainBox1:{
        width:"100%",
        height:"40%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        overflow:'scroll',
    },
    profilePic:{
        position:"absolute",
        top:"2%",
        left:"5%",
        borderRadius:50,
        width:45,
        height:45,
    },

    nameAndDateV:{
        width:"100%",
        height:30,
        flexDirection:"row",
        position:"absolute",
        top:"2%",
        left:"25%",
    },
    nameAndDateV1:{
        width:"100%",
        height:30,
        flexDirection:"row",
        position:"absolute",
        top:"7%",
        left:"25%",
    },
    nameAndDateVPos:{
        position:'relative',
        width:"100%",
    },
    name:{
        position:'absolute',
        left:"1%",
        fontSize:18,
        fontWeight:'500',
        bottom:15,

    },
    date:{
        position:'absolute',
        left:"79%",
        fontSize:12,
        top:0,
        
        color:"#8f8f8f91",

    },
    des:{
        position:"absolute",
        top:"5%",
        borderRadius:50,
        left:"25%",
        width:"100%",
        height:"100%",

    },
    des1:{
        position:"absolute",
        top:"19%",
        borderRadius:50,
        left:"25%",
        width:"100%",
        height:"100%",

    },
    postImage:{
        position:"absolute",
        top:'21%',
        left:'22%',
        width:310,
        height:250,
        borderRadius:21,
        overflow:'hidden',
        alignItems:"center",
    },
})