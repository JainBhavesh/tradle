import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import { BaseLayout, Header } from '@src/components';
import { Strings } from '@src/utils/strings';
import { Images } from '@src/assets';
import useTab from './useTab';
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
import DealRoomScreen from '@src/components/TabBarComponent/DealRoom/DealRoomScreen';
import CompanyAccountScreen from '@src/components/TabBarComponent/Comapny Account/CompanyAccountScreen';

const TabBar = ({ navigation }: any) => {
  const tabContainerRef = useRef(null);
  const { styles, tabs } = useTab();
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
            tabName == 'Exchange' ||
            tabName == 'Tradal Passport' ||
            tabName == 'My Account' ||
            tabName == 'Company Account'
              ? scaleWidth(140)
              : scaleWidth(95),
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
    // if (value === 'Tradal Trade') {
    //   setActiveTab('Offer');
    // }
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
  };
  const renderComponent = () => {
    switch (activeTab) {
      case 'My Account':
        return <PassportScreen status={'Seller'} />;
      case 'Grain & Oilseeds':
        return <GoldScreen getValue={getValue} status={'Seller'} />;
      case 'Tradal Passport':
        return <TradeScreen getValue={getValue} status={'Seller'} />;
      case 'Deal Room':
        return <DealRoomScreen getValue={getValue} status={'Seller'} />;
      case 'Tradal Chain':
        return <ChainScreen />;
      case 'Search':
        return <Search getValue={getValue} status={'Seller'} />;
      case 'Atomic transaction':
        return <AtomicTransaction getValue={getValue} status={'Seller'} />;
      case 'Negotiate':
        return (
          <Negotiate
            isSuccess={isSuccess}
            setIsSucess={setIsSucess}
            getValue={getValue}
          />
        );
      case 'Exchange':
        return <Exchange getValue={getValue} status={'Seller'} />;
      case 'Hi Account':
        return <Account getValue={getValue} status={'Seller'} />;
      case 'Offer':
        return <Offer getValue={getValue} status={'Seller'} />;
      case 'Company Account':
        return (
          <CompanyAccountScreen getValue={getValue} statustatus={'Seller'} />
        );
      default:
        return null;
    }
  };
  const renderHeader = () => {
    switch (activeTab) {
      case 'My Account':
        return 'Seller Account';
      case 'Grain & Oilseeds':
        return 'Search Coal';
      case 'Tradal Passport':
        return 'Passport';
      case 'Tradal Chain':
        return 'Chain';
      case 'Search':
        return 'Search';
      case 'Atomic transaction':
        return 'Atomic Transaction';
      case 'Negotiate':
        // return isSuccess ?"Commission":"Negotiations"
        return 'Negotiations';
      case 'Exchange':
        return 'Grain & Oilseed Exchanges';
      case 'Hi Account':
        return 'My Account';
      case 'Company Account':
        return 'Deal Room';
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

  return (
    <BaseLayout style={styles.main}>
      <Header
        title={renderHeader()}
        renderHeader={renderHeader()}
        leftIcon={renderImage()}
        rightIcon={Images.GIRL}
      />
      <View>
        <ScrollView
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

export default React.memo(TabBar);
