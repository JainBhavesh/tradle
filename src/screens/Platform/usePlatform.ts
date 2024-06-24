import { useCallback } from 'react';

import { useAppContext } from '@src/context';
import { NewsResult } from '@src/services';

import { Screen } from '../../navigation/appNavigation.type';

import { Images } from '@src/assets';
import { platformScreenStyles } from './Platform.style';

export type platformData = {
    desc: string;
    img: any;
    isCheck: boolean;
};
const usePlatform = () => {
    const { color, navigation } = useAppContext();

    const handleNavigationNetwork = useCallback(() => {
        navigation.navigate(Screen.NETWORK_CHECK);
    }, [navigation]);

    const handleSetting = useCallback(() => {
        navigation.navigate(Screen.SETTING);
    }, [navigation]);

    const listData: platformData[] = [
        { img: Images.CIRCLE, desc: "Tradal GO", isCheck: false },
        { img: Images.STATEMENT, desc: "Tradal Hi", isCheck: true },
        { img: Images.CIRCLE2, desc: "Tradal Low", isCheck: false }
    ]

    return {
        color,
        handleNavigationNetwork,
        handleSetting,
        styles: platformScreenStyles(color),
        listData
    };
};

export default usePlatform;
