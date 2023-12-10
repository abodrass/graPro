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
    focusedInput: {
      borderColor: '#B5E6FA',
    },

    signContener:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      position:'relative'
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
    buttonGradient: {
      flexDirection:'row',
      display:'flex',
      backgroundColor: '#4cb5f9',
      borderRadius: 50,
      width: '80%',
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      alignSelf:'flex-start'
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
      bottom:10,
      paddingLeft:'27%',
      color: 'white',
      fontWeight:'500'
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
  needHelpR: {
    position:'absolute',
    alignSelf:'flex-start',
    top:35,
    paddingRight:'6%',
    marginLeft:19,
    color: 'white',
    fontWeight:'500'
},
left25:{
    left:20,
},
right25:{
    right:25,
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
  });