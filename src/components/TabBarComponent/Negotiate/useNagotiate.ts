import { useAppContext } from '@src/context';

import { negotiatioStyles } from './Negotiate.style';

const useNagotiate = () => {
    const { color, navigation } = useAppContext();

    return {
        color,
        styles: negotiatioStyles(color),
    };
};

export default useNagotiate;
