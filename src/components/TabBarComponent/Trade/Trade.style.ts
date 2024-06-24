import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const tradeScreenStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: color.theme5.backgroundColor
        },
        flatlistContainer: { 
            justifyContent: 'center', 
            // alignItems: 'center' ,
            paddingHorizontal:scaleWidth(8),
        },
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
        }
    });
