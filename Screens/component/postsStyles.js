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
        width:"95%",
        height:"90%",
        padding:47,
        backgroundColor:"#dddddd",
        justifyContent:'center',
        borderRadius:20,
        position:'relative',
        overflow:'scroll',
        left:"2%",
    },
    mainBoxDark:{
        width:"95%",
        height:"90%",
        padding:47,
        backgroundColor:"#2e2d2d",
        justifyContent:'center',
        borderRadius:20,
        position:'relative',
        left:"2%",
        backgroundColor:"#2e2d2d",
        overflow:'scroll',
    },
    mainBox1:{
        width:"95%",
        height:"25%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        backgroundColor:"#dddddd",
        borderRadius:20,
        overflow:'scroll',
        left:"2%",
    },
    mainBox1Dark:{
        width:"95%",
        height:"25%",
        padding:47,
        justifyContent:'center',
        position:'relative',
        backgroundColor:"#2e2d2d",
        borderRadius:20,
        overflow:'scroll',
        left:"2%",
    },

    aprovelmainBoxDark:{
        width:"95%",
        height:"120%",
        padding:47,
        justifyContent:'center',
        left:"2%",
        position:'relative',
        backgroundColor:"#2e2d2d",
        borderRadius:20,
        overflow:'scroll',
    },
    aprovelmainBox:{
        width:"95%",
        height:"120%",
        padding:47,
        justifyContent:'center',
        backgroundColor:"#dddddd",
        position:'relative',
        borderRadius:20,
        overflow:'scroll',
        left:"2%",
    },
    profilePic:{
        position:"absolute",
        top:"2%",
        left:"5%",
        borderRadius:50,
        width:45,
        height:45,
    },
    profilePicAprovel:{
        position:"absolute",
        top:"10%",
        left:"5%",
        borderRadius:50,
        width:45,
        height:45,
    },
    profilePic1Aprovel:{
        position:"absolute",
        top:"7%",
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
        top:"25%",

        left:"30%",
        width:"90%",
        height:"100%",

    },
    des1Dark:{
        position:"absolute",
        top:"25%",

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
        left:'10%',
        width:350,
        height:250,
        borderRadius:21,
        overflow:'hidden',
        alignItems:"center",
    },
    postDate:{
        flexDirection:'row',
        position:"absolute",
        top:"13%",
        color:'#fff',
        left:"25%",
        width:"90%",
        height:"100%",
    },
    DarkpostDate:{
        flexDirection:'row',
        position:"absolute",
        top:"13%",
        color:'#161616',
        left:"25%",
        width:"90%",
        height:"100%",
    },
    time:{
        left:'23%',
        color:'#fff'
    },
    timeDark:{
        left:'23%',
        color:'#161616'
    },
    horizontalLine: {
        borderBottomColor: '#b6b6b638', // Change the color as needed
        borderBottomWidth: 1,       // Change the thickness as needed
        marginVertical: 10,
        width:"100%"         // Adjust the vertical spacing as needed
    },
    postDateNoImg:{
        flexDirection:'row',
        position:"absolute",
        top:"120%",
        color:'#fff',
        left:"10%",
        width:"90%",
        height:"100%",
    },
    AprovelpostImage:{
        position:"absolute",
        bottom:"2%",
        left:'8%',
        width:350,
        height:250,
        borderRadius:21,
        overflow:'hidden',
        alignItems:"center",
    },
    genderDarkAprovel:{
        color:'#fff',
        marginRight:"10%"
    },
    genderAprovel:{
        color:'#161616',
        marginRight:"10%"
    },
    postDateAprovel:{
        flexDirection:'row',
        position:"absolute",
        top:"20%",
        color:'#fff',
        left:"10%",
        width:"90%",
        height:"100%",
    },
    postDateNoImgAprovel:{
        flexDirection:'row',
        position:"absolute",
        top:"150%",
        color:'#fff',
        left:"15%",
        width:"90%",
        height:"100%",
    },
    postinfoNoImgAprovel:{
        flexDirection:'row',
        position:"absolute",
        top:"100%",
        color:'#fff',
        left:"15%",
        width:"90%",
        height:"100%",
    },
    postinfoAprovel:{
        flexDirection:'row',
        position:"absolute",
        top:"15%",
        color:'#fff',
        left:"10%",
        width:"90%",
        height:"100%",
    },

    Aproveltime:{

        color:'#fff'
    },
    AproveltimeDark:{
        color:'#161616'
    },
    
})