import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  NEWS_DETAIL = 'NEWS_DETAIL',
  NEWS_LIST = 'NEWS_LIST',
  SETTING = 'SETTING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  PLATFORM_SCREEN = 'PLATFORM_SCREEN',
  PASSPORT_SCREEN = 'PASSPORT_SCREEN',
  GOLD_SCREEN = 'GOLD_SCREEN',
  CHAIN_SCREEN = 'CHAIN_SCREEN',
  TRADE_SCREEN = 'TRADE_SCREEN',
  SPALASh_SCREEN = 'SPALASh_SCREEN',
  TAB_BAR_SCREEN = 'TAB_BAR_SCREEN',
  BUYER_TAB_BAR_SCREEN = 'BUYER_TAB_BAR_SCREEN',
  ACCEPT_DECLINE_TERM_COND = 'ACCEPT_DECLINE_TERM_COND',
  AUTHENTICATE = 'AUTHENTICATE',
  SET_PIN_CODE = 'SET_PIN_CODE',
  HOME = 'HOME',
  SET_PIN_ACCEPT='SET_PIN_ACCEPT',
  SELECT_BUYER_SELLER='SELECT_BUYER_SELLER',
  BUYER_HOME='BUYER_HOME',
  ADD_USER_INFO='ADD_USER_INFO',
  DEAL_ROOM="DEAL_ROOM",
  PDF="PDF",
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.NEWS_DETAIL]: NewsDetailParams;
  [Screen.NEWS_LIST]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
  [Screen.PLATFORM_SCREEN]: undefined;
  [Screen.SPALASh_SCREEN]: undefined;
  [Screen.TAB_BAR_SCREEN]: undefined;
  [Screen.ACCEPT_DECLINE_TERM_COND]: undefined;
  [Screen.AUTHENTICATE]: undefined;
  [Screen.SET_PIN_CODE]: undefined;
  [Screen.SET_PIN_ACCEPT]: undefined;
  [Screen.HOME]: undefined;
  [Screen.SELECT_BUYER_SELLER]: undefined;
  [Screen.BUYER_HOME]: undefined;
  [Screen.BUYER_TAB_BAR_SCREEN]: undefined;
  [Screen.ADD_USER_INFO]: undefined;
  [Screen.DEAL_ROOM]: undefined;
  [Screen.PDF]: undefined;

};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;

export type NewsDetailRoute = RouteProp<NavStackParams, Screen.NEWS_DETAIL>;
