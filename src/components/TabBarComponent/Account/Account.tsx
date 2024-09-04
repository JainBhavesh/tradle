import React, { useEffect, useRef } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import { AccountList } from '@src/components/ListCmp/AccountList';
import { Button, Image, ScrollView, View } from 'react-native';
import { color, scaleHeight, scaleWidth } from '@src/utils';
import useAccountWithPrpgess from './useAccount';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Images } from '@src/assets';
import Toast from 'react-native-toast-message';
import ToastMessage from '@src/components/CustomToast';
import useStore from '@src/store/useStore';

const AccountWithProgess = ({ status, getValue, isCommmission }: any) => {
  const { isAggreed, setAgreeToggle }: any = useStore();

  const { buyerData, sellerData, styles } =
    useAccountWithPrpgess(isCommmission);

  const toastRef: any = useRef(null);

  const handleShowToast = () => {
    setTimeout(() => {
      if (!isCommmission) {
        getValue('Tradal Chain');
      }
    }, 2000);
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isAggreed) {
        handleShowToast();
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BaseLayout style={styles.main}>
      <ScrollView contentContainerStyle={{ paddingBottom: scaleHeight(100) }}>
        <ToastMessage
          type="success"
          text="transaction successfull"
          timeout={3000}
          ref={toastRef}
        />
        <View>
          <Text preset="h2" style={styles.title1}>
            {'200 MT Animal Feed'}
          </Text>
          <Text preset="h2" style={styles.title1}>
            {status == 'Buyer' ? 'Withdrawn ' : ' Deposit '}
            <Text
              preset="h2"
              onPress={() => {
                getValue('Tradal Chain');
              }}
              style={styles.title1}
              color="green">
              {'Successfully'}
            </Text>
          </Text>
          <Text
            preset="h2"
            color={color.theme5.primaryColor}
            style={styles.title1}>
            {status == 'Seller'
              ? isCommmission
                ? '$4800.00'
                : '$155.200'
              : isCommmission
                ? '$4,800'
                : '$164,800'}
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: scaleHeight(10),
            }}>
            <CircularProgress
              value={75}
              valuePrefix={'$'}
              radius={100}
              titleColor={color.theme5.primaryColor}
              progressValueColor={'#1e94d4'}
              activeStrokeWidth={40}
              activeStrokeColor={'#1e94d4'}
              inActiveStrokeColor={'#f8f8f8'}
              inActiveStrokeWidth={40}
              clockwise={false}
              title={
                status == 'Seller'
                  ? isCommmission
                    ? '$4800.00'
                    : '$155.200'
                  : isCommmission
                    ? '$4,800'
                    : '-$164,800'
              }
              showProgressValue={false}
              // initialValue={299000000}
            />
            {/* <Image source={Images.CIRCULER} style={{
            height:scaleHeight(200),width:scaleWidth(200),alignSelf:'center'
            }}/> */}
          </View>
          <View style={{ marginTop: scaleHeight(10) }}>
            {(status == 'Buyer' ? buyerData : sellerData).map(item => (
              <AccountList
                name={item.name}
                value={item.value}
                separator={styles.separator}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(AccountWithProgess);
