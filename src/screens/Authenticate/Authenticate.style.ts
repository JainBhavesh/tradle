import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const authenticateStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: color.theme5.backgroundColor,
            padding:scaledSize(5)
        },
        title:{
            marginTop:scaledSize(10),
            color:color.theme5.primaryColor,
            textAlign:'center',
        },
        desc:{
            marginTop:scaledSize(15),
        },
        buttonContainerStyle:{
            width:scaleWidth(100),
            backgroundColor:'white',
            borderWidth:1,
            borderColor:color.theme5.primaryColor,
            marginVertical:scaledSize(40),
            alignSelf:'center'
        },
        btnContainer:{flexDirection:'row',justifyContent:'space-around',marginTop:scaleHeight(35)},
        fingerprint:{
            alignSelf:'center',
            width:'100%',
            height:scaleHeight(350),
            marginTop:scaleHeight(40)
        }
    });

