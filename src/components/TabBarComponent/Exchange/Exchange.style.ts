import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const exchangeStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    container:{
        height: scaleHeight(160),
        width: '100%',
        backgroundColor:color.theme5.primaryColor,
        borderRadius:scaledSize(10),
        justifyContent:'space-between',
        flexDirection:'row',
        padding:scaledSize(10)
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        width: "100%",
        height: scaleHeight(60),
        paddingHorizontal:scaleWidth(6)
      },
      tab: {
        borderRadius: scaledSize(20),
        width: scaleWidth(80),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.theme5.primaryColor,
      },
      scrollContainer:{
        height: scaleHeight(60),
        marginBottom:scaleHeight(5)
      }
  });
