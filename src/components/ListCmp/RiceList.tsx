import React from 'react';
import { Palette, color, moderateScale, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { StyleSheet, View, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Text } from '../../../blueprints/Text/Text';
import { useColor } from '@src/context';
import { goldItemData } from '../TabBarComponent/Gold/useGold';
import { ItemData } from '../TabBarComponent/Passport/usePassport';


interface ExtraHeaderProps {
  item?: goldItemData & ItemData;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  subContainer?:StyleProp<ViewStyle>;
}

export const RiceList = React.memo((props: ExtraHeaderProps) => {
  const { item, onPress, backgroundColor, textColor, containerStyle,subContainer } = props;

  const { color } = useColor();

  const styles = tradeListStyles(color);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, { backgroundColor }, containerStyle]}>
      <Text preset='h4' style={{ textAlign:'center',color: textColor,paddingHorizontal:scaledSize(8),paddingTop:scaledSize(8) }}>{item?.name}</Text>
      {item?.img &&
        <View style={styles.imgContainer}>
          <Image source={item?.img} resizeMode='cover' style={styles.images} />
        </View>
      }
      {item?.img &&
        <View style={styles.marketPrice}>
          <Text preset='h6' style={{ color: textColor === 'black' ? textColor : '#b4daf7' }}>{`Market Price:${item?.marketPrice}`}</Text>
        </View>
      }
    </TouchableOpacity>
  )
})



const tradeListStyles = ({ secondaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      borderRadius: scaleHeight(10),
      marginHorizontal: scaleHeight(3),
      resizeMode: 'cover',
      height: scaleHeight(150),
      width: scaleHeight(130),
      marginVertical: scaleHeight(8),
      justifyContent: 'space-between',
      borderColor: '#cbe2f0',
      borderWidth: 1.5,
      elevation: 8,
      shadowColor: 'white',
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    subContainer:{
      padding: scaledSize(5)
    },
    images: {
      height: scaleHeight(25),
      width: scaleWidth(25),
      alignSelf: 'center',
      borderRadius: moderateScale(50),
    },
    imgContainer: {
      backgroundColor: color.theme5.backgroundColor,
      height: scaleHeight(40),
      width: scaleWidth(40),
      borderRadius: moderateScale(70),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scaleHeight(10),
      margin: scaledSize(8),
      alignSelf:'center'
    },
    marketPrice: {
      margin: scaledSize(8)
    },
    icons: {
      height: scaleHeight(25),
      width: scaleWidth(25),
      alignSelf: 'center',
      borderRadius: scaledSize(5)
    }
  });
