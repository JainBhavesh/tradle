import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useChain, { ItemData } from './useChain';
import { TradeList } from '../Trade/TradeList';
import { Text } from '../../../../blueprints/Text/Text';

const ChainScreen = () => {
    const [selectedId, setSelectedId] = useState<number>();
    const { DATA, styles } = useChain();
    const [isActive,setIsActive] = useState(false);
    console.log("selectedId",selectedId);
    
    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.id === selectedId ? '#1e94d4' : "#ebf6fa";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <View>
                <TradeList
                    item={item}
                    onPress={() => setSelectedId(item.id)}
                    backgroundColor={backgroundColor}
                    textColor={color}
                />
                {item.id === selectedId && <View style={styles.separateLine} />}
            </View>
        );
    };

    return (
        <View style={styles.main}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                numColumns={3}
                style={styles.flatlsit}
                contentContainerStyle={styles.flatlistContainer}
            />
           {selectedId==8 && <Text preset='h3' style={{textAlign:'center',paddingTop:10}}>$75,000,000</Text>}
        </View>
    );
};

export default React.memo(ChainScreen);


