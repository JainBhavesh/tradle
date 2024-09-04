import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Screen } from '../../navigation/appNavigation.type';
import { buyerTabBarScreenStyles } from './BuyerTabBar.style';
import useStore from '@src/store/useStore';

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

  const tabs = [
    'Tradal Passport',
    'Search',
    'Livestock & Meat',
    'Exchange',
    'Deal Room',
    'Offer',
    'Negotiate',
    "My Account",
    "Company Account",
    'Hi Account',
    'Tradal Commission',
    'Atomic transaction',
    'Tradal Chain',
  ];
  return {
    color,
    handleNavigationNetwork,
    handleSetting,
    styles: buyerTabBarScreenStyles(color),
    tabs,
  };
};

export default useBuyerTab;
