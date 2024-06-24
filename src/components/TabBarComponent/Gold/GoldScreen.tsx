import React, { useState } from 'react';
import { BaseLayout, Header } from '@src/components';
import { Images } from '@src/assets';
import { FlatList, View } from 'react-native';
import { useColor } from '@src/context';
import { Strings } from '@src/utils/strings';
import { goldScreenStyles } from './Gold.style';
import { CardView } from '@src/components/ListCmp/CardView';
import { scaleHeight, scaleWidth } from '@src/utils';
import useGold, { goldItemData } from './useGold';
import { Text } from '../../../../blueprints/Text/Text';
import Searchbar from '@src/components/SearchBar';
import { RiceList } from '@src/components/ListCmp/RiceList';

const GoldScreen = ({getValue}:any) => {
  const [selectedId, setSelectedId] = useState<number>();
  const { DATA, styles } = useGold();
  const [searchText,setSearchText]=useState<any>()
  const [searchArr,setSearchArr]=useState<any>([])


  const renderItem = ({ item }: { item: goldItemData }) => {
    const backgroundColor = item.id === selectedId ? '#1e94d4' : item?.bgColor;
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <RiceList
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          if (item.name=="Coal") {
            getValue(item?.name)
          }
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const onChangeText = (value: any) => {
    setSearchText(value)
    const searchValue = DATA.filter((elements:any) => {
        return (elements?.name.includes(value) )
      })
      setSearchArr(searchValue)
  };

  return (
    <BaseLayout style={styles.main}>
      {/* <Text preset='h1' color='#e0a029' style={{ textAlign: 'center',marginBottom:scaleHeight(5) }}>{Strings.GoldBarTitile}</Text> */}
      <Searchbar onChangeText={onChangeText} placeholder={'Search'}/>
      <View style={{height:scaleHeight(460)}}>
      <FlatList
        scrollEnabled={true}
        data={searchArr.length> 0 ? searchArr :  DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={3}
        style={styles.flatlsit}
        contentContainerStyle={styles.flatlistContainer} 
      />
      </View>
    </BaseLayout>
  );
};

export default React.memo(GoldScreen);


