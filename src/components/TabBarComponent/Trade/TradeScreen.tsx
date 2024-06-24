import React, { useState } from 'react';
import { BaseLayout, Header } from '@src/components';
import { Images } from '@src/assets';
import { FlatList, View ,Image} from 'react-native';
import { Strings } from '@src/utils/strings';
import useTrade, { ItemData } from './useTrade';
import { TradeList } from './TradeList';
import { scaleHeight, scaleWidth } from '@src/utils';
import { Text } from '../../../../blueprints/Text/Text';



const TradeScreen = ({getValue,status}:any) => {
    const { DATA, styles ,BUYER_DATA} = useTrade();
    const [selectedId, setSelectedId] = useState<number>();
    const [selectedName, setSelectedName] = useState<any>('');


    const renderItem = ({ item }: { item: ItemData }) => {
        // const backgroundColor = item.id === selectedId ? '#1e94d4' : "#ebf6fa";
        // const color = item.id === selectedId ? 'white' : 'black';
        const backgroundColor = item.name === "Tradal Trade" ? '#1e94d4' : "#ebf6fa";
        const color = item.name === "Tradal Trade" ? 'white' : 'black';
        return (
            <View>
                <TradeList
                    item={item}
                    onPress={() => {
                        setSelectedId(item.id)
                        setSelectedName(item.name)
                        if (item.id === 10) {
                            getValue("Trade")
                        }
                        if (item.name=="Tradal Trade") {
                            getValue("Trade")
                        }
                        if (item.name=="My Account") {
                            getValue("My Account")
                        }
                      }}
                    backgroundColor={backgroundColor}
                    textColor={color}
                />
                {item.name === 'Tradal Trade' && <View style={styles.separateLine} />}
            </View>
        );
    };
console.log("selectedName-->",selectedName);

    return (
        <BaseLayout style={styles.main}>
            {/* <Image source={Images.SECURE_DEAL} style={{position:'absolute',top:scaleHeight(-210),zIndex:100,width:scaleWidth(250)}} resizeMode='contain' /> */}
            <View>
                <FlatList scrollEnabled={true}
                    data={status=="Buyer"?BUYER_DATA:DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    numColumns={3}
                    style={styles.flatlsit}
                    contentContainerStyle={styles.flatlistContainer}
                />
            </View>
            
            {selectedName=='Escrow' && 
            <View>
                <Text preset='h3' style={{textAlign:'left',padding:12,color:'black'}}>$75,000,000</Text>
            </View>
            } 

        </BaseLayout>
    );
};

export default React.memo(TradeScreen);


