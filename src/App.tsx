import React from "react";
import TicketsList from "./components/TicketsList/TicketsList";
import ticketsData from "./tickets.json";
import "./styles.css";
import {useSelector} from "react-redux";
import { RootState } from "./store/store";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
    const stopsFilter = useSelector((store:RootState)=>{
        return store.filters.stops
    })

    const filteredTickets = ticketsData.tickets.filter((ticket: any) =>
        stopsFilter.length === 0 ? true : stopsFilter.includes(ticket.stops)
    );

    return (
        <div className="app">
            <Sidebar/>
            <TicketsList tickets={filteredTickets} />
        </div>
    );
};

export default App;
