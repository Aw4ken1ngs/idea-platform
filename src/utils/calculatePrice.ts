import { Currency } from '../types';
import { EXCHANGE_RATES } from "../constants/exchangeRates";


export function calculatePrice(price: number, currency: Currency): string {
    if (!EXCHANGE_RATES[currency]) {
        throw new Error(`Unsupported currency: ${currency}`);
    }
    return (price / EXCHANGE_RATES[currency]).toFixed(2);
}
