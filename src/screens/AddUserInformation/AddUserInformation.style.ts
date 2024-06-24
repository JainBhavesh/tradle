import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const adduseInfoStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: color.theme5.backgroundColor,
            padding:scaledSize(5)
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,

        },
        buttonContainerStyle:{
            width:scaleWidth(150),
            backgroundColor:'white',
            borderWidth:1,
            borderColor:color.theme5.primaryColor,
        },
    });
