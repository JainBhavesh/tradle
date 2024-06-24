import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const buyerTabBarScreenStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      width: "100%",
      height: scaleHeight(60),
    },
    tab: {
      borderRadius: scaledSize(20),
      width: scaleWidth(90),
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContainer:{
      height: scaleHeight(60),
      marginBottom:scaleHeight(5)
    }
  });
