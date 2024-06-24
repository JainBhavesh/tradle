import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { tradeScreenStyles } from './Trade.style';
import { Images } from '@src/assets';

export type ItemData = {
    id: number;
    name: string;
    img: any;
};
const useTrade = () => {
    const { color, navigation } = useAppContext();

    const DATA: ItemData[] = [
        {
            id: 1,
            name: 'Images',
            img: Images.CAMERA
        },
        {
            id: 2,
            name: 'Video',
            img: Images.VIDEO
        },
        {
            id: 3,
            name: 'Procedure',
            img: Images.PROCEDURE
        },
        {
            id: 4,
            name: 'FCO',
            img: Images.PDF
        },
        {
            id: 5,
            name: 'Specification',
            img: Images.PDF
        },
        {
            id: 6,
            name: 'Analysis Report',
            img: Images.PDF
        },
        {
            id: 7,
            name: 'Negotiations',
            img: Images.NEGOTIATION
        },
        {
            id: 8,
            name: 'Tradal Cat Catalogue',
            img: Images.CAT
        },
        {
            id: 9,
            name: 'Commodities Exchanges',
            img: Images.EXCHANGES
        },
        {
            id: 10,
            name: 'Tradal Trade',
            img: Images.DEER
        },
        {
            id: 11,
            name: 'Trade Chain',
            img: Images.CHAIN_LEFT
        },
        {
            id: 12,
            name: 'My Account',
            img: Images.STATEMENT
        },
    ];
    const BUYER_DATA: ItemData[] = [
        {
            id: 1,
            name: 'I.D',
            img: Images.CAMERA
        },
        {
            id: 2,
            name: 'Documents',
            img: Images.PDF
        },
        {
            id: 3,
            name: 'P.O.F',
            img: Images.PDF
        },
        {
            id: 4,
            name: 'Tradal Trade',
            img: Images.DEER
        },
        {
            id: 5,
            name: 'Trade chain',
            img: Images.CHAIN
        },
        {
            id: 6,
            name: 'My Account',
            img: Images.STATEMENT
        },
        {
            id: 7,
            name: 'Escrow',
            img: Images.NEGOTIATION
        },
      
    ];
    return {
        color,
        styles: tradeScreenStyles(color),
        DATA,BUYER_DATA
    };
};

export default useTrade;
