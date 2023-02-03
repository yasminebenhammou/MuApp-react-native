
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingBottom: 20

    },
    logo: {
        justifyContent: 'flex-end',
        aspectRatio: 2,
        resizeMode: 'contain',
        paddingLeft: 20,
        paddingRight: 20
    },
    topnav: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    languageContainer: {
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    activeLanguage: {
        fontWeight: '500',
        justifyContent: 'space-between',
        alignItems:'center',
        margin:5,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
 
    },
    inactiveLanguage: {
        fontWeight: '500',
        justifyContent: 'space-between',
        opacity: .3,
        margin:5

    },
    sliderContainer: {
        flex: 1,
        width: '100%',

    },
    home: {
        margin: 50
    },
    enjoyContainer: {
        marginBottom: 25
    },
    enjoy: {
        textAlign: 'center',
        color: 'rgba(26, 97, 107, 0.9)',
        fontWeight: '600',
        fontSize: 25,
    },
    activitiesText: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 22,

    },
    floating_view: {
        position: 'absolute',
        backgroundColor: 'lightpink',
        padding: 10,
        alignSelf: 'flex-end',
    },
    mapview: {
        width: '100%',
        height: '100%',
    },
    mapview_container: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {

    },
    popup_content: {

    },
    handicap_btn: {

    },
    normal_btn: {

    },

    background:{      
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        zIndex: 2,
        marginTop: '60%',
        padding: '10%',
      },
      backgroundImage:{
        marginTop: 0,
                paddingTop: 0,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
      },
       text: {
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
       },
      head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
      },
      
    link:{
        textDecoration: 'none',
        color: 'black',
    
      },
      
      textP: {
        paddingTop: 25,
        fontSize: 20,
      },
      
      button :{
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#CB2F06',
        width:'100%',
        alignItems:'center',

      },
      titleDetail:{
        fontSize: 28,
        fontWeight:"600",
        marginBottom:10,

      },
      description:{
        fontSize: 16,

        fontWeight:"500"
      },
      buttonTxt:{
        color: 'white',
        fontSize: 20,
fontWeight:"500"

      },
      lastp: {
        marginBottom:  100,
      },
            
      back: {
        display: 'flex',
        backgroundColor: 'white',
        opacity:.9,
        marginLeft:20,
      padding:10,
        borderRadius: 5,
        alignItems: 'center',
        width:50,
        justifyContent: 'center',
        marginTop: '5%',
         shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
    scanContainer:{
        flex:1,
        width: '100%',
        backgroundColor:'white',
        marginTop:50,
    },
    scanText:{
        marginBottom: 100,
        marginTop: 0,
        marginRight:30,
        textAlign:'center',
        padding:30,

    },
    scanButton:{
        marginTop: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#1a616b',
        width:'50%',
        justifyContent:'center'
    },
    scanBtnText:{
 color:'white',
 fontWeight:'500'
    },
    exhibitionFrame:{
    marginTop:40
    }
})