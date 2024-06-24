import React from 'react';
import { Palette, color, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useColor } from '@src/context';
import { ItemData } from './useDealRoom';
import { Text } from '../../../../blueprints/Text/Text';

interface ExtraHeaderProps {
  item?: ItemData;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const TradeList = React.memo((props: ExtraHeaderProps) => {
  const { item, onPress, backgroundColor, textColor } = props;

  const { color } = useColor();

  const styles = tradeListStyles(color);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, { backgroundColor }]}>
      <View style={styles.imgContainer}>
        <Image source={item?.img} resizeMode='contain' style={styles.images} />
      </View>
      <Text preset='h4' style={{ color: textColor,textAlign:'center' }}>{item?.name}</Text>
    </TouchableOpacity>
  )
})



const tradeListStyles = ({ primaryColor, textColor, secondaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      borderRadius: scaleHeight(10),
      marginHorizontal: scaleHeight(6),
      resizeMode: 'cover',
      height: scaleHeight(100),
      width: scaleHeight(120),
      backgroundColor: '#ebf6fa',
      marginVertical: scaleHeight(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#cbe2f0',
      borderWidth: 1.5,
      elevation: 8,
      shadowColor: 'white',
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    images: {
      height: scaleHeight(30),
      width: scaleWidth(30),
      alignSelf: 'center'
    },
    imgContainer: {
      backgroundColor: color.theme5.backgroundColor,
      height: scaleHeight(40),
      width: scaleWidth(40),
      borderRadius: scaledSize(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scaleHeight(10),
    }
  });
