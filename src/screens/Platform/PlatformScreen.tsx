import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Images } from '@src/assets';
import { BaseLayout, Header } from '@src/components';
import { Strings } from '@src/utils/strings';

import usePlatform from './usePlatform';
import { Text } from '../../../blueprints/Text/Text';

const PlatformScreen = ({ navigation ,route}: any) => {
  const {roll} =route.params;
  
  const { listData, styles } = usePlatform();

  return (
    <BaseLayout style={styles.main}>
      <Header
        title={'Select Platform'}
        rightIcon={Images.GIRL}
        logStyle={{marginLeft:10}}
      />
      <View style={styles.listContainer}>
        {listData &&
          listData.map((item, i) => (
            <TouchableOpacity activeOpacity={0.9}
              onPress={() => {
                if (i==1) {
                  roll=="Seller" ? navigation.navigate('TAB_BAR_SCREEN') :
                  navigation.navigate('BUYER_TAB_BAR_SCREEN')
                } else {}
              }}
              key={i}>
              <Image
                source={item.img}
                style={styles.imageStyle}
                resizeMode="contain"
              />
              {item?.isCheck && (
                <Image
                  source={Images.CHECK}
                  style={styles.checkImgStyle}
                  resizeMode="contain"
                />
              )}
                <View style={{ flexDirection: 'row',alignSelf:'center' }}>
                {item.desc.split(' ').map((word, index) => (
                  <Text key={index} style={index === 0 ? styles.desc : styles.desc2}>
                    {word}
                    {index !== item.desc.split(' ').length - 1 && ' '}
                  </Text>
                ))}
              </View>
              {/* <Text style={styles.desc}>{item.desc}</Text> */}
            </TouchableOpacity>
          ))}
      </View>
    </BaseLayout>
  );
};

export default React.memo(PlatformScreen);
