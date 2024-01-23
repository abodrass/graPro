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
    containerDark: {
        fontFamily: 'Roboto',
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        flexWrap:'wrap',
        overflow:'visible',
        backgroundColor:'#161616'
    },
    mainBox:{
        width:"100%",
        height:"90%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        overflow:'scroll',
    },
    mainBoxDark:{
        width:"100%",
        height:"90%",
        padding:47,
        justifyContent:'center',

        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        backgroundColor:'#161616',
        overflow:'scroll',
    },
    mainBox1:{
        width:"100%",
        height:"25%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        overflow:'scroll',
    },
    mainBox1Dark:{
        width:"100%",
        height:"25%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        borderStyle:"solid",
        borderWidth:1,
        backgroundColor:'#161616',
        borderColor:"#b6b6b628",
        borderLeftColor:'transparent',
        borderRightColor:"transparent",
        borderTopColor:"transparent",

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
    profilePic1:{
        position:"absolute",
        top:"7%",
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
        top:"14%",
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
        left:"87%",
        fontSize:12,
        top:0,
        
        color:"#8f8f8f91",

    },
    des:{
        position:"absolute",
        top:"5%",

        left:"30%",
        width:"90%",
        height:"100%",

    },
    desDark:{
        position:"absolute",
        top:"5%",

        left:"30%",
        width:"90%",
        height:"100%",
        color:"white"
    },
    des1:{
        position:"absolute",
        top:"5%",

        left:"30%",
        width:"90%",
        height:"100%",

    },
    des1Dark:{
        position:"absolute",
        top:"15%",

        left:"30%",
        width:"90%",
        height:"100%",
        color:"white"
    },
    desEn:{
        position:"absolute",
        top:"5%",

        left:"24%",
        width:"90%",
        height:"100%",

    },
    desEnDark:{
        position:"absolute",
        top:"5%",

        left:"24%",
        width:"90%",
        height:"100%",
        color:"white"
    },
    postImage:{
        position:"absolute",
        top:'18%',
        left:'22%',
        width:310,
        height:250,
        borderRadius:21,
        overflow:'hidden',
        alignItems:"center",
    },
})