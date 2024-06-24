import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const acceptAndDecStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: color.theme5.backgroundColor,
            padding:scaledSize(5)
        },
        title:{
            marginTop:scaledSize(12),
            // fontSize:scaledSize(32),
            color:color.theme5.primaryColor,
            textAlign:'center'
        },
        desc:{
            marginTop:scaledSize(17),
            paddingHorizontal:scaleWidth(10)
        },
        tic:{
            height:scaleHeight(30),
            width:scaleWidth(30),
            marginLeft:-5,
        },
        ticBg:{
            height:scaleHeight(20),
            width:scaleWidth(20),
            borderWidth:1,
            borderRadius:scaledSize(3),
            marginTop:2,
            marginRight:scaledSize(5)
        },
        row:{
            flexDirection:'row',
            height:scaleHeight(50),
            alignItems:'center',
            marginTop:scaleHeight(80),
            paddingHorizontal:scaleWidth(10)
        },
        termConText:{
            marginLeft:scaledSize(8)
        },
        titleStyle:{
            color:color.theme5.primaryColor,
        },
        buttonContainerStyle:{
            width:scaleWidth(150),
            backgroundColor:'white',
            borderWidth:1,
            borderColor:color.theme5.primaryColor,
        },
        btnContainer:{flexDirection:'row',justifyContent:'space-around',marginTop:scaleHeight(35)}
    });
