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

    const buyerData:AccountDataType[]=[
        {name:"Trade Type",value:'Animal Feed'},
        {name:"Trade Size",value:'200MT'},
        {name:"Trade Price",value:'$160.000'},
        {name:"Tranches",value:'1/3'},
        {name:"Buyer Deposit",value:'$80,000'},
        {name:"Discount",value:'$4,800.00'},
        {name:"Total    $",value:'$164.800'},
    ] 
    const sellerData:AccountDataType[]=[
        {name:"Trade Type",value:'Animal Feed'},
        {name:"Trade Size",value:'200MT'},
        {name:"Trade Price",value:'$160000'},
        {name:"Tranches",value:'1/3'},
        {name:"Buyer Deposit",value:'$80,000'},
        {name:"Discount",value:'$4800'},
        {name:"Total    $",value:'$550,200'},]

    return {
        color,
        styles: atomicTranctionStyles(color),
        DATA, buyerData,sellerData
    };
};

export default useAtomic;
