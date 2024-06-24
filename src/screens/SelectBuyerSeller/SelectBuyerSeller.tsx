import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { useAppContext } from '@src/context';
import { Button } from '../../../blueprints/Button/Button';
import { selectBuyerSellerStyles } from './SelectBuyerSelller.style';
import { Text } from '../../../blueprints/Text/Text';
import { View, Image, Dimensions } from 'react-native';
import { moderateScale, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { Images } from '@src/assets';
import Pdf from 'react-native-pdf';

const SelectBuyerSeller = () => {
  const { color, navigation } = useAppContext();
  const styles = selectBuyerSellerStyles(color);
  // const source = {
  //   uri: Images.OPEN_PDF,
  //   cache: true,
  // };

  return (
    <BaseLayout style={[styles.main]}>
      <Text
        preset="h1"
        style={{ textAlign: 'center', color: 'white', marginTop: 20 }}>
        Select User
      </Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            height: scaleHeight(170),
            width: scaleWidth(150),
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: moderateScale(120),
          }}
          source={Images.BUYER}
        />
        <Button
          onPress={() => {
            navigation.navigate('ADD_USER_INFO', { roll: 'Buyers' });
          }}
          title={'Buyers'}
          titleStyle={{ color: 'white' }}
          buttonContainerStyle={[
            styles.buttonContainerStyle,
            { backgroundColor: '#2596be' },
          ]}
        />

        <Image
          style={{
            height: scaleHeight(150),
            width: scaleWidth(150),
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: moderateScale(100),
            marginTop: scaledSize(20),
          }}
          source={Images.SELLER}
        />

        <Button
          onPress={() => {
            navigation.navigate('ADD_USER_INFO', { roll: 'Seller' });
          }}
          title={'Seller'}
          titleStyle={{ color: 'white' }}
          buttonContainerStyle={[
            styles.buttonContainerStyle,
            { backgroundColor: '#2596be' },
          ]}
        />
      </View>
    </BaseLayout>
  );
};
export default React.memo(SelectBuyerSeller);
