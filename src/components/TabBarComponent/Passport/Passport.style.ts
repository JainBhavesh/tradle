import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const passportScreenStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    flatlistContainer: { justifyContent: 'center', alignItems: 'center' },
    flatlsit: {
      width: '100%',
    },
    leftHeaderIcon: {
      width: scaleHeight(80),
      height: scaleWidth(80)
    },
    separateLine: {
      height: 2,
      backgroundColor: '#1e94d4',
      marginTop: -9,
      width: "70%",
      alignSelf: 'center',
      borderRadius: scaledSize(10)
    },
    container:{
      height: scaleHeight(160),
      width: scaleWidth(176.5),
      marginRight: scaledSize(8),
      marginHorizontal: scaledSize(5),
    },
    suContainer:{
      height: scaleHeight(160), padding: scaledSize(5),justifyContent:'space-between'
    },
    title:{
      marginBottom:scaleHeight(17),
      marginTop:scaleHeight(17),
      marginHorizontal: scaledSize(5)
    },

  });
