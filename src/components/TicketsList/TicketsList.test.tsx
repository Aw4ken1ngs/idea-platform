import { configureStore } from "@reduxjs/toolkit";
import { Currency } from "../../types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import * as filtersSlice from "../../store/filters/filtersSlice";
import ticketsData from "./../../tickets.json";
import "@testing-library/jest-dom";
import TicketsList from "./TicketsList";

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

const renderComponent = (tickets: typeof ticketsData.tickets) => (
    <Provider store={store}>
        <TicketsList tickets={tickets} />
    </Provider>
);

it("should match snapshot", () => {
    const { container } = render(renderComponent(ticketsData.tickets));
    expect(container).toMatchSnapshot();
});

