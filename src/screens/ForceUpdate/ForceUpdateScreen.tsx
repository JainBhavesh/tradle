import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@app/blueprints';

import useForceUpdate from './useForceUpdate';

const ForceUpdateScreen = () => {
  const { styles } = useForceUpdate();

  return (
    <View style={styles.container}>
      <Text preset="h4" style={styles.messageStyle}>
        We've release a new version of the App!\nPlease update your app to enjoy
        these new features.
      </Text>
      <Button title={'Update'} titleStyle={styles.updateText} />
      <Button title={'Retry'} buttonContainerStyle={styles.retryButton} />
    </View>
  );
};

export default React.memo(ForceUpdateScreen);
