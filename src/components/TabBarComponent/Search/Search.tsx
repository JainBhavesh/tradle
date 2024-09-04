import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { CardView } from '@src/components/ListCmp/CardView';
import { useAppContext } from '@src/context';
import { searchStyles } from './Search.style';
import { Text } from '../../../../blueprints/Text/Text';
import { scaleHeight } from '@src/utils';

const Search = ({ getValue, status }: any) => {
  const { color, navigation } = useAppContext();

  const styles = searchStyles(color);
  const DATA = [
    'Gold Dore Bars',
    'Agricultural Commodities:',
    'Agricultural Inputs:',
    'Dairy Products:',
    'Energy Commodities:',
    'Ferrous Metals:',
    'Forest Products:',
    'Grains and Oilseeds:',
    'Livestock & Meat',
    'Industrial Metals:',
    'Industrial and Specialty Chemicals',
    'Livestock (cattle, hogs)',
    'Minerals',
    'Metals Commodities:',
    'Non-Ferrous Metals:',
    'Precious Metals Gold',
    'Precious and Semi-Precious Stones',
    'Rare Earth Elements',
  ];
  // const DATA=[
  //   "China", "India", "Bangladesh", "Indonesia", "Vietnam", "Cambodia", "D.R Congo", "Ivory Coast" , "North Korea"
  // ]
  return (
    <View>
      <View>
        <Text preset="h2" style={styles.title}>
          Animal Feed
        </Text>
        <View style={{ height: scaleHeight(455) }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item == 'Livestock & Meat') {
                    getValue('Livestock & Meat');
                  }
                }}
                style={{}}
                activeOpacity={0.9}>
                <Text
                  preset="h4"
                  style={[
                    styles.name,
                    {
                      color: item == 'Livestock & Meat' ? 'blue' : 'black',
                    },
                    {
                      fontWeight: item == 'Minerals' ? 'bold' : '400',
                    },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            style={styles.flatlsit}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Search);
