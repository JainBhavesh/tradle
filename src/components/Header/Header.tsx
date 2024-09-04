// import React from 'react';
// import {
//   Palette,
//   moderateScale,
//   scaleHeight,
//   scaleWidth,
//   scaledSize,
// } from '@src/utils';
// import {
//   StyleProp,
//   StyleSheet,
//   View,
//   ViewStyle,
//   Image,
//   ImageBackground,
//   ImageStyle,
// } from 'react-native';
// import { Text } from '../../../blueprints/Text/Text';
// import { useColor } from '@src/context';
// import { Images } from '@src/assets';

// interface ExtraHeaderProps {
//   title?: String;
//   leftContainerStyle?: StyleProp<ViewStyle>;
//   rightContainerStyle?: StyleProp<ViewStyle>;
//   centerContainerStyle?: StyleProp<ViewStyle>;
//   rightIcon?: any;
//   leftIcon?: any;
//   style?: StyleProp<ImageStyle>;
//   renderHeader?: string;
//   logStyle?: StyleProp<ImageStyle>;
// }

// export const Header = React.memo((props: ExtraHeaderProps) => {
//   const {
//     logStyle,
//     centerContainerStyle,
//     leftContainerStyle,
//     rightContainerStyle,
//     title,
//     leftIcon,
//     rightIcon,
//     style,
//     renderHeader,
//   } = props;
//   const { color } = useColor();

//   const styles = headerStyles(color);
//   console.log('renderHeader', renderHeader);

//   return (
//     <ImageBackground source={Images.HEADER_BACKGROUND} style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View
//           style={[
//             styles.leftContainer,
//             renderHeader == 'Negotiation' ? styles.row : leftContainerStyle,
//             { flexDirection: 'row' },
//           ]}>
//           {renderHeader == 'Atomic Transaction' ? (
//             <Image
//               source={Images.SECURE_DEAL}
//               style={[styles.leftLogo]}
//               resizeMode="contain"
//             />
//           ) : (
//             renderHeader != 'Negotiations' && (
//               <Image
//                 source={Images.LOGO}
//                 style={[
//                   styles.leftLogo,
//                   logStyle,
//                   {
//                     height: scaleHeight(80),
//                     width: scaleWidth(80),
//                     marginTop: 50,
//                   },
//                 ]}
//                 resizeMode="contain"
//               />
//             )
//           )}
//           {renderHeader == 'Negotiations' && (
//             <Image
//               source={Images.MAN}
//               style={styles.man}
//               resizeMode="contain"
//             />
//           )}
//           {leftIcon && (
//             <Image
//               source={leftIcon}
//               style={[
//                 renderHeader == 'Negotiations'
//                   ? styles.secureDeal
//                   : styles.leftIcon,
//                 style,
//               ]}
//               resizeMode="contain"
//             />
//           )}
//         </View>
//         <View style={[styles.centerContainer, centerContainerStyle]}>
//           <Text preset="h2" style={styles.textStyle}>
//             {title}
//           </Text>
//         </View>
//         <View style={[styles.rightContainer, rightContainerStyle]}>
//           {rightIcon && (
//             <Image
//               source={rightIcon}
//               style={[styles.rightIcon]}
//               resizeMode="contain"
//             />
//           )}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// });

// const headerStyles = ({ primaryColor, textColor, secondaryColor }: Palette) =>
//   StyleSheet.create({
//     container: {
//       height: scaleHeight(145),
//     },
//     headerContainer: {
//       // backgroundColor: "#5ac2f9",
//       height: scaleHeight(75),
//       width: '100%',
//       flexDirection: 'row',
//       alignItems: 'center',
//       resizeMode: 'cover',
//     },
//     titleContainer: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       height: '100%',
//       justifyContent: 'center',
//       width: '100%',
//     },
//     leftContainer: {
//       width: '30%',
//       alignItems: 'center',
//     },
//     rightContainer: {
//       width: '30%',
//       alignItems: 'flex-end',
//       padding: 5,
//     },
//     centerContainer: {
//       width: '40%',
//     },
//     textStyle: {
//       color: 'white',
//       // fontSize: scaledSize(20),
//       textAlign: 'center',
//     },
//     leftIcon: {
//       height: scaleHeight(60),
//       width: scaleWidth(60),
//     },
//     rightIcon: {
//       height: scaleHeight(50),
//       width: scaleWidth(50),
//     },
//     man: {
//       height: scaleHeight(45),
//       width: scaleWidth(40),
//       borderRadius: scaledSize(8),
//       marginLeft: scaleWidth(10),
//     },
//     row: { flexDirection: 'row' },
//     leftLogo: {
//       height: scaleHeight(40),
//       width: scaleWidth(40),
//       marginLeft: 5,
//     },
//     secureDeal: {
//       height: scaleHeight(45),
//       width: scaleWidth(45),
//     },
//   });

import React from 'react';
import {
  Palette,
  moderateScale,
  scaleHeight,
  scaleWidth,
  scaledSize,
} from '@src/utils';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageBackground,
  ImageStyle,
} from 'react-native';
import { Text } from '../../../blueprints/Text/Text';
import { useColor } from '@src/context';
import { Images } from '@src/assets';

