import * as React from 'react';
import { Image, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

import { Images } from '@src/assets';
import { BaseLayout, BottomTabbar } from '@src/components';
import { useAppContext } from '@src/context';

import { authenticateStyles } from './Authenticate.style';
import { Button } from '../../../blueprints/Button/Button';
import { Text } from '../../../blueprints/Text/Text';
// import your other components

enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

const Authenticate = ({route}:any) => {
  const {roll}=route.params;
    console.log("rollis --->",roll);
  const { color, navigation } = useAppContext();
  const styles = authenticateStyles(color);
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<EResult>();

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      );
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      );
      setIrisAvailable(
        types.includes(LocalAuthentication.AuthenticationType.IRIS)
      );
    }
  };

  const authenticate = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    navigation.navigate('SET_PIN_CODE',{roll:roll});
    try {
      const results = await LocalAuthentication.authenticateAsync();

      if (results.success) {
        setResult(EResult.SUCCESS);
      } else if (results.error === 'unknown') {
        setResult(EResult.DISABLED);
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(EResult.CANCELLED);
      }
    } catch (error) {
      setResult(EResult.ERROR);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  let resultMessage: unknown;
  switch (result) {
    case EResult.CANCELLED:
      resultMessage = 'Authentication process has been cancelled';
      break;
    case EResult.DISABLED:
      resultMessage = 'Biometric authentication has been disabled';
      break;
    case EResult.ERROR:
      resultMessage = 'There was an error in authentication';
      break;
    case EResult.SUCCESS:
      resultMessage = 'Successfully authenticated';
      break;
    default:
      resultMessage = '';
      break;
  }

  let description;
  if (facialRecognitionAvailable && fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with Face ID, touch ID or iris ID';
  } else if (facialRecognitionAvailable && fingerprintAvailable) {
    description = 'Authenticate with Face ID or touch ID';
  } else if (facialRecognitionAvailable && irisAvailable) {
    description = 'Authenticate with Face ID or iris ID';
  } else if (fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with touch ID or iris ID';
  } else if (facialRecognitionAvailable) {
    description = 'Authenticate with Face ID';
  } else if (fingerprintAvailable) {
    description = 'Authenticate with touch ID ';
  } else if (irisAvailable) {
    description = 'Authenticate with iris ID';
  } else {
    description = 'No biometric authentication methods available';
  }
  React.useEffect(() => {
    setTimeout(() => {
      if (resultMessage === 'Successfully authenticated') {
        navigation.navigate('SET_PIN_CODE',{roll:roll});
      }
    }, 1000);
  }, [navigation, resultMessage]);

  const tabs = [
    {
      activeIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      inactiveIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      name: 'Home',
    },
    {
      activeIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      inactiveIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      name: 'list',
    },
    {
      activeIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      inactiveIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      name: 'camera',
    },
    {
      activeIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      inactiveIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      name: 'Notification',
    },
    {
      activeIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      inactiveIcon: (
        <Image
          source={Images.PLACEHOLDER_IMAGE}
          style={{ height: 25, width: 25 }}
          resizeMode="contain"
        />
      ),
      name: 'Profile',
    },
  ];

  return (
    <BaseLayout style={styles.main}>
      <Text preset="h1" style={styles.title}>{`To Authenticate Scan Your \n Eye Or Fingerprint`}</Text>
      <Image
        source={Images.FINGER_PRINT}
        style={styles.fingerprint}
        resizeMode="contain"
      />
      {/* {facialRecognitionAvailable || fingerprintAvailable || irisAvailable ? (
        <Button onPress={authenticate}>
          Authenticate
        </Button>
      ) : null} */}
      {resultMessage ? (
        <Text preset="h2" style={{ color: '#1e94d4', textAlign: 'center' }}>
          {resultMessage}
        </Text>
      ) : null}
      <Button
        onPress={() => {
          authenticate();
          // navigation.navigate("SET_PIN_CODE")
        }}
        title={'Next'}
        titleStyle={{ color: 'white' }}
        buttonContainerStyle={[
          styles.buttonContainerStyle,
          { backgroundColor: color.backgroundColor },
        ]}
      />
      {/* <BottomTabbar
        tabs={tabs}
        tabBarContainerBackground="#6699ff"
        tabBarBackground="#fff"
        activeTabBackground="#6699ff"
        labelStyle={{ color: '#4d4d4d', fontSize: 11, fontWeight: '600' }}
        onTabChange={() => console.log('Tab changed')}
      /> */}
    </BaseLayout>
  );
};
export default React.memo(Authenticate);
