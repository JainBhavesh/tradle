import React from 'react';
import { Palette, moderateScale, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { StyleProp, StyleSheet, View, ViewStyle, Image, ImageBackground, ImageStyle } from 'react-native';
import { Text } from '../../../blueprints/Text/Text';
import { useColor } from '@src/context';
import { Images } from '@src/assets';

interface ExtraHeaderProps {
  title?: String;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: StyleProp<ImageStyle>;
  leftIcon?: StyleProp<ImageStyle>;
  style?: JSX.Element;
  renderHeader?:string;
  logStyle?:StyleProp<ViewStyle>;
}

export const Header = React.memo((props: ExtraHeaderProps) => {
  const { logStyle,centerContainerStyle, leftContainerStyle, rightContainerStyle, title, leftIcon, rightIcon, style,renderHeader } = props;
  const { color } = useColor();

  const styles = headerStyles(color);
console.log("renderHeader",renderHeader);

  return (
    <ImageBackground source={Images.HEADER_BACKGROUND} style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.leftContainer,renderHeader=='Negotiation' ? styles.row : leftContainerStyle,{flexDirection:'row'}]}>
        {
        renderHeader =='Atomic Transaction' ? 
          (<Image source={Images.SECURE_DEAL} style={[styles.leftLogo,]} resizeMode='contain' />)
          :
        (renderHeader !='Negotiations' && <Image source={Images.LOGO} style={[styles.leftLogo,logStyle]} resizeMode='contain' />)
        }
        {renderHeader == 'Negotiations' && <Image source={Images.MAN} style={styles.man} resizeMode='contain' />}
          {leftIcon && 
          <Image source={leftIcon} 
          style={[renderHeader=='Negotiations'? styles.secureDeal :styles.leftIcon, 
          style]} resizeMode='contain' />}
        </View>
        <View style={[styles.centerContainer, centerContainerStyle]}>
          <Text  preset='h2' style={styles.textStyle}>{title}</Text>
        </View>
        <View style={[styles.rightContainer, rightContainerStyle]}>
          {rightIcon && <Image source={rightIcon} style={[styles.rightIcon]} resizeMode='contain' />}
        </View>
      </View>
    </ImageBackground>
  )
})



const headerStyles = ({ primaryColor, textColor, secondaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      height: scaleHeight(145),
    },
    headerContainer: {
      // backgroundColor: "#5ac2f9",
      height: scaleHeight(75),
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      resizeMode: 'cover'
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    leftContainer: {
      width: '30%',
      alignItems: 'center',
    },
    rightContainer: {
      width: '30%',
      alignItems: 'flex-end',
      padding: 5
    },
    centerContainer: {
      width: '40%'
    },
    textStyle: {
      color: 'white',
      // fontSize: scaledSize(20),
      textAlign: 'center'
    },
    leftIcon: {
      height: scaleHeight(60),
      width: scaleWidth(60),
    },
    rightIcon: {
      height: scaleHeight(50),
      width: scaleWidth(50),
    },
    man:{
      height: scaleHeight(45),
      width: scaleWidth(40),
      borderRadius:scaledSize(8),
      marginLeft:scaleWidth(10)
    },
    row:{flexDirection:'row'},
    leftLogo: {
      height: scaleHeight(40),
      width: scaleWidth(40),
      marginLeft:5
    },
    secureDeal:{
      height: scaleHeight(45),
      width: scaleWidth(45),
    }
  });
