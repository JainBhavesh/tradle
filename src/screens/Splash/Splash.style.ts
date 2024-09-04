import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';
import { Fonts } from '../../../blueprints/Text/Text';

export const splashStyles = ({ textColor,primaryColor, }: Palette) =>
    StyleSheet.create({
        main: {
            flex:1,
            backgroundColor:'#ffffff'
        },
       row1: {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
        },
        row2: {
            // flex:1,
            marginTop:scaledSize(20),
            justifyContent:'space-around',
            paddingHorizontal:scaleWidth(30),
            // alignItems:'center'
        },
        tradalText:{color:"#000080",textAlign:'center',fontSize:scaledSize(50),marginTop:-10},
        text1:{color:color.theme5.primaryColor,textAlign:'center',marginTop:-10},
        text2:{color:"#2596be",padding:5,textAlign:'center'},
        text3:{
            fontFamily:Fonts.Poppins,
            color:'black',
            marginTop:scaledSize(40),
            fontSize:scaledSize(20),
            textAlign:'center'
        },
        text4:{
            color:color.theme5.primaryColor,
            textAlign:'center',
            fontFamily:Fonts.Poppins
        },
        row3:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            flex:1,
        },
        img:{
            height:scaleHeight(170),
            width:scaleWidth(170),
        }
    });

