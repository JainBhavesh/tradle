import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Images } from '@src/assets';
import { chainScreenStyles } from './Chain.style';

export type ItemData = {
    id: number;
    name: string;
    img: any;
};
const useChain = () => {
    const { color, navigation } = useAppContext();

    const DATA: ItemData[] = [
        {
            id: 1,
            name: 'Port Authorities',
            img: Images.PORT
        },
        {
            id: 2,
            name: 'Globlal Jurisdiction',
            img: Images.GLOBLE_JURIISDICTION
        },
        {
            id: 3,
            name: 'My Account',
            img: Images.STATEMENT
        },
        {
            id: 4,
            name: 'Plugin',
            img: Images.PLUGIN
        },
        {
            id: 5,
            name: 'Compliance',
            img: Images.LOGO1
        },
        {
            id: 6,
            name: 'Tariff Schedule & Incoterms',
            img: Images.LOGO2
        },
        {
            id: 7,
            name: 'Arbitration',
            img: Images.LOGO3
        },
        {
            id: 8,
            name: 'Escrow',
            img: Images.LOGO4
        },
        {
            id: 9,
            name: 'Tradal Cat',
            img: Images.CAT
        },

    ];
    return {
        color,
        styles: chainScreenStyles(color),
        DATA
    };
};

export default useChain;
