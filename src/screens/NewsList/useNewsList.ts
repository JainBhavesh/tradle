import { useCallback } from 'react';

import { useAppContext } from '@src/context';
import { NewsResult } from '@src/services';

import { newsListStyles } from './NewsList.style';
import { Screen } from '../../navigation/appNavigation.type';

const useNewsList = () => {
  const { color, navigation } = useAppContext();

  const handleNavigationNetwork = useCallback(() => {
    navigation.navigate(Screen.NETWORK_CHECK);
  }, [navigation]);

  const handleNavigationNewsItem = useCallback(
    (item: NewsResult) => () => {
      navigation.navigate(Screen.NEWS_DETAIL, {
        item,
      });
    },
    [navigation]
  );

  const handleSetting = useCallback(() => {
    navigation.navigate(Screen.SETTING);
  }, [navigation]);

  return {
    color,
    handleNavigationNetwork,
    handleNavigationNewsItem,
    handleSetting,
    styles: newsListStyles(color),
  };
};

export default useNewsList;
