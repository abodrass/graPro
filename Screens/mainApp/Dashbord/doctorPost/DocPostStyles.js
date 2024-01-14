import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
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
        fontFamily: 'Roboto',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        position: 'relative',
        backgroundColor: 'rgb(71, 69, 69)',
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
        height:100,
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:10,
        marginTop:30,
        paddingLeft:15,
        paddingRight:20
    },

    catagory:{
        width:"100%",
        height:55,
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:10,
        marginTop:30,
        justifyContent:"center",
        paddingLeft:20,
        paddingRight:20
    },

    photo:{
        width:"100%",
        height:170,
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:"center",
        padding:15
    },
    uploadText:{
        alignSelf:"flex-start",
        bottom:50,
        
    },
    uploadTextAr:{
        alignSelf:"flex-end",
        bottom:50,
        color:"rgba(182, 181, 181, 0.549)"
    },
    uploadIcon:{
        bottom:5,
        
    },

    postbo:{
        alignSelf:'center',
        width:"30%",
        height:45,
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center",
        marginTop:30,
        top:60
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
    boxDark: {
        width: '42%', // Adjust width as needed, leaving some space for margin
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.727)',
        marginLeft:'6.5%',
        marginTop:'10%',
        borderRadius:21,
        overflow:'hidden' 
        },
});
