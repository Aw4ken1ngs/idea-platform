import React from 'react';
import { Currency } from '../../types';

import RubIcon from '../../icons/SvgIconRub';
import UsdIcon from '../../icons/SvgIconUsd';
import EurIcon from '../../icons/SvgIconEur';

type CurrencyIconProps = {
    currency: Currency;
};

const CurrencyIcon: React.FC<CurrencyIconProps> = ({ currency }) => {
    switch (currency) {
        case Currency.RUB:
            return <RubIcon />;
        case Currency.USD:
            return <UsdIcon />;
        case Currency.EUR:
            return <EurIcon />;
        default:
            return null;
    }
};

export default CurrencyIcon;
