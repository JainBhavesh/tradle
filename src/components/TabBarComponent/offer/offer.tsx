import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '@src/context';
import { offerStyles } from './offer.style';
import { scaledSize } from '@src/utils';
import { Images } from '@src/assets';


const Offer = ({getValue}:any) => {
    const { color, navigation } = useAppContext();
    const styles=offerStyles(color);

    const [pin, setPin] = useState<any>([]);

    const handleDeleteButtonPress = () => {
      setPin((prevPin) => {
          const updatedPin = [...prevPin];
          updatedPin.pop();  
          return updatedPin;
      });
  };
  
  
  const handleNumberButtonPress = (number: string) => {
    var prevPin = [...pin,number]
    setPin(prevPin);
};
console.log("pin is=>",pin);

  return (
    <BaseLayout style={styles.main}>
      <View>
        <Text preset='h1' style={styles.title}>{'Offer Price'}</Text>
        <View style={{ padding: scaledSize(10) }}>
        <Text preset='h4' style={{ marginLeft: 10 }}>Set negotiation price</Text>
          <Text style={styles.box} preset='h4'>
          £159,000,000 {pin.length !== 0 &&
            pin.map((value: any, index: number) => (
                  <Text preset='h4' key={index}>{value ? `${value}` : ''}</Text>
            ))
          } 
          </Text>
       </View>
       <View style={styles.container}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                    <View key={number} style={{ flexBasis: '33.3%' ,alignItems:'center'}}>
                        <TouchableOpacity style={styles.numberContainer} onPress={() => handleNumberButtonPress(String(number))}>
                            <Text style={[styles.numpadText]}>{number}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={{ flexBasis: '33.3%' ,alignItems:'center'}}>
                    <TouchableOpacity style={styles.numberContainer} onPress={() => handleNumberButtonPress('*')}>
                        <Text style={[styles.numpadText]}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexBasis: '33.3%',alignItems:'center' }}>
                    <TouchableOpacity style={styles.numberContainer} onPress={() => handleNumberButtonPress('0')}>
                        <Text style={[styles.numpadText]}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', flexBasis: '33.3%' }}>
                    <TouchableOpacity style={styles.numberContainer} onPress={handleDeleteButtonPress}>
                        <Text style={[styles.numpadText]}>{'\u232B'}</Text>
                    </TouchableOpacity>
                </View>
        </View>
        {/* <VirtualKeyboard
            onChange={(value: any)=>setValue(value)}
        /> */}
      </View>
      <TouchableOpacity onPress={()=>{
        // Linking.openURL('tel:119')
         getValue("Negotiate")
        }}>
        <Image resizeMode='contain' tintColor={'#1e94d4'} source={Images.CALL} style={styles.call}/>
      </TouchableOpacity>
    </BaseLayout>
  );
};

export default React.memo(Offer);


