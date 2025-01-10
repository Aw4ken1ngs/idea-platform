import { configureStore } from "@reduxjs/toolkit";
import { Currency } from "../../types";
import { Provider } from "react-redux";
import { render} from "@testing-library/react";
import * as filtersSlice from "../../store/filters/filtersSlice";
import TicketCard from "./TicketCard";
import ticketsData from "./../../tickets.json";
import '@testing-library/jest-dom';



const store = configureStore({
    reducer: {
        filters: filtersSlice.default,
    },
    preloadedState: {
        filters: {
            currency: Currency.RUB,
            stops: [],
        },
    },
});

const renderComponent = (ticket: typeof ticketsData.tickets[0]) => {
    return (
        <Provider store={store}>
            <TicketCard ticket={ticket} currency={Currency.RUB} />
        </Provider>
    );
};

describe('<TicketCard/>', () => {
    const mockTicket = ticketsData.tickets[0];

    it('should match snapshot', () => {
        const {container} = render(renderComponent(mockTicket));
        expect(container).toMatchSnapshot();
    });

    test('TicketCard renders correctly with mock data', () => {
        const {queryByTestId} = render(renderComponent(mockTicket));
        const element = queryByTestId('location-VVO');
        expect(element).toBeInTheDocument();
    });
})
