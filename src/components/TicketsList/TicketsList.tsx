import React, { useMemo } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import { Ticket } from '../../types';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type TicketsListProps = {
    tickets: Ticket[];
};

const TicketsList: React.FC<TicketsListProps> = ({ tickets }) => {
    const currency = useSelector((state: RootState) => state.filters.currency);

    const sortedTickets = useMemo(() => {
        return [...tickets].sort((a, b) => a.price - b.price);
    }, [tickets]);

    return (
        <div className="tickets-list">
            {sortedTickets.map((ticket, index) => (
                <TicketCard key={index} ticket={ticket} currency={currency} />
            ))}
        </div>
    );
};

export default TicketsList;
