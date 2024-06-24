import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const searchStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    flatlistContainer: { justifyContent: 'center', alignItems: 'center' },
    flatlsit: {
      width: '100%',
    },
    title:{textAlign:'center',marginBottom:scaleHeight(15),marginTop:scaleHeight(8),color:color.theme5.primaryColor},
    name:{
        paddingVertical:scaledSize(3),
        paddingLeft:scaledSize(10),
        color:'black',
        fontWeight:'600',
    }
  });
