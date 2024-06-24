import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const atomicTranctionStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    title1:{
      padding:scaledSize(1),
      textAlign:'center'
    },
    title2:{
      marginBottom:scaleHeight(17),
      marginTop:scaleHeight(17),
      marginHorizontal: scaledSize(5),
    },
    img:{
      height:scaledSize(150),
      width:scaleWidth(150),
      alignSelf:'center',
      marginTop:scaleHeight(17),
    },
    successImg:{
      height:scaleHeight(320),
      width:scaleWidth(320),
      alignSelf:'center',
      marginTop:scaleHeight(20)
    },
    separator:{
      borderColor:'grey',
      borderWidth:0.3,
    },
    progressBar: {
      height: 20,
      flexDirection: "row",
      width: '100%',
      backgroundColor: '#ecf0f1',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5
    }

  });
