import { loader } from '@src/utils';

import { useColor } from './ThemeContext';
import { AppNavigationProp } from '../navigation/appNavigation.type';
import {
  useWithNavigation,
  WithNavigation,
} from '../navigation/withNavigation';
import { appServices } from '../services/appServices';

export const useAppContextOnly = () => {
  const color = useColor();

  return {
    loader: loader,
    services: appServices,
    ...color,
  };
};

export type AppContextType = ReturnType<typeof useAppContextOnly>;

export const useAppContext = (): WithNavigation<
  AppNavigationProp,
  AppContextType
> => {
  return useWithNavigation<AppNavigationProp, AppContextType>(
    useAppContextOnly()
  );
};
