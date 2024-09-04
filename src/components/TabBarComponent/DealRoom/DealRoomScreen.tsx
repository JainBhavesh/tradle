import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { FlatList, View, Image } from 'react-native';
import { ItemData } from './useDealRoom';
import { TradeList } from './DealRoomList';
import useDealRoom from './useDealRoom';

const DealRoomScreen = ({ getValue }: any) => {
  const { DATA, styles } = useDealRoom();
  const [selectedId, setSelectedId] = useState<number>();

  const renderItem = ({ item }: { item: ItemData }) => {
    // const backgroundColor = item.id === selectedId ? '#1e94d4' : "#ebf6fa";
    // const color = item.id === selectedId ? 'white' : 'black';
    const backgroundColor = item.id === 7 ? '#1e94d4' : '#ebf6fa';
    const color = item.id === 7 ? 'white' : 'black';
    return (
      <View>
        <TradeList
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            if (item.id === 10) {
              getValue(item?.name);
            }
            if (item.name === 'Negotiations') {
              getValue('Offer');
            }
            if (item.name == 'My Account') {
              getValue('My Account');
            }
            if (item.name == 'Tradal Chain') {
              getValue('Tradal Chain');
            }
          }}
          backgroundColor={backgroundColor}
          textColor={color}
        />
        {item.id === 7 && <View style={styles.separateLine} />}
      </View>
    );
  };

  return (
    <BaseLayout style={styles.main}>
      {/* <Image source={Images.SECURE_DEAL} style={{position:'absolute',top:scaleHeight(-210),zIndex:100,width:scaleWidth(250)}} resizeMode='contain' /> */}

      <FlatList
        scrollEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        extraData={selectedId}
        numColumns={3}
        style={styles.flatlsit}
        contentContainerStyle={styles.flatlistContainer}
      />
    </BaseLayout>
  );
};

export default React.memo(DealRoomScreen);
