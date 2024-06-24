import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';
import { Fonts } from '../../../blueprints/Text/Text';

export const splashStyles = ({ textColor,primaryColor }: Palette) =>
    StyleSheet.create({
        main: {
            flex:1,
            backgroundColor:'#ffffff'
        },
       row1: {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:scaleHeight(80)
        },
        row2: {
            // flex:1,
            marginTop:scaledSize(20),
            justifyContent:'space-around'
        },
        tradalText:{color:color.theme5.primaryColor,padding:5,textAlign:'center',fontSize:scaledSize(50)},
        text1:{color:'black',padding:5,textAlign:'center',fontSize:scaledSize(40)},
        text2:{color:"#2596be",padding:5,textAlign:'center'},
        text3:{
            fontFamily:Fonts.Poppins,
            textAlign:'center',
            color:'black',
            fontSize:scaledSize(30),
            marginTop:scaledSize(50),
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

