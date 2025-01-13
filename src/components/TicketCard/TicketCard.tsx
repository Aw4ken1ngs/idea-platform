import React from 'react';
import { Currency, Ticket } from '../../types';
import { calculatePrice } from '../../utils/calculatePrice';
import CurrencyIcon from '../СurrencyIcon/CurrencyIcon';
import styles from './TicketCard.module.css';

type TicketCardProps = {
    ticket: Ticket;
    currency: Currency;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket, currency }) => {
    return (
        <div className={styles.ticketCard}>
            <div className={styles.ticketInfo}>
                <span className={styles.carrier}>{ticket.carrier}</span>
                <button className={styles.buyButton}>
                    Купить за {calculatePrice(ticket.price, currency)}{' '}
                    <CurrencyIcon currency={currency} />
                </button>
            </div>
            <div className={styles.departure}>
                <span className={styles.time}>{ticket.departure_time}</span>
                <span className={styles.location} data-testid={`location-${ticket.origin}`}>
                    {ticket.origin_name} ({ticket.origin})
                </span>
                <span className={styles.date}>{ticket.departure_date}</span>
            </div>
            <div className={styles.arrowBlock}>
                <span className={styles.arrow}>→</span>
                <span className={styles.stops}>{ticket.stops} пересадок</span>
            </div>
            <div className={styles.arrival}>
                <span className={styles.time}>{ticket.arrival_time}</span>
                <span className={styles.location}>
                    {ticket.destination_name} ({ticket.destination})
                </span>
                <span className={styles.date}>{ticket.arrival_date}</span>
            </div>
        </div>
    );
};

export default TicketCard;
