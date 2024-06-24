import React, { useEffect, useRef, useState } from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { BaseLayout, Header } from '@src/components';
import { Strings } from '@src/utils/strings';
import { Images } from '@src/assets';
import { color, scaleWidth } from '@src/utils';
import PassportScreen from '@src/components/TabBarComponent/Passport/PassportScreen';
import GoldScreen from '@src/components/TabBarComponent/Gold/GoldScreen';
import TradeScreen from '@src/components/TabBarComponent/Trade/TradeScreen';
import ChainScreen from '@src/components/TabBarComponent/Chain/ChainScreen';
import Search from '@src/components/TabBarComponent/Search/Search';
import AtomicTransaction from '@src/components/TabBarComponent/AtomicTransaction/AtomicTransaction';
import Negotiate from '@src/components/TabBarComponent/Negotiate/Negotiate';
import Exchange from '@src/components/TabBarComponent/Exchange/Exchange';
import { Text } from '../../../blueprints/Text/Text';
import Account from '@src/components/TabBarComponent/Account/Account';
import Offer from '@src/components/TabBarComponent/offer/offer';
import useBuyerTab from './useBuyerTabBar';
import DealRoomScreen from '@src/components/TabBarComponent/DealRoom/DealRoomScreen';
import CompanyAccountScreen from '@src/components/TabBarComponent/Comapny Account/CompanyAccountScreen';

