import { Currency } from '../types';

const exchangeRates = { RUB: 1, USD: 99.83, EUR: 103.98 };

export function calculatePrice(price: number, currency: Currency): string {
    if (!exchangeRates[currency]) {
        throw new Error(`Unsupported currency: ${currency}`);
    }
    return (price / exchangeRates[currency]).toFixed(2);
}
