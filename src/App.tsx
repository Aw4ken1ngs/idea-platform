import React, { useState } from "react";
import CurrencyFilter from "./components/CurrencyFilter/CurrencyFilter";
import StopsFilter from "./components/StopsFilter/StopsFilter";
import TicketsList from "./components/TicketsList/TicketsList";
import ticketsData from "./tickets.json";
import "./styles.css"

const App: React.FC = () => {

    const [currency, setCurrency] = useState<"RUB" | "USD" | "EUR">("RUB");
    const [stopsFilter, setStopsFilter] = useState<number[]>([]);

      const handleCurrencyChange = (newCurrency: "RUB" | "USD" | "EUR") => {
        setCurrency(newCurrency);
    };

    const handleStopsChange = (selectedStops: number[]) => {
        setStopsFilter(selectedStops);
    };

    const filteredTickets = ticketsData.tickets.filter((ticket) =>
        stopsFilter.length === 0 ? true : stopsFilter.includes(ticket.stops)
    );

    return (
        <div className="app">
            <div className="container-filter">
            <CurrencyFilter currency={currency} onCurrencyChange={handleCurrencyChange} />
            <StopsFilter selectedStops={stopsFilter} onStopsChange={handleStopsChange} />
            </div>
            <TicketsList tickets={filteredTickets} currency={currency} />
        </div>
    );
};

export default App;
