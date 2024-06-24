import React from 'react';
import { View } from 'react-native';

import { AnimatedTouchableOpacity, Button, Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';

import useSetting from './useSetting';

const SettingScreen = () => {
  const { appTheme, handleChangeTheme, handleLogin, styles, themes } =
    useSetting();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Text preset="h1">setting.settingScreen</Text>
      </View>
      <View style={styles.content}>
        <Text preset="h3" textAlign="center">
          setting.theme
        </Text>
        {themes.map(m => {
          return (
            <AnimatedTouchableOpacity
              containerStyle={styles.themes}
              onPress={handleChangeTheme(m.toLowerCase())}
              key={`${m}`}>
              <Text preset="h4">{m}</Text>
              <AnimatedTouchableOpacity
                onPress={handleChangeTheme(m.toLowerCase())}
                containerStyle={styles.radio}>
                {appTheme === m.toLowerCase() ? (
                  <View style={styles.selectedRadio} />
                ) : null}
              </AnimatedTouchableOpacity>
            </AnimatedTouchableOpacity>
          );
        })}

        <Text preset="h3" textAlign="center">
          setting.languages
        </Text>

        <Button
          title="Login"
          buttonContainerStyle={styles.btn}
          onPress={handleLogin}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SettingScreen);
