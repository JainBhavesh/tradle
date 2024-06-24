import React from 'react';
import { BaseLayout } from '@src/components';
import useNewsList from './useNewsList';
import { Text } from '../../../blueprints/Text/Text';

const NewsListScreen = () => {
  useNewsList();

  return (
    <BaseLayout>
      <Text>new list</Text>
    </BaseLayout>
  );
};

export default React.memo(NewsListScreen);

