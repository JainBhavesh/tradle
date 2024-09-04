import { useAppContext } from '@src/context';

import { Images } from '@src/assets';
import { passportScreenStyles } from './Passport.style';

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
const usePassport = () => {
    const { color, navigation } = useAppContext();

    const DATA: ItemData[] = [
        {
            id: 1,
            name: 'Current Balance',
            desc: "Increase by 10% from last month",
            icon: Images.SNAK,
            price: "$60,000,000",
            bgColor: "#ffece6",
        },
        {
            id: 2,
            name: 'Previous Balance',
            desc: "Decrease by 10% from last month",
            icon: Images.SNAK2,
            price: "$34,000,000",
            bgColor: "#efcdff"
        }
    ];

    const buyerData: AccountDataType[] = [
        { name: 'Trade Type', value: 'Animal Feed' },
        { name: 'Trade Size', value: '200MT' },
        { name: 'Trade Price', value: '$160.000' },
        { name: 'Tranches', value: '1/3' },
        { name: 'Buyer Deposit', value: '$80,000' },
        { name: 'Discount', value: '$4,800.00' },
        { name: 'Total    $', value: '$164.800' },
      ];
      const sellerData: AccountDataType[] = [
        { name: 'Trade Type', value: 'Animal Feed' },
        { name: 'Trade Size', value: '200MT' },
        { name: 'Trade Price', value: '$160000' },
        { name: 'Tranches', value: '1/3' },
        { name: 'Buyer Deposit', value: '$80,000' },
        { name: 'Discount', value: '$4800' },
        { name: 'Total    $', value: '$550,200' },
      ];

    return {
        color,
        styles: passportScreenStyles(color),
        DATA,buyerData,sellerData
    };
};

export default usePassport;
