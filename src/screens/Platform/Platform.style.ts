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
      width: scaleWidth(150),
      // borderRadius:scaledSize(100)
    },
    desc: {
      fontSize: scaledSize(20),
      color: color.theme5.primaryColor,
      marginBottom: scaleHeight(60),
      textAlign: 'center',
    },
    desc2: {
      fontSize: scaledSize(23),
      color: color.theme2.primaryColor,
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
      left: scaleWidth(120),
      top: scaleHeight(20)
    },
  });
