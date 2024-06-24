import { StyleSheet } from 'react-native';

import {
  color,
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const negotiatioStyles = ({ textColor }: Palette) =>
  StyleSheet.create({
    main: {
      backgroundColor: color.theme5.backgroundColor,
    },
    title:{
      paddingTop:scaledSize(40),
      textAlign:'center',
      color:color.theme5.primaryColor,
      fontSize:scaledSize(40)
    },
    img:{
      height:scaleHeight(320),
      width:scaleWidth(320),
      alignSelf:'center',
    },
    messageContainer: {
      marginBottom: 8,
      alignItems: 'flex-start',
      paddingHorizontal:scaleWidth(10),
    },
    recieverMessage: {
      backgroundColor: '#ebf6fa',
      padding: 8,
      borderRadius: 8,
      maxWidth: '70%',
      alignSelf:'flex-start',
      marginVertical:scaleHeight(8),
      paddingHorizontal:scaleWidth(20),
      flexDirection:'row'
    },
    senderMessage: {
      backgroundColor: '#ebf6fa',
      padding: 8,
      borderRadius: 8,
      maxWidth: '70%',
      alignSelf:'flex-end',
      marginVertical:scaleHeight(8),
      paddingHorizontal:scaleWidth(20),
      flexDirection:'row'
    },
    recieverMessage2: {
      backgroundColor: 'white',
      borderRadius: 8,
      maxWidth: '70%',
      alignSelf:'flex-start',
      flexDirection:'row',
    },
    senderMessage2: {
      backgroundColor: 'white',
      borderRadius: 8,
      maxWidth: '70%',
      alignSelf:'flex-end',
      flexDirection:'row'
    },
    messageText: {
      color: 'black',
    },
    header:{textAlign:'center',color:color.theme5.primaryColor,marginBottom:scaleHeight(15)},
    newInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      fontSize: 16,
      padding:10,
      height:scaleHeight(50),
      width:scaleWidth(290),
      borderRadius:scaledSize(10),
    },
    container: {
      height:"90%"
    },
    buttonContainerStyle:{
      width:scaleWidth(50),
      backgroundColor:'#1e94d4',
      alignSelf:'center',
      borderRadius:scaledSize(10),
      height:scaleHeight(50),
      marginLeft:scaleWidth(5)
  },
  profileImg:{
    height:scaleHeight(30),
    width:scaleWidth(30),
    borderRadius:scaledSize(20),
    alignSelf:'center',
    marginRight:10
  }
  });