const BuyerTabBar = ({ navigation }: any) => {
  const tabContainerRef = useRef(null);
  const { styles, tabs } = useBuyerTab();
  const [activeTab, setActiveTab] = useState('Tradal Passport');
  const [isSuccess, setIsSucess] = useState(false);
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  const renderTab = (tabName: string, index: number) => (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          width:
            tabName == 'Atomic transaction' ||
            tabName == 'Grain & Oilseeds' ||
            tabName == 'Company Account' ||
            tabName == 'My Account' ||
            tabName == 'Tradal Passport' ||
            tabName == 'Exchange'
              ? scaleWidth(140)
              : scaleWidth(90),

          backgroundColor:
            activeTab === tabName
              ? color.theme5.primaryColor
              : color.theme5.backgroundColor,
        },
      ]}
      key={index}
      onPress={() => handleTabPress(tabName)}>
      <Text
        preset="h4"
        style={{ color: activeTab === tabName ? 'white' : 'black' }}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
  const getValue = (value: any) => {
    console.log('value', value);

    if (value === 'Coal') {
      setActiveTab('Exchange');
    }
    if (value == 'Trade') {
      setActiveTab('Search');
    }
    if (value === 'Tradal Trade') {
      setActiveTab('Offer');
    }
    if (value == 'Agreed') {
      setActiveTab('Atomic transaction');
    }
    if (value == 'My Account') {
      setActiveTab('My Account');
    }
    if (value == 'Grain & Oilseeds') {
      setActiveTab('Grain & Oilseeds');
    }
    if (value == 'Hi Account') {
      setActiveTab('Hi Account');
    }
    if (value == 'Tradal Chain') {
      setActiveTab('Tradal Chain');
    }
    if (value == 'Negotiate') {
      setActiveTab('Negotiate');
    }
    if (value == 'Deal Room') {
      setActiveTab('Deal Room');
    }
    if (value === 'Offer') {
      setActiveTab('Offer');
    }
    if (value === 'Tradal Chain') {
      setActiveTab('Tradal Chain');
    }
    if (value === 'Company Account') {
      setActiveTab('Company Account');
    }
  };
  const renderComponent = () => {
    switch (activeTab) {
      case 'My Account':
        return <PassportScreen status={'Buyer'} />;
      case 'Grain & Oilseeds':
        return <GoldScreen getValue={getValue} status={'Buyer'} />;
      case 'Tradal Passport':
        return <TradeScreen getValue={getValue} status={'Buyer'} />;
      case 'Deal Room':
        return <DealRoomScreen getValue={getValue} statustatus={'Buyer'} />;
      case 'Tradal Chain':
        return <ChainScreen />;
      case 'Search':
        return <Search getValue={getValue} statustatus={'Buyer'} />;
      case 'Atomic transaction':
        return <AtomicTransaction getValue={getValue} status={'Buyer'} />;
      case 'Negotiate':
        return (
          <Negotiate
            isSuccess={isSuccess}
            setIsSucess={setIsSucess}
            getValue={getValue}
            statustatus={'Buyer'}
          />
        );
      case 'Company Account':
        return (
          <CompanyAccountScreen getValue={getValue} statustatus={'Buyer'} />
        );
      case 'Exchange':
        return <Exchange getValue={getValue} statustatus={'Buyer'} />;
      case 'Hi Account':
        return <Account getValue={getValue} status={'Buyer'} />;
      case 'Offer':
        return <Offer getValue={getValue} status={'Buyer'} />;
      default:
        return null;
    }
  };
  const renderHeader = () => {
    switch (activeTab) {
      case 'My Account':
        return 'My Account';
      case 'Grain & Oilseeds':
        return 'Minrals COAL';
      case 'Tradal Passport':
        return 'Passport';
      case 'Tradal Chain':
        return 'Chain';
      case 'Search':
        return 'Search COAL';
      case 'Atomic transaction':
        return 'Atomic Transaction';
      case 'Negotiate':
        return 'Negotiations';
      case 'Company Account':
        return 'Deal Room';
      case 'Exchange':
        return 'Grain & Oilseed Exchanges';
      case 'Hi Account':
        return 'My Account';
      case 'Offer':
        return 'Deal Room Offer';
      case 'Deal Room':
        return 'Deal Room';
      case 'Pay Out':
        return 'Pay Out';
      case 'Pay':
        return 'Pay';
      default:
        return 'Header';
    }
  };
  const renderImage = () => {
    switch (activeTab) {
      case 'My Account':
        return Images.LEFT_HEADER_IMAGE;
      case 'Grain & Oilseeds':
        return Images.DEER;
      case 'Tradal Passport':
        return Images.TRADAL_PASSPORT;
      case 'Tradal Chain':
        return Images.CHAIN_LEFT;
      case 'Search':
        return Images.DEER;
      case 'Atomic transaction':
        return Images.ATOMIC;
      case 'Negotiate':
        return Images.SECURE_DEAL;
      case 'Exchange':
        return Images.LEFT2;
      case 'Hi Account':
        return Images.STATEMENT;
      case 'Offer':
        return Images.SECURE_DEAL;
      case 'Deal Room':
        return Images.SECURE_DEAL;
      case 'Pay Out':
        return Images.LEFT_HEADER_IMAGE;
      case 'Pay':
        return Images.LEFT_HEADER_IMAGE;
      default:
        return Images.TRADAL_PASSPORT;
    }
  };
  // const renderTab = ( item : any) => {
  //   // console.log("item-->",item);

  //   return(
  //   <TouchableOpacity
  //     style={[
  //       styles.tab,
  //       {
  //         width:
  //           item?.item == 'Atomic transaction' ||
  //           item?.item == 'Grain & Oilseeds' ||
  //           item?.item == 'Tradal Passport' ||
  //           item?.item == 'Exchange'
  //             ? scaleWidth(150)
  //             : scaleWidth(90),
  //         backgroundColor:
  //           activeTab === item?.item
  //             ? color.theme5.primaryColor
  //             : color.theme5.backgroundColor,
  //       },
  //     ]}
  //     onPress={() => handleTabPress(item?.item)}>
  //     <Text
  //       preset="h4"
  //       style={{ color: activeTab === item?.item ? 'white' : 'black' }}>
  //       {item?.item}
  //     </Text>
  //   </TouchableOpacity>
  //   )
  //   }

  return (
    <BaseLayout style={styles.main}>
      <Header
        title={renderHeader()}
        renderHeader={renderHeader()}
        leftIcon={renderImage()}
        rightIcon={Images.GIRL}
      />
      {/* <View style={{}}>
          <FlatList
            ref={tabContainerRef}
            contentContainerStyle={styles.scrollContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tabs}
            renderItem={renderTab}
          />
      </View> */}
      <View>
        <ScrollView
          ref={tabContainerRef}
          contentContainerStyle={styles.scrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.tabContainer}>
            {tabs.map((tab, index) => renderTab(tab, index))}
          </View>
        </ScrollView>
      </View>
      {renderComponent()}
    </BaseLayout>
  );
};

export default React.memo(BuyerTabBar);
