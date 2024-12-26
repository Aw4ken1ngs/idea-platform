import React from "react";
import "./TicketsList.css";

interface Ticket {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    price: number;
    stops: number;
    carrier: string;
    "departure_date": string;
    "departure_time": string;
    "arrival_date": string;
    "arrival_time": string;
}

interface TicketsListProps {
    tickets: Ticket[];
    currency: "RUB" | "USD" | "EUR";
}

const exchangeRates = { RUB: 1, USD: 99.83, EUR: 103.98 };

const TicketsList: React.FC<TicketsListProps> = ({ tickets, currency }) => {
    return (
        <div className="tickets-list">
            {tickets.map((ticket, index) => (
                <div key={index} className="ticket">
                    <p>{ticket.departure_date},{ticket.departure_time} → {ticket.arrival_date},{ticket.arrival_time}</p>
                    <p>
                        {ticket.origin},{ticket.origin_name} → {ticket.destination},{ticket.destination_name}
                    </p>
                    <p>
                        Цена: {(ticket.price / exchangeRates[currency]).toFixed(2)} {currency}
                    </p>
                    <p>Пересадки: {ticket.stops}</p>
                    <p>Перевозчик: {ticket.carrier}</p>
                </div>
            ))}
        </div>
    );
};

export default TicketsList;