interface ExtraHeaderProps {
  title?: string;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: any;
  leftIcon?: any;
  style?: StyleProp<ImageStyle>;
  renderHeader?: string;
  logStyle?: StyleProp<ImageStyle>;
  status?: string;
}

export const Header = React.memo((props: ExtraHeaderProps) => {
  const {
    logStyle,
    centerContainerStyle,
    leftContainerStyle,
    rightContainerStyle,
    title,
    leftIcon,
    rightIcon,
    style,
    renderHeader,
    status,
  } = props;
  const { color } = useColor();

  const styles = headerStyles(color);

  const renderLeftImage = () => {
    switch (renderHeader) {
      case 'Atomic \nTransaction':
        return (
          <Image
            source={Images.ATOMIC}
            style={[
              {
                height: scaleHeight(100),
                width: scaleWidth(100),
                marginTop: scaleHeight(40),
              },
            ]}
            resizeMode="contain"
          />
        );
      case 'Negotiations':
        return (
          <View style={{ flexDirection: 'row' }}>
            {leftIcon && (
              <Image
                source={leftIcon}
                style={[styles.secureDeal]}
                resizeMode="contain"
              />
            )}
            <Image
              source={status == 'Buyer' ? Images.SELLER_GIRL : Images.BUYER_BOY}
              style={styles.man}
              resizeMode="contain"
            />
          </View>
        );
      case 'Search \nLivestock & Meat':
      case 'Search':
      case 'Passport':
      case 'My Account':
      case 'Chain':
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scaleHeight(100),
            }}>
            <Image
              source={leftIcon}
              style={{ height: scaleHeight(50), width: scaleWidth(100) }}
              resizeMode="contain"
            />
            <Image
              source={renderHeader == 'Chain' ? Images.UP_PASSPORT : Images.HII}
              style={{
                height: scaleHeight(50),
                width: scaleWidth(100),
              }}
              resizeMode="contain"
            />
          </View>
        );
      case 'Select Platform':
        return (
          <Image
            source={Images.LOGO}
            style={[
              styles.leftLogo,
              logStyle,
              {
                height: scaleHeight(80),
                width: scaleWidth(80),
                marginTop: scaleHeight(40),
              },
            ]}
            resizeMode="contain"
          />
        );
      case 'Livestock & Meat \nExchanges':
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scaleHeight(30),
            }}>
            <Image
              source={leftIcon}
              style={{
                height: scaleHeight(50),
                width: scaleWidth(100),
                marginTop: 20,
              }}
              resizeMode="contain"
            />
            <Image
              source={Images.DEER}
              style={[styles.secureDeal, style]}
              resizeMode="contain"
            />
          </View>
        );

      default:
        return (
          <Image
            source={Images.SECURE_DEAL}
            style={[
              styles.leftLogo,
              logStyle,
              {
                height: scaleHeight(80),
                width: scaleWidth(80),
                marginTop: scaleHeight(40),
              },
            ]}
            resizeMode="contain"
          />
        );
    }
  };

  return (
    <ImageBackground source={Images.HEADER_BACKGROUND} style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={[
            styles.leftContainer,
            renderHeader === 'Negotiation' ? styles.row : leftContainerStyle,
            { flexDirection: 'row' },
          ]}>
          {renderLeftImage()}
          {/* {leftIcon && (
            <Image
              source={leftIcon}
              style={[
                renderHeader == 'Negotiations'
                  ? styles.secureDeal
                  : styles.leftIcon,
                style,
              ]}
              resizeMode="contain"
            />
          )} */}
        </View>
        <View style={[styles.centerContainer, centerContainerStyle]}>
          <Text preset="h2" style={styles.textStyle}>
            {title}
          </Text>
        </View>
        <View style={[styles.rightContainer, rightContainerStyle]}>
          {rightIcon && (
            <Image
              source={rightIcon}
              style={[styles.rightIcon]}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
});

const headerStyles = ({ primaryColor, textColor, secondaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      height: scaleHeight(145),
    },
    headerContainer: {
      height: scaleHeight(75),
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    leftContainer: {
      width: '25%',
      alignItems: 'center',
    },
    rightContainer: {
      width: '25%',
      alignItems: 'flex-end',
      padding: 5,
    },
    centerContainer: {
      // width: '40%',
      flex: 1,
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
    },
    leftIcon: {
      height: scaleHeight(60),
      width: scaleWidth(60),
    },
    rightIcon: {
      height: scaleHeight(50),
      width: scaleWidth(50),
    },
    man: {
      height: scaleHeight(45),
      width: scaleWidth(40),
      borderRadius: scaledSize(8),
    },
    row: { flexDirection: 'row' },
    leftLogo: {
      height: scaleHeight(40),
      width: scaleWidth(40),
      marginLeft: 5,
    },
    secureDeal: {
      height: scaleHeight(45),
      width: scaleWidth(45),
      marginLeft: scaleWidth(5),
    },
  });

export default Header;
