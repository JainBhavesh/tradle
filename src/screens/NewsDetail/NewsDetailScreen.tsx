import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button, Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';
import { scaleHeight } from '@src/utils';

import useNewsDetail from './useNewsDetail';

const NewsDetailScreen = () => {
  const { data, getPublishedMonth, handleGoBack, styles } = useNewsDetail();

  return (
    <BaseLayout>
      <ScrollView bounces={false} style={styles.scrollViewContainer}>
        <Text preset="h2" style={styles.title}>
          {data.title}
        </Text>
        <View style={styles.infoContainer}>
          <Text preset="h5">
            {data.categories ? data.categories : 'anonymous'}
          </Text>
          <Text preset="h5">{getPublishedMonth(data.published_on)}</Text>
        </View>

        <Text preset="h5" style={styles.descriptionText}>
          {data.body}
        </Text>
        <Button
          buttonContainerStyle={{ marginTop: scaleHeight(15) }}
          title="Go back"
          onPress={handleGoBack}
        />
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(NewsDetailScreen);
