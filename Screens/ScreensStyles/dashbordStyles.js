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
  darkContainer: {
    fontFamily: 'Roboto',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgb(71, 69, 69)',
    flexDirection: 'column',
  },
  inner: {
    paddingTop: '30%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  darkmodeIcon: {
    position: 'absolute',
    left: '10%',
    top: '10%',
    height: 27,
    objectFit: 'contain',
    width: 27,

  },


box: {
    width: '42%', // Adjust width as needed, leaving some space for margin
    height: 200,
    backgroundColor: 'rgba(71, 69, 69,.7)',
    marginLeft:'6%',
    marginTop:'10%',
    borderRadius:21,
    overflow:'hidden',
    alignItems:"center",

    
},

boxText:{
  position:"absolute",
  top:"85%",
  fontSize:16,
  fontWeight:"500",
  color:"#fff"
},
DarkboxText:{
  position:"absolute",
  top:"85%",
  fontSize:16,
  fontWeight:"500",
  color:"#161616"
},
boxImage:{
  borderRadius:20
},
boxDark: {
  width: '42%', // Adjust width as needed, leaving some space for margin
  height: 200,
  backgroundColor: 'rgba(255, 255, 255, 0.727)',
  marginLeft:'6%',
  marginTop:'10%',
  borderRadius:21,
  overflow:'hidden'
  
},
});
