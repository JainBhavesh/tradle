import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  LoginScreen,
  NetworkLoggerScreen,
  NewsDetailScreen,
  NewsListScreen,
  SettingScreen,
} from '@src/screens';
import AcceptAndDecline from '@src/screens/AccepAndDecline/AcceptAndDecline';
import Authenticate from '@src/screens/Authenticate/Authenticate';
import PlatformScreen from '@src/screens/Platform/PlatformScreen';
import SetPinCode from '@src/screens/SetPinCode/SetPinCode';
import Splash from '@src/screens/Splash/Splash';
import TabBar from '@src/screens/TabBar/TabBar';

import { NavStackParams, Screen } from './appNavigation.type';
import { BottomTab } from './bottomTab';
import { ForUpdateStack } from './ForceupdateStack';
import setPinAccept from '@src/screens/setPinAccept/setPinAccept';
import SelectBuyerSeller from '@src/screens/SelectBuyerSeller/SelectBuyerSeller';
import BuyerTabBar from '@src/screens/BuyerTabBar/BuyerTabBar';
import { BuyerBottomTab } from './buyerBottomTab';
import AddUserInformation from '@src/screens/AddUserInformation/AddUserInformation';
import DealRoomScreen from '@src/components/TabBarComponent/DealRoom/DealRoomScreen';
import PDF from '@src/screens/PDF/PDF';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation = () => {
  const isForceUpdateApp = false;

  return (
    <>
      {isForceUpdateApp ? (
        <ForUpdateStack />
      ) : (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Screen.SPALASh_SCREEN} component={Splash} />
          <Stack.Screen
            name={Screen.ACCEPT_DECLINE_TERM_COND}
            component={AcceptAndDecline}
          />
          <Stack.Screen name={Screen.AUTHENTICATE} component={Authenticate} />
          <Stack.Screen name={Screen.SET_PIN_CODE} component={SetPinCode} />
          <Stack.Screen name={Screen.SET_PIN_ACCEPT} component={setPinAccept} />
          <Stack.Screen name={Screen.TAB_BAR_SCREEN} component={TabBar} />
          <Stack.Screen
            name={Screen.BUYER_TAB_BAR_SCREEN}
            component={BuyerTabBar}
          />
          <Stack.Screen
            name={Screen.PLATFORM_SCREEN}
            component={PlatformScreen}
          />
          <Stack.Screen name={Screen.NEWS_LIST} component={NewsListScreen} />
          <Stack.Screen
            name={Screen.NEWS_DETAIL}
            component={NewsDetailScreen}
          />
          <Stack.Screen name={Screen.SETTING} component={SettingScreen} />
          <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
          <Stack.Screen name={Screen.HOME} component={BottomTab} />
          <Stack.Screen name={Screen.BUYER_HOME} component={BuyerBottomTab} />
          <Stack.Screen
            name={Screen.SELECT_BUYER_SELLER}
            component={SelectBuyerSeller}
          />
          <Stack.Screen
            name={Screen.ADD_USER_INFO}
            component={AddUserInformation}
          />
          <Stack.Screen name={Screen.DEAL_ROOM} component={DealRoomScreen} />
          <Stack.Screen name={Screen.PDF} component={PDF} />

          {__DEV__ && (
            <Stack.Screen
              name={Screen.NETWORK_CHECK}
              component={NetworkLoggerScreen}
            />
          )}
        </Stack.Navigator>
      )}
    </>
  );
};
