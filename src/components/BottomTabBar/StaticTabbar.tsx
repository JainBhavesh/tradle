import * as React from 'react';
import {
  Animated,
  Dimensions,
  I18nManager,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { TabsType } from './BottomTabBar';

let { width } = Dimensions.get('window');
var prevIndex = -1;

interface Props {
  value?: Animated.AnimatedValue;
  tabs: Array<TabsType>;
  onTabChange?: (tab: TabsType) => void;
  labelStyle?: TextStyle;
  activeTabBackground?: string;
  Hvalue?: number;
  containerWidth?: number;
  defaultActiveTabIndex?: number;
  transitionSpeed?: number;
}

export default class StaticTabbar extends React.PureComponent<Props> {
  values: Array<Animated.AnimatedValue>;
  transitionDuration = this.props.transitionSpeed
    ? this.props.transitionSpeed
    : null;
  activeTabIndex = this.props.defaultActiveTabIndex
    ? this.props.defaultActiveTabIndex > this.props.tabs.length
      ? 0
      : this.props.defaultActiveTabIndex
    : 0;

  constructor(props: Props) {
    super(props);
    const { tabs } = this.props;
    const { activeTabIndex } = this;

    this.values = tabs?.map(
      (tab, index) => new Animated.Value(index === activeTabIndex ? 1 : 0)
    );
  }

  componentDidMount() {
    const { activeTabIndex } = this;
    this.onPress(activeTabIndex, true);
  }

  //RTL SUPORT
  range(start, end) {
    var len = end - start;
    var a = new Array(len);
    for (let i = 0; i < len; i++) a[i] = start + i;
    return a;
  }

  onPress = (index: number, noAnimation: boolean = false) => {
    if (prevIndex !== index) {
      const { value, tabs, containerWidth } = this.props;
      const { transitionDuration } = this;
      let customWidth = containerWidth ? containerWidth : width;
      const tabWidth = customWidth / tabs.length;
      let rangeNumber = this.range(0, tabs.length).reverse();

      Animated.sequence([
        Animated.parallel(
          this.values.map(
            (v: Animated.AnimatedValue | Animated.AnimatedValueXY) =>
              Animated.timing(v, {
                duration: noAnimation ? 0 : 50,
                toValue: 0,
                useNativeDriver: true,
              })
          )
        ),
        Animated.timing(value, {
          duration: noAnimation ? 0 : transitionDuration,
          toValue: I18nManager.isRTL
            ? customWidth + tabWidth * rangeNumber[index]
            : tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.timing(this.values[index], {
          duration: 750,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
      prevIndex = index;
    }
  };

  render() {
    const { onPress } = this;
    const {
      tabs,
      value,
      activeTabBackground,
      labelStyle,
      onTabChange,
      containerWidth,
    } = this.props;
    let customWidth = containerWidth ? containerWidth : width;
    let mergeLabelStyle = { ...styles.labelStyle, ...labelStyle };
    let newActiveIcon = [
      styles.activeIcon,
      { backgroundColor: activeTabBackground ? activeTabBackground : '#fff' },
    ];
    return (
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const tabWidth = customWidth / tabs.length;
          let rangeNumber = this.range(0, tabs.length).reverse();
          const cursor = I18nManager.isRTL
            ? customWidth + tabWidth * rangeNumber[key]
            : tabWidth * key;

          const opacity = value.interpolate({
            extrapolate: 'clamp',
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
          });

          const opacity1 = this.values[key].interpolate({
            extrapolate: 'clamp',
            inputRange: [0, 1],
            outputRange: [0, 1],
          });
          return (
            <React.Fragment {...{ key }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  onPress(key);
                  onTabChange && onTabChange(tab);
                }}>
                <Animated.View
                  style={[styles.tab, { opacity: opacity, zIndex: 100 }]}>
                  {tab.inactiveIcon}
                  {/* <Text style={mergeLabelStyle}>{tab.name} </Text> */}
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  alignItems: 'center',
                  height: 64,
                  justifyContent: 'center',
                  left: tabWidth * key,
                  opacity: opacity1,
                  position: 'absolute',
                  top: -8,
                  width: tabWidth,
                  zIndex: 50,
                }}>
                <View style={newActiveIcon}>{tab.activeIcon}</View>
                {/* <Text style={mergeLabelStyle}>{tab.name} </Text> */}
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeIcon: {
    alignItems: 'center',
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    marginBottom: 30,
    width: 60,
  },
  container: {
    flexDirection: 'row',
  },
  labelStyle: {
    // marginTop: 3,
    color: '#000',

    fontSize: 11,

    fontWeight: '600',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    height: 64,
    justifyContent: 'center',
  },
});
