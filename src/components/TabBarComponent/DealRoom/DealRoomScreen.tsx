import React, { useState } from 'react';
import { BaseLayout, Header } from '@src/components';
import { Images } from '@src/assets';
import { FlatList, View ,Image} from 'react-native';
import { Strings } from '@src/utils/strings';
import useTrade, { ItemData } from './useDealRoom';
import { TradeList } from './DealRoomList';
import { scaleHeight, scaleWidth } from '@src/utils';
import useDealRoom from './useDealRoom';



const DealRoomScreen = ({getValue}:any) => {
    const { DATA, styles } = useDealRoom();
    const [selectedId, setSelectedId] = useState<number>();

    const renderItem = ({ item }: { item: ItemData }) => {
        // const backgroundColor = item.id === selectedId ? '#1e94d4' : "#ebf6fa";
        // const color = item.id === selectedId ? 'white' : 'black';
        const backgroundColor = item.id === 7 ? '#1e94d4' : "#ebf6fa";
        const color = item.id === 7 ? 'white' : 'black';
        return (
            <View>
                <TradeList
                    item={item}
                    onPress={() => {
                        setSelectedId(item.id)
                        if (item.id === 10) {
                            getValue(item?.name)
                        }
                        if (item.name === "Negotiations") {
                            getValue("Offer")
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

            <FlatList scrollEnabled={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                numColumns={3}
                style={styles.flatlsit}
                contentContainerStyle={styles.flatlistContainer}
            />
        </BaseLayout>
    );
};

export default React.memo(DealRoomScreen);


