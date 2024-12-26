import React from "react";

interface CurrencyFilterProps {
    currency: "RUB" | "USD" | "EUR";
    onCurrencyChange: (currency: "RUB" | "USD" | "EUR") => void;
}

const CurrencyFilter: React.FC<CurrencyFilterProps> = ({ currency, onCurrencyChange }) => {
    return (
        <div className="currency-filter">
            <h3>Выберите валюту:</h3>
            <button
                className={currency === "RUB" ? "active" : ""}
                onClick={() => onCurrencyChange("RUB")}
            >
                RUB
            </button>
            <button
                className={currency === "USD" ? "active" : ""}
                onClick={() => onCurrencyChange("USD")}
            >
                USD
            </button>
            <button
                className={currency === "EUR" ? "active" : ""}
                onClick={() => onCurrencyChange("EUR")}
            >
                EUR
            </button>
        </div>
    );
};

export default CurrencyFilter;
