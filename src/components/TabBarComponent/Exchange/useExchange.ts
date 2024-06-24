import { useAppContext } from '@src/context';
import { exchangeStyles } from './Exchange.style';

const useExchange = () => {
    const { color, navigation } = useAppContext();


    const tabs =['Filter','Search','Finance','Technology','Trade']

    return {
        color,
        styles: exchangeStyles(color),
        tabs
    };
};

export default useExchange;
