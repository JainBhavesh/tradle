import { useAppContext } from '@src/context';

import { Images } from '@src/assets';
import { goldScreenStyles } from './Gold.style';

export type goldItemData = {
    id?: number;
    name?: string;
    img?: any;
    marketPrice?: string,
    bgColor?: string,
};
const useGold = () => {
    const { color, navigation } = useAppContext();

    const DATA: goldItemData[] = [
        {
            id: 1,
            name: 'Chini',
            img: Images.CHINI,
            marketPrice: '$856.02',
            bgColor: '#fff1e4',
        },
        {
            id: 2,
            name: 'Dal',
            img: Images.DAL,
            marketPrice: '$856.02',
            bgColor: '#e4fff8',
        },
        {
            id: 3,
            name: 'Wheat',
            img: Images.WHEAT,
            marketPrice: '$856.02',
            bgColor: '#eee4ff',
        },
        {
            id: 4,
            name: 'Coconut',
            img: Images.COCONUT,
            marketPrice: '$856.02',
            bgColor: '#e5faff',
        },
        {
            id: 5,
            name: 'Onion',
            img: Images.ONIUN,
            marketPrice: '$856.02',
            bgColor: '#fee4e3',
        },
        {
            id: 6,
            name: 'Apple',
            img: Images.APPLE,
            marketPrice: '$856.02',
            bgColor: '#f3f3f3',
        },
        {
            id: 7,
            name: 'Chana dal',
            img: Images.CHANA_DAL,
            marketPrice: '$856.02',
            bgColor: '#fff1e4',
        },
        {
            id: 8,
            name: 'Coal',
            img: Images.RICE,
            marketPrice: '$856.02',
            bgColor: '#f9ffe5',
        },
        {
            id: 9,
            name: 'Mirchi',
            img: Images.MIRCHI,
            marketPrice: '$856.02',
            bgColor: '#edf0ff',
        },
    ];

    return {
        color,
        styles: goldScreenStyles(color),
        DATA
    };
};

export default useGold;
