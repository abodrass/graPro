import { StyleSheet, Text,SafeAreaView ,View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,TouchableWithoutFeedback,  Keyboard } from 'react-native';
export const  styles = StyleSheet.create({
    container: {
      fontFamily: 'Roboto',
      backgroundColor:'transparent',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      
    },
    darkContainer:{
      fontFamily: 'Roboto',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      backgroundColor:'transparent'
    },
    inner:{
      paddingTop:'30%',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    darkmodeIcon:{ 
      position:'absolute',
      left:'10%',
      top:'10%',
      height: 27,
      objectFit:'contain',
      width: 27,
      
    },
    langu:{
        position:'absolute',
        left:'90%',
        top:'10%',
        height: 27,
        objectFit:'contain',
        width: 27,
    },
    logoInText:{
      fontFamily: 'Roboto',
      fontSize:24,
      fontWeight:'800',
      alignSelf:'flex-start',
      paddingLeft:10,        marginBottom:24,
      color:'white'
    },
    box:{
      height:'65%',  
      width:'90%',
      alignItems:'center',
      padding:'2%',
      paddingTop:'20%',
      borderRadius:25
    },
    signUpbox:{
      height:'65%',  
      width:'90%',
      alignItems:'center',
      padding:'2%',
      paddingTop:'9%',
      borderRadius:25
    },
    logo: {
      objectFit: 'contain',
      height: '15%',
      width: '35%',
      marginBottom: '15%',
      
    },
    email: {
      width: '95%',
      height: 55,
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderColor: '#bec3c996',
      borderWidth: 2,
      borderRadius: 15,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: '3%',
    },
    age:{
      right:"25%",
      width: '45%',
      height: 55,
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderColor: '#bec3c996',
      borderWidth: 2,
      borderRadius: 15,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: '3%',
      color:"#4cb5f9"
    },
    focusedInput: {
      borderColor: '#B5E6FA',
    },

    wrongInput: {
      borderColor: 'rgb(206, 74, 74)',
    },

    wrongTextColorSignUpL:{
      color:'rgb(206, 74, 74)',
      textAlign:'left',
      alignSelf:'flex-start',
      paddingLeft:'5%',
      bottom:"28%"
    },
    wrongTextColorL:{
      color:'rgb(206, 74, 74)',
      textAlign:'left',
      alignSelf:'flex-start',
      paddingLeft:'5%',
   
    },
    wrongTextColorR:{
      color:'rgb(206, 74, 74)',
      textAlign:'right',
      alignSelf:'flex-end',
      paddingRight:'5%'
    },
    wrongTextColorSignUpR:{
      color:'rgb(206, 74, 74)',
      textAlign:'right',
      alignSelf:'flex-end',
      paddingRight:'5%',
      bottom:"28%"
    },

    signContener:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      position:'relative'
    },
    
    signContener1:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      position:'relative',
      bottom:"10%"
    },
    signIn: {
      width: '45%',
      borderRadius: 50,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      alignSelf:'flex-start',
      marginLeft:4,
      marginTop:25,
      
    },
      signIn: {
      width: '45%',
      borderRadius: 50,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      alignSelf:'flex-start',
      marginLeft:4,
      marginTop:25,
      
    },
    signInage: {
      width: '35%',
      borderRadius: 50,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      alignSelf:'flex-start',
      marginLeft:4,
      marginTop:10,
      
    },
    buttonGradient: {
      flexDirection:'row',
      display:'flex',
      backgroundColor: '#4cb5f9',
      borderRadius: 50,
      width: '90%',
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      alignSelf:'flex-start',
      
    },
    signInButtonText: {
      color: 'white',
      fontWeight: '800',
    },
    bottomTextContainer: {
      alignSelf:'center',
      alignItems:'center',
      backgroundColor:'#4cb5f9',
      width: '80%',
      height:"8%",
      justifyContent: 'center',
      borderRadius: 30,
    
    },
    signUp: {
      color: 'white',
      fontWeight:'800',
      right:25,
      fontSize:15,
      width:'50%',
      height:'60',
      alignItems:'center',
      justifyContent:'center',
    },
    needHelp: {
      
      alignSelf:'flex-end',
      top:40,
      paddingLeft:'20%',
      color: 'white',
      fontWeight:'500'
  },
  needHelpR: {
      
 
},
  textLeft:{
    textAlign:'left',
    alignSelf:'flex-end',
    paddingRight:'4%',
    paddingLeft:'24%',
  },
  loginLeft:{
    position:'absolute',
    left:'63%',
    width: '45%',
    borderRadius: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginRight:4,
    marginTop:25,
  },
  Leftage:{
    width: '35%',
    borderRadius: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    alignSelf:'flex-start',
    left:"70%",
    marginLeft:4,
    marginTop:10,
  },
  Leftgender:{
    width: '35%',
    borderRadius: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    alignSelf:'flex-start',
    left:"60%",
    marginLeft:4,
    marginTop:10,
  },
  needHelpR: {
    position:'absolute',
    alignSelf:'flex-start',
    top:40,
    paddingRight:'6%',
    marginLeft:19,
    color: 'white',
    fontWeight:'500'
},
left25:{
    left:60,
},
right25:{
    right:35,
},
blackColor:{
  color:'#494949'
},
SingUplogo: {
  objectFit: 'contain',
  height: '15%',
  width: '35%',
  marginBottom: '1%',
  
},
bottomTextContainerSingUp: {
  marginTop:'5%',
  alignSelf:'center',
  alignItems:'center',
  backgroundColor:'#4cb5f9',
  width: '80%',
  height:"8%",
  justifyContent: 'center',
  borderRadius: 30,

},
bottomTextContainer1:{
  alignSelf:'center',
  alignItems:'center',
  backgroundColor:'#4cb5f9',
  width: '80%',
  height:"8%",
  justifyContent: 'center',
  borderRadius: 30,
},
navtext:{
  fontSize:12,

},
up:{
  bottom:"14%"
}
  });