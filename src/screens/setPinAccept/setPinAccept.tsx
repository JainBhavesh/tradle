import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { useAppContext } from '@src/context';
import { Text } from '../../../blueprints/Text/Text';
import { Button } from '../../../blueprints/Button/Button';
import { TouchableOpacity, View } from 'react-native';
import { setPinAcceptStyles } from './setPinAccept.style';

const SetPinAccept = ({ route }: any) => {
  const { roll } = route.params;
  const [enable, setEnable] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const { color, navigation } = useAppContext();
  const styles = setPinAcceptStyles(color);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDeleteButtonPress = () => {
    setPin(prevPin => {
      const updatedPin = [...prevPin];
      const lastNonEmptyIndex = updatedPin
        .map((value, index) => ({ value, index }))
        .filter(item => item.value !== '')
        .pop()?.index;
      if (lastNonEmptyIndex !== undefined) {
        updatedPin[lastNonEmptyIndex] = '';
      }
      return updatedPin;
    });
  };

  const handleNumberButtonPress = (number: string) => {
    setPin(prevPin => {
      const updatedPin = [...prevPin];
      const emptySlotIndex = updatedPin.findIndex(item => item === '');
      if (emptySlotIndex !== -1) {
        updatedPin[emptySlotIndex] = number;
      }
      return updatedPin;
    });
  };

  const goToNext = () => {
    navigation.navigate('HOME', { roll: roll });
  };
  return (
    <BaseLayout style={[styles.main, { backgroundColor: '#5ac2f9' }]}>
      <View style={styles.titileContainer}>
        <Text preset="h1" style={styles.title}>
          {'Confirm Pin Code'}
        </Text>
      </View>
      {/* <Text preset='h4' style={{color:'white',marginTop:10}}>{'Account 598 786 354'}</Text> */}
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <View
            key={index}
            style={[styles.pinBox, { backgroundColor: 'white' }]}>
            {/* {digit ? <Text style={styles.pinText}>{'✖'}</Text> : null} */}
            <Text style={[styles.pinText, { color: '#5ac2f9' }]}>
              {digit ? digit : '✖'}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <View
            key={number}
            style={{ flexBasis: '33.3%', alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.numberContainer, { borderColor: 'white' }]}
              onPress={() => handleNumberButtonPress(String(number))}>
              <Text style={[styles.numpadText, { color: 'white' }]}>
                {number}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ flexBasis: '33.3%', alignItems: 'center' }} />
        <View style={{ flexBasis: '33.3%', alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.numberContainer, { borderColor: 'white' }]}
            onPress={() => handleNumberButtonPress('0')}>
            <Text style={[styles.numpadText, { color: 'white' }]}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', flexBasis: '33.3%' }}>
          <TouchableOpacity
            style={[styles.numberContainer, { borderColor: 'white' }]}
            onPress={handleDeleteButtonPress}>
            <Text style={[styles.numpadText, { color: 'white' }]}>
              {'\u232B'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => {
          goToNext();
        }}
        title={'Next'}
        titleStyle={{ color: 'white' }}
        buttonContainerStyle={[
          styles.buttonContainerStyle,
          { backgroundColor: '#2596be' },
        ]}
      />
    </BaseLayout>
  );
};
export default React.memo(SetPinAccept);
