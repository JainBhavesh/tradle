import { useAppContext } from '@src/context';

import { accountProgessStyles } from './Account.style';
import { useState } from 'react';

export type AccountDataType={
    name?:string;
    value?:string;
}
const useAccountWithPrpgess = () => {
    const { color, navigation } = useAppContext();
    const [isStatus,setIsStutus]=useState()

    const accountData:AccountDataType[]=[
        {name:"Trade Account",value:isStatus=='Buyer'?'$28,100,000':'$46,900,000'},
        {name:"Total In",value:'1'},
        {name:"Trance Payments",value:'12'},
    ]

    return {
        color,
        styles: accountProgessStyles(color),
        accountData,
        isStatus,setIsStutus
    };
};

export default useAccountWithPrpgess;
