import React, { useEffect, useRef } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import { AccountList } from '@src/components/ListCmp/AccountList';
import { Button, Image, View } from 'react-native';
import { color, scaleHeight, scaleWidth } from '@src/utils';
import useAccountWithPrpgess from './useAccount';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Images } from '@src/assets';
import Toast from 'react-native-toast-message'
import ToastMessage from '@src/components/CustomToast';


const AccountWithProgess = ({status,getValue}:any) => {
  const { accountData, styles,isStatus,setIsStutus } = useAccountWithPrpgess();

  const toastRef = useRef(null);

  const handleShowToast = () => {
     setTimeout(() => {
      getValue("Tradal Chain");
    }, 2000);
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  useEffect(()=>{
    setIsStutus(status)
  },
  [status])

useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleShowToast();
    }, 3000);

    return () => clearTimeout(timeoutId); 
  }, [])

  return (
    <BaseLayout style={styles.main}>
       <ToastMessage
        type="success"
        text="transaction successfull"
        timeout={3000}
        ref={toastRef} />
      <View>
        <Text preset='h2' style={styles.title1}>{'100 MT Coal'}</Text>
        <Text preset='h2' style={styles.title1} >{status=="Buyer" ? 'Withdrawn ':"Deposit "}
        <Text preset='h2' onPress={()=>{getValue("Tradal Chain")}} style={styles.title1} color='green'>{'Successfully'}</Text>
        </Text>
        <Text preset='h2' color={color.theme5.primaryColor} style={styles.title1}>{'$46.900,000'}</Text>
        <View style={{justifyContent:'center',alignItems:'center',paddingVertical:scaleHeight(10)}}>
        <CircularProgress
            value={75}
            valuePrefix={'$'}
            radius={100}
            titleColor={color.theme5.primaryColor}
            progressValueColor={'#1e94d4'}
            activeStrokeWidth={40}
            activeStrokeColor={"#1e94d4"}
            inActiveStrokeColor={'#f8f8f8'}
            inActiveStrokeWidth={40}
            clockwise={false}
            // initialValue={299000000}
          />
          {/* <Image source={Images.CIRCULER} style={{
            height:scaleHeight(200),width:scaleWidth(200),alignSelf:'center'
            }}/> */}
        </View>
        <View style={{marginTop:scaleHeight(10)}}>
            {accountData.map((item)=>
                <AccountList
                    name={item.name} value={item.value}
                    separator={styles.separator}
                />
            )}
        </View>
        </View>
    </BaseLayout>
  );
};

export default React.memo(AccountWithProgess);


