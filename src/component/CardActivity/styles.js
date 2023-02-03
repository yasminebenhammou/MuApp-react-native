import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  activities: {
    padding: 3
  },

  activity: {
    position: 'relative'
  },
  sliderItem: {
    marginTop:20,
    marginRight:10,
  },
  activity_image: {
    padding:20,
    height: 180,
    width:200
    },
  activity_text: {
    backgroundColor: "white",
    opacity: 0.9,
  paddingTop:10,
  paddingRight:20,
    paddingLeft:15,
    paddingBottom:10,
    borderRadius: 5,
    position: 'absolute',
    left: 3,
    bottom: 10,
    flex: 1,
    margin: 10,
    fontSize: 15
  },
  more: {
    display: "flex",
    position: "absolute",
    top: 10,
    right: 15,
    backgroundColor: "white",
    opacity: 0.9,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40
  },



})