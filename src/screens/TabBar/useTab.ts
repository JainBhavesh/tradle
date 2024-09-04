import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Screen } from '../../navigation/appNavigation.type';

import { Images } from '@src/assets';
import { tabbarScreenStyles } from './Tab.style';
import useStore from '@src/store/useStore';

export type platformData = {
  desc: string;
  img: any;
  isCheck: boolean;
};
const useTab = () => {
  const { isAggreed, setAgreeToggle }: any = useStore();

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
    styles: tabbarScreenStyles(color),
    tabs,
  };
};

export default useTab;
