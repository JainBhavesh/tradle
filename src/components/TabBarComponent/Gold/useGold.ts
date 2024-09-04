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
            name: 'Animal Feed',
            img: Images.ANIMAL_FEED,
            marketPrice: '$856.02',
            bgColor: '#fff1e4',
        },
        {
            id: 2,
            name: 'Buffalo',
            img: Images.BUFFALO,
            marketPrice: '$856.02',
            bgColor: '#e4fff8',
        },
        {
            id: 3,
            name: 'Camels',
            img: Images.CAMEL,
            marketPrice: '$856.02',
            bgColor: '#eee4ff',
        },
        {
            id: 4,
            name: 'Cattle',
            img: Images.CATTLE,
            marketPrice: '$856.02',
            bgColor: '#e5faff',
        },
        {
            id: 5,
            name: 'Dairy',
            img: Images.DAIRY,
            marketPrice: '$856.02',
            bgColor: '#fee4e3',
        },
        {
            id: 6,
            name: 'Donkey',
            img: Images.DONKEY,
            marketPrice: '$856.02',
            bgColor: '#f3f3f3',
        },
        {
            id: 7,
            name: 'Fish Farming',
            img: Images.FISH,
            marketPrice: '$856.02',
            bgColor: '#fff1e4',
        },
        {
            id: 8,
            name: 'Goat',
            img: Images.GOAT,
            marketPrice: '$856.02',
            bgColor: '#f9ffe5',
        },
        {
            id: 9,
            name: 'Pigs',
            img: Images.PIG,
            marketPrice: '$856.02',
            bgColor: '#edf0ff',
        },
        {
            id: 10,
            name: 'Poultry farming',
            img: Images.FARMING,
            marketPrice: '$856.02',
            bgColor: '#f9ffe5',
        },
        {
            id: 11,
            name: 'Sheep',
            img: Images.GOAT,
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
