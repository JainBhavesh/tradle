import { useAppContext } from '@src/context';

import { accountProgessStyles } from './Account.style';
import { useState } from 'react';

export type AccountDataType = {
  name?: string;
  value?: string;
};

const useAccountWithPrpgess = (isCommmission: any) => {
  const { color, navigation } = useAppContext();
  const [isStatus, setIsStutus] = useState();

  const buyerData: AccountDataType[] = [
    { name: 'Trade Type', value: 'Animal Feed' },
    { name: 'Trade Size', value: '200MT' },
    { name: 'Trade Price', value: '$160.000' },
    { name: 'Tranches', value: '1/3' },
    { name: 'Buyer Deposit', value: '$80,000' },
    { name: 'Discount', value: isCommmission ? '$9,600.000' : '$4,800.00' },
    { name: 'Total    $', value: '$164.800' },
  ];
  const sellerData: AccountDataType[] = [
    { name: 'Trade Type', value: 'Animal Feed' },
    { name: 'Trade Size', value: '200MT' },
    { name: 'Trade Price', value: '$160000' },
    { name: 'Tranches', value: '1/3' },
    { name: 'Buyer Deposit', value: '$80,000' },
    { name: 'Discount', value: '$4800' },
    { name: 'Total    $', value: isCommmission ? '$9,600' : '$550,200' },
  ];

  return {
    color,
    styles: accountProgessStyles(color),
    buyerData,
    sellerData,
    isStatus,
    setIsStutus,
  };
};

export default useAccountWithPrpgess;
