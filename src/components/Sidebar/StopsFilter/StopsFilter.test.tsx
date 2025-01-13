import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import * as filtersSlice from "../../../store/filters/filtersSlice";
import { Currency } from "../../../types";
import StopsFilter from "./StopsFilter";
import {CHECKBOX_ALL_TEST_ID} from "../../../constants/checkboxAllTestId";

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

const renderComponent = () => {
    return (
        <Provider store={store}>
            <StopsFilter />
        </Provider>
    );
};

describe("<StopsFilter />", () => {
    const user = userEvent.setup();

    it("should match snapshot", () => {
        const { container } = render(renderComponent());
        expect(container).toMatchSnapshot();
    });

    test('should check that the checkbox "All" is changing', async () => {
        const { getByTestId } = render(renderComponent());

        const allCheckbox = getByTestId(CHECKBOX_ALL_TEST_ID) as HTMLInputElement;


        expect(allCheckbox.checked).toBe(true);

        const noStopsCheckbox = getByTestId("checkbox-0") as HTMLInputElement;

        await user.click(noStopsCheckbox);

        expect(allCheckbox.checked).toBe(false);
        expect(noStopsCheckbox.checked).toBe(true);

    });
    test('should allow selecting "No stops" and "1 stop" only', async () => {
        const { getByTestId } = render(renderComponent());


        const noStopsCheckbox = getByTestId("checkbox-0") as HTMLInputElement;
        const oneStopCheckbox = getByTestId("checkbox-1") as HTMLInputElement;
        const allCheckbox = getByTestId(CHECKBOX_ALL_TEST_ID) as HTMLInputElement;
        const twoStopsCheckbox = getByTestId("checkbox-2") as HTMLInputElement;
        const threeStopsCheckbox = getByTestId("checkbox-3") as HTMLInputElement;

        expect(noStopsCheckbox.checked).toBe(true);


        await user.click(oneStopCheckbox);
        expect(oneStopCheckbox.checked).toBe(true);

        expect(allCheckbox.checked).toBe(false);
        expect(twoStopsCheckbox.checked).toBe(false);
        expect(threeStopsCheckbox.checked).toBe(false);
    });

    test('should uncheck all other checkboxes when "All" is selected', async () => {
        const { getByTestId } = render(renderComponent());

        const noStopsCheckbox = getByTestId("checkbox-0") as HTMLInputElement;
        const oneStopCheckbox = getByTestId("checkbox-1") as HTMLInputElement;
        const allCheckbox = getByTestId(CHECKBOX_ALL_TEST_ID) as HTMLInputElement;
        const twoStopsCheckbox = getByTestId("checkbox-2") as HTMLInputElement;
        const threeStopsCheckbox = getByTestId("checkbox-3") as HTMLInputElement;

        await user.click(twoStopsCheckbox);


        expect(noStopsCheckbox.checked).toBe(true);
        expect(oneStopCheckbox.checked).toBe(true);
        expect(twoStopsCheckbox.checked).toBe(true);
        expect(allCheckbox.checked).toBe(false);


        await user.click(allCheckbox);

        expect(allCheckbox.checked).toBe(true);
        expect(noStopsCheckbox.checked).toBe(false);
        expect(oneStopCheckbox.checked).toBe(false);
        expect(twoStopsCheckbox.checked).toBe(false);
        expect(threeStopsCheckbox.checked).toBe(false);
    });

    test("should dispatch an action and update state when a checkbox is changed", async () => {
        const { getByTestId } = render(renderComponent());

        const setStopsSpy = jest.spyOn(filtersSlice, "setStops");

        const noStopsCheckbox = getByTestId("checkbox-0") as HTMLInputElement;
        const oneStopCheckbox = getByTestId("checkbox-1") as HTMLInputElement;

        await user.click(noStopsCheckbox);

        expect(setStopsSpy).toBeCalledTimes(1);
        expect(setStopsSpy).toHaveBeenCalledWith([0]);

        expect(noStopsCheckbox.checked).toBe(true);

        await user.click(oneStopCheckbox);

        expect(setStopsSpy).toBeCalledTimes(2);
        expect(setStopsSpy).toHaveBeenCalledWith([0, 1]);

        expect(noStopsCheckbox.checked).toBe(true);
        expect(oneStopCheckbox.checked).toBe(true);

        await user.click(noStopsCheckbox);

        expect(setStopsSpy).toBeCalledTimes(3);
        expect(setStopsSpy).toHaveBeenCalledWith([1]);

        expect(noStopsCheckbox.checked).toBe(false);
    });
});

