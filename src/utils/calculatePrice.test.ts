import { calculatePrice } from './calculatePrice';
import { Currency } from '../types';
import { EXCHANGE_RATES } from "../constants/exchangeRates";

describe('calculatePrice', () => {

    it('should correctly calculate the price in RUB', () => {
        const price = 1000; // 1000 RUB
        const currency = Currency.RUB;
        const result = calculatePrice(price, currency);

        expect(result).toBe('1000.00');
    });

    it('should correctly calculate the price in USD', () => {
        const price = 9983; // 9983 RUB
        const currency = Currency.USD;
        const result = calculatePrice(price, currency);

        expect(result).toBe((9983 / EXCHANGE_RATES.USD).toFixed(2));
        expect(result).toBe('100.00');
    });

    it('should correctly calculate the price in EUR', () => {
        const price = 10398;
        const currency = Currency.EUR;
        const result = calculatePrice(price, currency);

        expect(result).toBe((10398 / EXCHANGE_RATES.EUR).toFixed(2));
        expect(result).toBe('100.00');
    });
});