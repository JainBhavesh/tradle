import { useCallback } from 'react';

import { useAppContext } from '@src/context';

import { Images } from '@src/assets';
import { companyScreenStyles } from './Company.style';


export type ItemData = {
    id: number;
    name: string;
    img: any;
};
const useCompany = () => {
    const { color, navigation } = useAppContext();

    const DATA: ItemData[] = [
        {
            id: 1,
            name: 'FCO',
            img: Images.PDF
        },
        {
            id: 2,
            name: 'Specification',
            img: Images.DOCS
        },
        {
            id: 3,
            name: 'Procedres',
            img: Images.PDF
        },
        {
            id: 4,
            name: 'Video',
            img: Images.VIDEO
        },
        {
            id: 5,
            name: 'Images',
            img: Images.CAMERA
        },
        {
            id: 6,
            name: 'Analysis',
            img: Images.PDF
        },
        

    ];
    return {
        color,
        styles: companyScreenStyles(color),
        DATA
    };
};

export default useCompany;
