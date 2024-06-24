import React from 'react';

import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabbar } from '@src/components';
import TabBar from '@src/screens/TabBar/TabBar';

import { NavStackParams, Screen } from './appNavigation.type';
import BuyerTabBar from '@src/screens/BuyerTabBar/BuyerTabBar';

const Tab = createBottomTabNavigator<NavStackParams>();

export const BuyerBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => {
        const tabs = props.state.routeNames.map((name: string) => {
          switch (name) {
            case 'PLATFORM_SCREEN':
              return {
                activeIcon: <EvilIcons name="star" size={30} color="'#fff" />,
                inactiveIcon: <EvilIcons name="star" size={30} color="#fff" />,
                name: name,
              };
            case 'TAB_BAR_SCREEN':
              return {
                activeIcon: (
                  <AntDesign name="clockcircleo" size={26} color="#fff" />
                ),
                inactiveIcon: (
                  <AntDesign name="clockcircleo" size={26} color="#fff" />
                ),
                name: name,
              };
            case 'NEWS_LIST':
              return {
                activeIcon: (
                  <Ionicons name="keypad-sharp" size={26} color="#fff" />
                ),
                inactiveIcon: (
                  <Ionicons name="keypad-sharp" size={26} color="#fff" />
                ),
                name: name,
              };
            case 'LOGIN_NEW2':
              return {
                activeIcon: <AntDesign name="user" size={26} color="#fff" />,
                inactiveIcon: <AntDesign name="user" size={26} color="#fff" />,
                name: name,
              };
            default:
              return {
                activeIcon: <Feather name="mic" size={26} color="#fff" />,
                inactiveIcon: <Feather name="mic" size={26} color="#fff" />,
                name: name,
              };
          }
        });

        console.log('TABS ::: ', tabs);

        return (
          <BottomTabbar
            tabs={tabs}
            tabBarContainerBackground="#5ac2f9"
            tabBarBackground="#fff"
            activeTabBackground="#5ac2f9"
            labelStyle={{ color: '#4d4d4d', fontSize: 11, fontWeight: '600' }}
            onTabChange={() => console.log('Tab changed')}
          />
        );
      }}>
      <Tab.Screen name={Screen.TAB_BAR_SCREEN} component={BuyerTabBar} />
      <Tab.Screen name={Screen.NEWS_LIST} component={BuyerTabBar} />
      <Tab.Screen name={'LOGIN_NEW2'} component={BuyerTabBar} />
      <Tab.Screen name={'SETTING_NEW'} component={BuyerTabBar} />
    </Tab.Navigator>
  );
};
