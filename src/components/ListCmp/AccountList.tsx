import React from 'react';
import { Palette, color, moderateScale, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { StyleSheet, View, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Text } from '../../../blueprints/Text/Text';
import { useColor } from '@src/context';



interface ExtraProps {
  title?: string;
  name?: string;
  value?: string;
  textColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  subContainer?:StyleProp<ViewStyle>;
  separator?:StyleProp<ViewStyle>;
  nameStyle?:StyleProp<TextStyle>;
}

export const AccountList = React.memo((props: ExtraProps) => {
  const {  name, value, separator ,nameStyle} = props;

  const { color } = useColor();

  const styles = listStyles(color);

  return (
     <View style={styles.container}>
        <View style={styles.row}>
          <Text preset='h4' style={[nameStyle]}>{name}</Text>
          <Text preset='h4'>{value}</Text>
        </View>
        <View style={[styles.separator,separator]}/>
      </View>
  )
})



const listStyles = ({ secondaryColor }: Palette) =>
  StyleSheet.create({
    container:{marginHorizontal: scaledSize(5)},
    separator: {
        borderWidth:1,
        borderColor:color.theme5.primaryColor,
        marginBottom:scaleHeight(15),
        marginTop:scaleHeight(15)    
    },
    row:{flexDirection:'row',justifyContent:'space-between'}
  });
