import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import { Images } from '@src/assets';
import { BaseLayout, Header } from '@src/components';
import { AppHeader } from '@src/components/Header/AppHeader';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useAppContext } from '@src/context';

const PDF = () => {
  const { navigation } = useAppContext();
  return (
    <BaseLayout>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={Images.BACK}
          style={{ height: scaleHeight(20), width: scaleWidth(20) }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Pdf
        trustAllCerts={false}
        source={Images.OPEN_PDF}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log('error==>', error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    </BaseLayout>
  );
};

export default PDF;

const styles = StyleSheet.create({});
