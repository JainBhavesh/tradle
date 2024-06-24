import { color, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../blueprints/Text/Text';

export const AppHeader = ({
  LeftIcon,
  RightIcon,
  onPressLeft,
  onPressRight,
  containerStyle,
  title,
}: any) => {
  console.log('LeftIcon==>', LeftIcon);

  return (
    <View style={{ ...style.container, ...containerStyle }}>
      <TouchableOpacity onPress={onPressLeft} style={{ ...style.leftIconView }}>
        {LeftIcon && (
          <Image
            source={LeftIcon}
            style={{ ...style.leftIconStyle }}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      <View style={{ ...style.centerView }}>
        {title && (
          <Text preset="h1" style={[style.title]}>
            {title}
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={onPressRight}
        style={{ ...style.rightIconView }}>
        {RightIcon && (
          <Image
            source={RightIcon}
            style={{ ...style.rightIconStyle }}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: scaleHeight(60),
    width: '100%',
    paddingHorizontal: scaleWidth(2),
    alignItems: 'center',
  },
  leftIconView: {
    width: scaleWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  leftIconStyle: {
    width: scaleWidth(2.2),
    height: scaleHeight(2.2),
  },
  rightIconView: {
    width: scaleWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rightIconStyle: {
    width: scaleWidth(2.5),
    height: scaleHeight(2.5),
  },
  centerView: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: 'black',
  },
});
