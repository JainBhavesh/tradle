import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { useAppContext } from '@src/context';
import { Text } from '../../../blueprints/Text/Text';
import { setPinCodeStyles } from './SetPinCode.style';
import { Button } from '../../../blueprints/Button/Button';
import { TouchableOpacity, View } from 'react-native';

const SetPinCode = ({ route }: any) => {
  const { roll } = route.params;
  const [pin, setPin] = useState(['', '', '', '']);
  const { color, navigation } = useAppContext();
  const styles = setPinCodeStyles(color);
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
    console.log('goToNext=');

    navigation.navigate('SET_PIN_ACCEPT', { roll: roll });
  };

  return (
    <BaseLayout style={styles.main}>
      <Text preset="h1" style={styles.title}>
        {'Set A Pin To Secure Your Account'}
      </Text>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <View key={index} style={styles.pinBox}>
            {/* {digit ? <Text style={styles.pinText}>{'✖'}</Text> : null} */}
            <Text style={styles.pinText}>{digit ? digit : '✖'}</Text>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <View
            key={number}
            style={{ flexBasis: '33.3%', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.numberContainer}
              onPress={() => handleNumberButtonPress(String(number))}>
              <Text style={[styles.numpadText]}>{number}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ flexBasis: '33.3%', alignItems: 'center' }} />
        <View style={{ flexBasis: '33.3%', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.numberContainer}
            onPress={() => handleNumberButtonPress('0')}>
            <Text style={[styles.numpadText]}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', flexBasis: '33.3%' }}>
          <TouchableOpacity
            style={styles.numberContainer}
            onPress={handleDeleteButtonPress}>
            <Text style={[styles.numpadText]}>{'\u232B'}</Text>
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
export default React.memo(SetPinCode);
