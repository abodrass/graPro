import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'column',
        padding: '2%',
        paddingTop:"5%"
    },
    darkContainer: {
        flex: 1,
        fontFamily: 'Roboto',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        position: 'relative',
        backgroundColor: '#161616',
        flexDirection: 'column',
        padding: '2%',
        paddingTop:"5%"
    },

    darkmodeIcon: {
        position: 'absolute',
        left: '10%',
        top: '10%',
        height: 27,
        objectFit: 'contain',
        width: 27,
    },


    title:{
        width:"100%",
        marginTop:"10%",
        height:55,
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:10,
        paddingLeft:15,
        paddingRight:20

    },
    des:{

        width:"100%",
        height:140,
        paddingLeft:15,
        paddingRight:20,
        color:"white",
        fontSize:18,
    },
    desDetels:{
        width:"100%",
        top:50,
        height:140,
        
        paddingLeft:15,
        paddingRight:20,
        color:"white",
        fontSize:18,
    },
    DarkDesDetels:{
        width:"100%",
        top:50,
        height:140,
        paddingLeft:15,
        paddingRight:20,
        color:"#161616",
        fontSize:18,
    },
    Date:{
        alignSelf:'center',
        justifyContent:'center',
        width:"30%",
        height:70,
        backgroundColor:"#4cb5f9",
        color:"white",
        borderRadius:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:"center",
        padding:15,
        margin:10
    },

    catagory:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#4cb5f9",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 10,
        right: 0,
        alignItems:"center",
        justifyContent:"center"
    },
    DateValue:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#4cb5f9",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 10,
        right: 0,
        flexDirection:"row",
        alignSelf:'flex-start',
        alignItems:"center",
        justifyContent:"center",

    },
    TimeValue:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#4cb5f9",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 280,
        right: 0,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    acceptValue:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#27ff20",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 280,
        right: 0,
        flexDirection:"row",
        alignSelf:'flex-start',
        alignItems:"center",
        justifyContent:"center",
    },
    rejectValue:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#ff4848",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 10,
        right: 0,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    messengeValue:{
        borderStyle:"solid",
        width:'26%',
        height:26,
        backgroundColor:"#4cb5f9",
        borderRadius:10,
        position: 'absolute',
        bottom: 9,
        left: 145,
        right: 0,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },

    photo:{
        alignSelf:'center',
        width:"90%",
        height:300,
        borderRadius:25,
        justifyContent:'center',
        alignItems:"center",
        padding:15,
        left:5,
        overflow:'hidden'
    },
    uploadText:{
        alignSelf:"flex-start",
        bottom:30,
        
    },
    uploadTextAr:{
        alignSelf:"flex-end",
        bottom:10,
        color:"rgba(182, 181, 181, 0.549)"
    },
    uploadIcon:{
        bottom:5,
        
    },

    postbo:{
        position:"absolute",
        backgroundColor:"#4cb5f9",
        left:"80%",
        width:"20%",
        height:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:"center",
        color:"#fff"
    },
    PostInButtonText: {
        color: 'white',
        fontWeight: '800',
    },
    box: {
        width: '42%', // Adjust width as needed, leaving some space for margin
        height: 200,
        backgroundColor: 'rgba(71, 69, 69,.7)',
        marginLeft:'6.5%',
        marginTop:'10%',
        borderRadius:21,
        overflow:'hidden'
    
    },
    pickers:{
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center'
    },
    pic:{

        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 0,
    },
    boxDark: {
        width: '42%', // Adjust width as needed, leaving some space for margin
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.727)',
        marginLeft:'6.5%',
        marginTop:'10%',
        borderRadius:21,
        overflow:'hidden' 
        },
        allview:{
            flex:1
        },
        profilePic:{
            width:50,
            height:50,
            borderRadius:40,
            bottom:15,
            left:"60%"
        },
        profilePic1:{
            width:50,
            height:50,
            borderRadius:40,
            bottom:15,
            left:80,
        },
        patientName:{
            left:'66%',
            bottom:30,
            color:'#161616'
        },
        patientNameDark:{
            left:'66%',
            bottom:30,
            color:'#fff'
        },
        viewDes:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        },
        ArDarkDesDetels:{
            width:"100%",
            top:60,
            right:"40%",
            paddingLeft:15,
            paddingRight:20,
            color:"#161616",
            fontSize:18,
        },
        ArdesDetels:{
            width:"100%",
            top:60,
            right:"40%",
            height:140,
            paddingLeft:15,
            paddingRight:20,
            color:"white",
            fontSize:18,
        },


        postinfoNoImgAprovel:{
                flexDirection:'row',
                position:"absolute",
                top:"40%",
                color:'#fff',
                left:"5%",
                width:"90%",
                height:"100%",
        },
        postinfoAprovel:{
                flexDirection:'row',
                position:"absolute",
                top:"80%",
                color:'#fff',
                left:"8%",
                width:"90%",
                height:"100%",
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
            top:"85%",
            color:'#fff',
            left:"8%",
            width:"90%",
            height:"100%",
        },
        postDateNoImgAprovel:{
            flexDirection:'row',
            position:"absolute",
            top:"50%",
            color:'#fff',
            left:"5%",
            width:"90%",
            height:"100%",
        },
        Aproveltime:{

            color:'#fff'
        },
        AproveltimeDark:{
            color:'#161616'
        },
});
