import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const platformScreenStyles = ({ textColor,backgroundColor,secondaryColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor
    },
    imageStyle: {
      height: scaleHeight(100),
      width: scaleWidth(100),
      // borderRadius:scaledSize(100)
    },
    desc: {
      fontSize: scaledSize(18),
      color: color.theme5.primaryColor,
      marginBottom: scaleHeight(60),
      textAlign: 'center',
    },
    desc2: {
      fontSize: scaledSize(18),
      color: 'black',
      marginBottom: scaleHeight(60),
      textAlign: 'center',
    },
    listContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleHeight(20)
    },
    checkImgStyle: {
      height: scaleHeight(50),
      width: scaleWidth(50),
      position: 'absolute',
      left: scaleWidth(90),
      top: scaleHeight(20)
    },
  });
