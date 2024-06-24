import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Screen } from '../../navigation/appNavigation.type';

import { Images } from '@src/assets';
import { tabbarScreenStyles } from './Tab.style';

export type platformData = {
  desc: string;
  img: any;
  isCheck: boolean;
};
const useTab = () => {
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
  // const tabs = ['Passport','Trade','Negotiate',  'Account', 'Atomic transaction', 'Chain',];
  // const tabs = ['Passport','Search','P Metal Gold','Exchange','Trade','Atomic transaction','Chain',];
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

  return {
    color,
    handleNavigationNetwork,
    handleSetting,
    styles: tabbarScreenStyles(color),
    listData,
    tabs,
  };
};

export default useTab;
