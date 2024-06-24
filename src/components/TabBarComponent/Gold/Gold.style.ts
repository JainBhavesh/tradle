import { StyleSheet } from 'react-native';

import {
    color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const goldScreenStyles = ({ textColor }: Palette) =>
StyleSheet.create({
  main:{
    backgroundColor:color.theme5.backgroundColor
  },
  flatlistContainer:{ 
    justifyContent:'center',alignItems:'center',

  } ,
  flatlsit:{
    width:'100%',
  },
  leftHeaderIcon:{
    width:scaleHeight(100),
    height:scaleWidth(100),
    alignSelf:'flex-end',
  }
});
