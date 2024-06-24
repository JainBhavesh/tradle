import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const offerStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    title:{
      paddingTop:scaledSize(3),
      textAlign:'center',
      color:color.theme5.primaryColor,
    },
    separator: {
        borderWidth:0.5,
        borderColor:'grey',
        marginBottom:scaleHeight(30),
    },
    box:{
        borderWidth:1,
        borderColor:'#bcbcbc',
        padding:scaleHeight(15),
        borderRadius:scaledSize(10),
        marginTop:scaleHeight(3)
    },
    call:{
        height:scaleHeight(55),
        width:scaleWidth(50),
        alignSelf:'center',
        marginTop:scaleHeight(20)
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
    height:scaleHeight(55),
    width:scaleHeight(55),
    justifyContent:'center',
  },
  container:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center', 
    flexWrap: 'wrap', 
    alignContent: 'stretch',
    height:scaleHeight(300)
  }
});
