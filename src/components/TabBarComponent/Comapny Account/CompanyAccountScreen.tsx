import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useChain, { ItemData } from './useCompany';
import { TradeList } from '../Trade/TradeList';
import { Text } from '../../../../blueprints/Text/Text';
import { scaleWidth } from '@src/utils';
import { useAppContext } from '@src/context';

const CompanyAccount = ({ getValue, statustatus }) => {
  const [selectedId, setSelectedId] = useState<number>();
  const { DATA, styles } = useChain();
  const [isActive, setIsActive] = useState(false);
  console.log('selectedId', selectedId);
  const { navigation } = useAppContext();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? '#1e94d4' : '#ebf6fa';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <View>
        <TradeList
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            if (item.id !== 4 && item.id !== 5) {
              navigation.navigate('PDF');
            }
          }}
          backgroundColor={backgroundColor}
          textColor={color}
        />
        {item.id === selectedId && <View style={styles.separateLine} />}
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <Text preset="h3" style={{ textAlign: 'center', paddingBottom: 20 }}>
        Company Account
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={3}
        style={[styles.flatlsit, { paddingHorizontal: scaleWidth(10) }]}
        contentContainerStyle={[
          styles.flatlistContainer,
          { paddingHorizontal: scaleWidth(10) },
        ]}
      />
    </View>
  );
};

export default React.memo(CompanyAccount);
