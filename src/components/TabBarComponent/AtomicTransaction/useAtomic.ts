import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Images } from '@src/assets';
import { atomicTranctionStyles } from './Atomic.style';

export type ItemData = {
    id?: number;
    name?: string;
    desc?: string,
    icon?: any,
    price?: string,
    bgColor: string,
};
export type AccountDataType={
    name?:string;
    value?:string;
}
const useAtomic = () => {
    const { color, navigation } = useAppContext();

    const DATA: ItemData[] = [
        {
            id: 1,
            name: 'Current Balance',
            desc: "Increase by 10% from last month",
            icon: Images.SNAK,
            price: "$4934.66",
            bgColor: "#ffece6",
        },
        {
            id: 2,
            name: 'Previous Balance',
            desc: "Decrease by 10% from last month",
            icon: Images.SNAK2,
            price: "$8934.66",
            bgColor: "#efcdff"
        }
    ];

    const accountData:AccountDataType[]=[
        {name:"Coal per KG",value:'£2.99'},
        {name:"100 Million MT",value:'£299,000,000'},
        {name:"Commission",value:'£5980000'},
    ]

    return {
        color,
        styles: atomicTranctionStyles(color),
        DATA,accountData
    };
};

export default useAtomic;
