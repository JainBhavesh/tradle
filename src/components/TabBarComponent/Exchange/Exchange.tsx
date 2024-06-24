import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import { AccountList } from '@src/components/ListCmp/AccountList';
import { FlatList, Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import { color, scaleHeight, scaleWidth, scaled, scaledSize } from '@src/utils';
import { Images } from '@src/assets';
import useExchange from './useExchange';


const Exchange = ({getValue}:any) => {
  const {  styles ,tabs} = useExchange();
  const [activeTab, setActiveTab] = useState('Filter');

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  const renderTab = (tabName: string, index: number) => (
    <TouchableOpacity style={[styles.tab, {width:tabName=='Technology'?scaleWidth(100): scaleWidth(70), backgroundColor: activeTab === tabName ? color.theme5.primaryColor : color.theme5.backgroundColor }]}
      key={index} onPress={() => handleTabPress(tabName)}
    >
      {tabName=='Filter' ?
      <View style={{flexDirection:'row'}}>
        <Image source={Images.FILTER} tintColor={'white'} resizeMode='contain' style={{width:scaleWidth(15),height:scaleHeight(13),alignSelf:'center',marginRight:3}}/>
        <Text preset='h4' style={{ color: activeTab === tabName ? 'white' : 'black' }}>{tabName}</Text>
      </View>
      :
      <Text preset='h4' style={{ color: activeTab === tabName ? 'white' : 'black' }}>{tabName}</Text>
      }
    </TouchableOpacity>
  );
  const exchanges = [
    'Intercontinental Exchange (ICE)',
    'Dalian Commodity Exchange (DCE)',
    'Tokyo Grain Exchange (TGE)',
    'Minneapolis Grain Exchange (MGEX)',
    'Chicago Board of Trade (CBOT)',
    'Zhengzhou Commodity Exchange (ZCE)',
  ];
  return (
    <BaseLayout style={styles.main}>
      <View style={styles.container}>
          <View style={{width:'50%',justifyContent:'space-between'}}>
            <View style={{}}>
              {/* <Text preset='h5' color={'#d2ebf6'}>{'holding value'}</Text> */}
              <View style={{flexDirection:'row',}}>
                <Text preset='h1' color='white' style={{}}> {'Coal'}</Text>
                <Text preset='h4' color='white' style={{marginTop:scaleHeight(10)}}> {'  +9.77%'}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View>
                <Text preset='h5' color={'#d2ebf6'}>Invested value</Text>
                <Text preset='h2' color='white'>$1600</Text>
              </View>
              <View style={{width:1,height:scaleHeight(40),backgroundColor:'#d2ebf6',alignSelf:'center'}}/>
              <View>
                <Text preset='h5' color={'#d2ebf6'}>Available INR</Text>
                <Text preset='h2' color='white'>$1500</Text>
              </View>
            </View>
          </View>

          <View style={{width:'50%',alignItems:'flex-end',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text preset='h5' color='white'> {'Market-INR'}</Text>
              <Image source={Images.DROP_DOWN} tintColor={'#d2ebf6'} resizeMode='contain' style={{height:scaleHeight(15),width:scaleWidth(15),marginLeft:scaledSize(8),alignSelf:'center'}}/>
            </View>
            <Image source={Images.LEFT2}  resizeMode='contain' style={{height:scaleHeight(30),width:scaleWidth(30),marginRight:scaleWidth(20)}}/>
            <View style={{height:scaleHeight(32),backgroundColor:'#2092d5',width:scaleWidth(100),justifyContent:'space-around',flexDirection:'row'}}>
              <View style={{borderRadius:scaledSize(30),height:scaleHeight(25),width:scaleWidth(25),backgroundColor:'white',justifyContent:'center',alignSelf:'center'}}>
                <Image source={Images.EXCHANGE} tintColor={color.theme5.primaryColor} resizeMode='contain' style={{height:scaleHeight(15),width:scaleWidth(15),alignSelf:'center',}}/>
              </View>
              <Text preset='h5' color='#d2ebf6' style={{alignSelf:'center'}}>Exchange</Text>
            </View>
          </View>
      </View>
      <View>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.tabContainer}>
            {tabs.map((tab, index) => renderTab(tab, index))}
          </View>
      </ScrollView>
        <Text preset='h3' style={{paddingHorizontal:scaleWidth(10)}}>About 11,130,000 result fot <Text color={color.theme5.primaryColor} preset='h3'>Grain & OilSeeds</Text></Text>
        <ScrollView style={{paddingHorizontal:scaleWidth(6),height:scaleHeight(260)}} scrollEnabled> 
        <TouchableOpacity activeOpacity={0.9} onPress={()=>{ getValue("Deal Room") }}>
          <View style={{paddingHorizontal:scaleWidth(10),paddingTop:8}}>
          <Text preset='h3' color={color.theme5.primaryColor}>Check exchange pricing</Text>
            {exchanges.map((exchange, index) => (
              <Text preset='h4' key={index} style={{}}>
                {exchange}
              </Text>
            ))}
          </View>
          {/* <ImageBackground source={Images.OILSEEDS1} resizeMode='cover' style={{width:'100%',height:scaleHeight(200),borderRadius:scaledSize(10)}}>
          <Text preset='h3' color={color.theme5.primaryColor}>Check exchange pricing</Text>
            {exchanges.map((exchange, index) => (
              <Text preset='h3' key={index} style={{}}>
                {exchange}
              </Text>
            ))}
          </ImageBackground> */}
          <Image source={Images.OILSEEDS1} resizeMode='cover' style={{width:'100%',height:scaleHeight(120),marginBottom:10,marginTop:scaleHeight(10),borderRadius:scaledSize(10)}}/>
          <Image source={Images.OILSEEDS2} resizeMode='cover' style={{width:'100%',height:scaleHeight(120),borderRadius:scaledSize(10)}}/>
          <Image source={Images.OILSEEDS3} resizeMode='cover' style={{width:'100%',height:scaleHeight(120),borderRadius:scaledSize(10)}}/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Exchange);


