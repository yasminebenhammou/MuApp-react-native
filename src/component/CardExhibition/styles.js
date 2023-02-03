import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  exhibition: {
    flexShrink:1,
    flexDirection:'row',
    marginBottom:25,
    
  },
  exhibitionText: {
   paddingLeft:13,
   flex: 1,
    justifyContent:'space-between',
    width: 25,
  },
  title: {
    fontSize: 20,
    fontWeight:'500',
    
  },
  exhibitionBtn: {
    display:'flex',
    justifyContent:'center',
    alignContent:'flex-end',
    backgroundColor: '#1a616b',
    opacity: 0.9,
    padding:5,
    border: 'none',
    borderRadius: 3,
    width:130
  },
  buttonText:{
    fontSize: 20,
   textAlign:'center',
    color: 'white',
    fontWeight:'500'
  },
  description: {
    fontSize: 16,
    flexShrink: 1 
  },
  exh_images:{
      padding:20,
      height: 180,
      width:150
          
  },

})