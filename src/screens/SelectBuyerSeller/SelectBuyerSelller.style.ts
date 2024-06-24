import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const selectBuyerSellerStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: "#2596be",
            padding:scaledSize(5)
        },
        buttonContainerStyle:{
            width:scaleWidth(250),
            backgroundColor:'white',
            borderWidth:1,
            borderColor:color.theme5.primaryColor,
            alignSelf:'center',
            marginTop:scaledSize(30)
        },
        btnContainer:{flexDirection:'row',justifyContent:'space-around',marginTop:scaleHeight(35)},
});

