import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Screen } from '../../navigation/appNavigation.type';

import { Images } from '@src/assets';
import { buyerTabBarScreenStyles } from './BuyerTabBar.style';

export type platformData = {
  desc: string;
  img: any;
  isCheck: boolean;
};
const useBuyerTab = () => {
  const { color, navigation } = useAppContext();

  const handleNavigationNetwork = useCallback(() => {
    navigation.navigate(Screen.NETWORK_CHECK);
  }, [navigation]);

  const handleSetting = useCallback(() => {
    navigation.navigate(Screen.SETTING);
  }, [navigation]);

  const listData: platformData[] = [
    { img: Images.CIRCLE, desc: 'Statement', isCheck: false },
    { img: Images.STATEMENT, desc: 'Statement', isCheck: true },
    { img: Images.CIRCLE2, desc: 'Statement', isCheck: false },
  ];
  // const tabs = ['Passport','Search','P Metal Gold','Exchange','Negotiate','Atomic transaction','Chain',];
  const tabs = [
    // 'Tradal Trade',
    'Tradal Passport',
    "My Account",
    "Company Account",
    'Hi Account',
    'Search',
    'Grain & Oilseeds',
    'Exchange',
    'Deal Room',
    'Offer',
    'Negotiate',
    'Atomic transaction',
    'Tradal Chain',
  ];
  //P Metal Gold -->Grain & Oilseeds
  //Exchange --> Select Deal Room
  return {
    color,
    handleNavigationNetwork,
    handleSetting,
    styles: buyerTabBarScreenStyles(color),
    listData,
    tabs,
  };
};

export default useBuyerTab;
