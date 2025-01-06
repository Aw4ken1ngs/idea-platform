import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Currency} from "../../types";

interface FiltersState {
    currency: Currency;
    stops: number[];
}

const initialState:FiltersState = {
    currency: Currency.RUB,
    stops: []
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCurrency: (state, action: PayloadAction<Currency>) => {
            state.currency = action.payload;
        },
        setStops: (state, action: PayloadAction<number[]>) => {
            state.stops = action.payload;
        }
    }
})

export const { setCurrency, setStops } = filtersSlice.actions
export default filtersSlice.reducer