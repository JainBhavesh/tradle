import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { FlatList, View } from 'react-native';
import usePassport, { AccountDataType, ItemData } from './usePassport';
import { CardView } from '@src/components/ListCmp/CardView';
import { Text } from '../../../../blueprints/Text/Text';
import { AccountList } from '@src/components/ListCmp/AccountList';
import { Images } from '@src/assets';
import { color, scaleHeight, scaleWidth } from '@src/utils';


const PassportScreen = ({status}:any) => {

  console.log("status-->",status);
  
  const [selectedId, setSelectedId] = useState<number>();
  const {  styles } = usePassport();
  const accountData:AccountDataType[]=[
    {name:"Statement",value:status=="Buyer" ?'$60,800,000':'$46,900,000'},
    {name:"My Account",value:status=="Buyer" ?'£10,000,000':'$10,000,000'},
    {name:"Trading Account",value:status=="Buyer" ?'$5.000,000':"$0,000"},
    {name:"Tranche Payments",value:'12'},
    {name:"Extension/Rollover",value:'1'},
    {name:"Total Balance",value:status=="Buyer" ?'$75,000.000':'$56.900,000'},

]
  const DATA: ItemData[] = [
    {
        id: 1,
        name: 'Current Balance',
        desc: "Increase by 10% from last month",
        icon: Images.SNAK,
        price:status=="Buyer" ?"£299,000,000" :"£350,000,000",
        bgColor: "#ffece6",
    },
    {
        id: 2,
        name: 'Previous Balance',
        desc: "Decrease by 10% from last month",
        icon: Images.SNAK2,
        price:status=="Buyer" ? "£10,000,000":"£350,000,000",
        bgColor: "#efcdff"
    }
];
  const renderItem = ({ item }: { item: ItemData }) => {

    return (
      <CardView key={item?.id}
        item={item}
        // onPress={() => setSelectedId(item.id)}
        containerStyle={[styles.container,{ backgroundColor: item.bgColor,
          borderColor: item.bgColor,}]}
        subContainer={styles.suContainer}
      />
    );
  };

  return (
    <BaseLayout style={styles.main}>
      <View>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
          extraData={selectedId}
          style={styles.flatlsit}
        />
      </View>
      <View style={{paddingHorizontal:scaleWidth(10),paddingVertical:scaleHeight(15)}}>
        {accountData.map((item)=>
              <AccountList
                name={item.name} value={item.value}
                separator={{borderWidth:0,marginBottom:scaleHeight(10),
                  marginTop:scaleHeight(15)}}
                nameStyle={{color:color.theme5.primaryColor}}
              />
        )}
       {status=="Seller" && <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text preset='h4' style={[]}>{'Commission'}</Text>
          <Text preset='h4'>{'$938.00'}</Text>
        </View>}
      </View>
    </BaseLayout>
  );
};

export default React.memo(PassportScreen);


