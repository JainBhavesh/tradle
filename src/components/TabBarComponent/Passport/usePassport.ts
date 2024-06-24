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
            price: "£60,000,000",
            bgColor: "#ffece6",
        },
        {
            id: 2,
            name: 'Previous Balance',
            desc: "Decrease by 10% from last month",
            icon: Images.SNAK2,
            price: "£34,000,000",
            bgColor: "#efcdff"
        }
    ];

    const accountData:AccountDataType[]=[
        {name:"Trade Account",value:'£30,000,000'},
        {name:"Total In",value:'1'},
        {name:"Tranche Payments",value:'12'},
        {name:"Extension/Rollover",value:'1'},
    ]

    return {
        color,
        styles: passportScreenStyles(color),
        DATA,accountData
    };
};

export default usePassport;
