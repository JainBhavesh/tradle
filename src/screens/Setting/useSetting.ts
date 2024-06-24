import { useCallback } from 'react';

import { useAppContext } from '@src/context';
import { Theme } from '@src/utils';

import { settingStyles } from './Setting.style';
import { Screen } from '../../navigation/appNavigation.type';

const themes = ['Dark', 'Light', 'Theme1', 'Theme2', 'Theme3'];

const useSetting = () => {
  const { appTheme, color, navigation, setAppTheme } = useAppContext();

  const handleChangeTheme = useCallback(
    (m: string) => () => {
      setAppTheme(m as Theme);
    },
    [setAppTheme]
  );

  const handleLogin = useCallback(() => {
    navigation.navigate(Screen.LOGIN);
  }, [navigation]);

  // add your code here

  return {
    appTheme,
    color,
    handleChangeTheme,
    handleLogin,
    navigation,
    styles: settingStyles(color),
    themes,
  };
};

export default useSetting;
