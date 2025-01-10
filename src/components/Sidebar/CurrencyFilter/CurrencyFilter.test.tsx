import {configureStore} from "@reduxjs/toolkit";
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import * as filtersSlice from "../../../store/filters/filtersSlice";
import {Currency} from "../../../types";
import CurrencyFilter from './CurrencyFilter';

const store = configureStore({
    reducer: {
        filters: filtersSlice.default
    },
    preloadedState: {
        filters: {
            currency: Currency.RUB,
            stops: []
        }
    }
});

const renderComponent = () => {
    return <Provider store={store}><CurrencyFilter /></Provider>;
}

describe('<CurrencyFilter/>', () => {
    const user = userEvent.setup()

    it('should match snapshot', () => {
        const {container} = render(renderComponent());

        expect(container).toMatchSnapshot();

    });

    test('that buttons can be switched', async () => {
        const {queryByTestId} = render(renderComponent());

        const element = queryByTestId('currency-button-USD');

        expect(element?.className).not.toContain('active');

        await user.click(element as Element);

        expect(element?.className).toContain('active');
    });

    it('should call action with new currency', async () => {
        const {queryByTestId} = render(renderComponent());

        const setCurrencySpy = jest.spyOn(filtersSlice, 'setCurrency');

        const element = queryByTestId('currency-button-USD');

        await user.click(element as Element);

        expect(setCurrencySpy).toBeCalledTimes(1);
        expect(setCurrencySpy).toHaveBeenCalledWith('USD');
    })
})