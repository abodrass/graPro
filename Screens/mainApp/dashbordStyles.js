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
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
    marginLeft:'5%',
    marginTop:'10%',
    borderRadius:21,
    overflow:'hidden'
    
},
});
