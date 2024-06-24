import { StyleSheet } from 'react-native';

import {
    color,
    Palette,
    scaledSize,
    scaleHeight,
    scaleWidth,
} from '@src/utils';

export const chainScreenStyles = ({ textColor }: Palette) =>
    StyleSheet.create({
        main: {
            backgroundColor: color.theme5.backgroundColor
        },
        flatlistContainer: { justifyContent: 'center', alignItems: 'center' },
        flatlsit: {
            width: '100%',
        },
        leftHeaderIcon: {
            width: scaleHeight(80),
            height: scaleWidth(80),
            marginTop: scaleHeight(10),
        },
        leftContainerStyle: {
            alignItems: 'flex-end'
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
