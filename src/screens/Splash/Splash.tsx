import { Image, ImageBackground, StyleSheet,  View } from 'react-native'
import React, { useEffect } from 'react'
import { Images } from '@src/assets';
import { useAppContext } from '@src/context';
import {  color, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import { Text } from '../../../blueprints/Text/Text';
import { splashStyles } from './Splash.style';

const Splash = () => {
    const {navigation,color} = useAppContext();
    const styles = splashStyles(color)
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate("SELECT_BUYER_SELLER")
        }, 3000);
      }, []);

  return (
    <View style={styles.main}>
      <View style={styles.row1}>
        <View>
          <Image style={{height:scaleHeight(150),width:scaleWidth(170),justifyContent:"center",alignSelf:"center"}} source={Images.LOGO} resizeMode="contain" />
          <Text preset='h3' style={styles.tradalText}>TRADAL</Text>
          <Text preset='h3' style={styles.text1}>COMMODITIES</Text>
        </View>
        {/* <View>
          <Image style={{height:scaleHeight(150),width:scaleWidth(170),}} source={Images.WFP} resizeMode="contain" />
          <Text preset='h4' style={styles.text2}>World Food Programme</Text>
        </View> */}
      </View>
     <View style={styles.row2}>
     <Text preset='h3' style={styles.text3}>{`The Commodity Trading Future \n & Acquisition Deal flow.`}</Text>
      <Text preset='h3' style={styles.text3}>{`Reducing the Trade Process \n from 4 Months to 45 Minutes.`} </Text> 
     </View>
      {/* <View style={styles.row3}>
        <View>
          <Image style={styles.img} source={Images.SUPPLY_CHAIN_FLOW} resizeMode="contain" />
        </View>
        <View>
          <Image style={styles.img} source={Images.SUPPLY_CHAIN_PLANING} resizeMode="contain" />
        </View>
      </View> */}
    </View>
  )
}
export default React.memo(Splash);

