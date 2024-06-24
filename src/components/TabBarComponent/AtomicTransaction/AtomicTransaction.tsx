import React, { useEffect, useState } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import { AccountList } from '@src/components/ListCmp/AccountList';
import useAtomic from './useAtomic';
import { Animated, Image, View } from 'react-native';
import { color, scaleHeight, scaleWidth } from '@src/utils';
import { Images } from '@src/assets';
import Svg, { Rect } from 'react-native-svg';
import ProgressBar from "react-native-animated-progress";

const AtomicTransaction = ({getValue}:any) => {
  const [isStatus,setIsStatus]=useState(false)
  const { accountData, styles } = useAtomic();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress < 1 ? prevProgress + 0.2 : 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const progressData = [
    { name: 'Produces and Signs All Paperwork', progress: 20,color:'#10EA8E' },
    { name: 'Settles Payment', progress: 50 ,color:'#EAE710'},
    { name: 'Transfers to the Legal Beneficiary', progress: 75 ,color:'#AE79ED'},
    { name: 'Creates a Delivery insurance Bond', progress: 30 ,color:'#F8A0C8'},
    { name: 'Initiates the Delivery Service', progress: 90 ,color:'#96D8DF'},
  ];
  const RowProgressBar = ({ data }:any) => {
    const progressWidth = (percentage: any) => `${percentage}%`;
  
    return (
      <View style={{ marginVertical: scaleHeight(20),paddingHorizontal:scaleWidth(20)}}>
        {data.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text preset='h4' style={{ flex: 1 }}>{item.name}</Text>
            <View style={{width:scaleWidth(110)}}>
              <ProgressBar trackColor={item.color} indeterminate  height={scaleHeight(14)} backgroundColor="red" />
            </View>
            {/* <Image source={Images.PROGRESS} style={{width:scaleWidth(100),height:scaleHeight(20)}} resizeMode='contain'/> */}
            {/* <Svg height="10" width="100">
              <Rect width={progressWidth(item.progress)} height="10" fill={color.theme5.primaryColor} />
            </Svg> */}
            {/* <Text>{`${item.progress}%`}</Text> */}
          </View>
        ))}
      </View>
    );
  };
  useEffect(()=>{
    setTimeout(() => {
      getValue("Hi Account")
    }, 5000);
  },[])

  return (
    <BaseLayout style={styles.main}>
      <View>
        {/* {isStatus ?
        <View>
          <Text preset='h1' style={{textAlign:'center',color:color.theme5.primaryColor,marginTop:scaleHeight(20)}}>Success</Text>
          <Image source={Images.SUCCESS} style={styles.successImg} resizeMode='contain'/>
          </View>
        : */}
        <>
        <Text preset='h1' color={color.theme5.primaryColor} style={styles.title1}>{'Tradal Trade Transaction'}</Text>
        <RowProgressBar data={progressData} />
        <Text preset='h2' style={styles.title2}>{'Transaction '}
        <Text preset='h2' color='green'>Successful</Text>
        </Text>
          {accountData.map((item)=>
                <AccountList
                  name={item.name} value={item.value}
                  separator={styles.separator}
                />
          )}
        </>
        {/* } */}
        </View>
    </BaseLayout>
  );
};

export default React.memo(AtomicTransaction);


