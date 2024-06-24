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

export const CardView = React.memo((props: ExtraHeaderProps) => {
  const { item, onPress, backgroundColor, textColor, containerStyle,subContainer } = props;

  const { color } = useColor();

  const styles = tradeListStyles(color);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, { backgroundColor }, containerStyle]}>
      {item?.desc &&
        <View style={[styles.subContainer,subContainer]}>
          <View>
            <Text preset='h3' color={'black'} style={{ fontWeight: 'bold' }}>{item?.name}</Text>
            <Text preset='h5'>{item?.desc}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text preset='h2' color='#f89a74' style={{ textAlign: 'center' }}>{item?.price}</Text>
            <Image source={item?.icon} resizeMode='contain' style={styles.icons} />
          </View>
        </View>
      }
      {item?.img &&
        <View style={styles.imgContainer}>
          <Image source={item?.img} resizeMode='contain' style={styles.images} />
        </View>
      }
      {item?.img &&
        <View style={styles.marketPrice}>
          <Text preset='h4' style={{ color: textColor }}>{item?.name}</Text>
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
      height: scaleHeight(20),
      width: scaleWidth(20),
      alignSelf: 'center',
    },
    imgContainer: {
      backgroundColor: color.theme5.backgroundColor,
      height: scaleHeight(30),
      width: scaleWidth(30),
      borderRadius: moderateScale(70),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scaleHeight(10),
      margin: scaledSize(8)
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
