import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BaseLayout } from '@src/components';
import { Text } from '../../../blueprints/Text/Text';
import { useAppContext } from '@src/context';
import { acceptAndDecStyles } from './AcceptAndDecline.style';
import { Images } from '@src/assets';
import { Button } from '../../../blueprints/Button/Button';
import { scaleHeight, scaleWidth } from '@src/utils';

const AcceptAndDecline = ({route}:any) => {
    const {roll}=route.params;
    
    const [select,setSelect]=useState(false);
    const [isBtn,setIsBtn]=useState(false);
    const { color, navigation } = useAppContext();
    const style = acceptAndDecStyles(color)

  return (
    <BaseLayout style={style.main}>
        <Text preset="h1" style={style.title}>{`Your Reliable Global Partner \n for Commodity Trading`}</Text>
        <Text preset="h3" style={style.desc}>
            Buying and Selling High & Low-Volume Commodities Globally. Tradal's Advanced Technology will Enable us to Reduce the Previous 3-4 Months to a Mere 45 minutes.
        </Text>
        <View style={style.row} >
            <TouchableOpacity onPress={()=>{ setSelect(!select)}}>
                {select ?
                    <Image source={Images.TIC} style={style.tic} resizeMode='contain'/>
                    :
                    <View style={style.ticBg}/>
                }
            </TouchableOpacity>
            <Text preset='h3' style={style.termConText}>Agree to term & condition</Text>
        </View>
        <View style={style.btnContainer}>
            <Button onPress={()=>{setSelect(false)}} title={"Decline"} titleStyle={{color:color.backgroundColor}} 
                buttonContainerStyle={style.buttonContainerStyle}/>
            <Button onPress={()=>{navigation.navigate("AUTHENTICATE",{roll:roll})}} title={"Accept"} titleStyle={{color:'white'}} 
                buttonContainerStyle={[style.buttonContainerStyle,{backgroundColor:color.backgroundColor}]}/>
        </View>
    </BaseLayout>
  )
}
export default React.memo(AcceptAndDecline);

