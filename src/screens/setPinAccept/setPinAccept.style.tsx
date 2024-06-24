import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const setPinAcceptStyles = ({ textColor,primaryColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: "#2596be",
            padding:scaledSize(5)
        },
        title:{
            color:'white',
            textAlign:'center'
        },
        titileContainer:{
            height:scaleHeight(100),
            backgroundColor:"#66ccff",
            justifyContent:'center',
            marginHorizontal:scaleWidth(5)
        },
        buttonContainerStyle:{
            width:scaleWidth(150),
            backgroundColor:'white',
            borderWidth:1,
            borderColor:color.theme5.primaryColor,
            alignSelf:'center',
            marginTop:scaledSize(50)
        },
        btnContainer:{flexDirection:'row',justifyContent:'space-around',marginTop:scaleHeight(35)},
        box:{
            borderWidth:1,
            borderColor:'#bcbcbc',
            padding:scaleHeight(15),
            borderRadius:scaledSize(10),
            marginTop:scaleHeight(5)
        },
        call:{
            height:scaleHeight(50),
            width:scaleWidth(50),
            alignSelf:'center',
            marginTop:scaleHeight(30)
        },
        pinContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical:scaleHeight(30),
            marginHorizontal:scaleWidth(20)
          },
          pinBox: {
            width: scaleWidth(50),
            height: scaleHeight(50),
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            borderRadius:scaledSize(5),
            backgroundColor:color.theme5.primaryColor,
            elevation: 8,
            shadowColor: 'white',
            shadowOffset: { height: 2, width: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          },
          pinText: {
            fontSize: scaledSize(30),
            color:'white',
            textAlign:'justify',
            textAlignVertical:'center',
            paddingBottom:2
          },
          pinTextDisplay: {
            marginTop: 20,
            fontSize: 24,
          },
          numpadText: {
            fontSize: 27,
            textAlign: 'center',
        },
        bullet: {
            fontSize: 27,
        },
        numberContainer:{
          borderRadius:scaledSize(50),
          borderWidth:1,
          borderColor:'black',
          height:scaleHeight(60),
          width:scaleHeight(60),
          justifyContent:'center'
        },
        container:{flexDirection: 'row',justifyContent:'center',alignItems:'center', flexWrap: 'wrap', alignContent: 'stretch',height:scaleHeight(400)}
});

