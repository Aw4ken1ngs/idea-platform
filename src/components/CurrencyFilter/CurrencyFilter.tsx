import React from "react";
import { Currency } from "../../types";
import styles from "./CurrencyFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setCurrency } from "../../store/filters/filtersSlice";

const CurrencyFilter: React.FC = () => {
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.filters.currency);

    const onCurrencyChange = (selectedCurrency: Currency) => {
        dispatch(setCurrency(selectedCurrency));
    };

    return (
        <div className={styles.currencyFilter}>
            <h3 className={styles.filterTitle}>Выберите валюту:</h3>
            <div className={styles.buttonGroup}>
                {Object.values(Currency).map((curr) => (
                    <button
                        key={curr}
                        className={`${styles.currencyButton} ${
                            currency === curr ? styles.active : ""
                        }`}
                        onClick={() => onCurrencyChange(curr as Currency)}
                    >
                        {curr}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CurrencyFilter;
