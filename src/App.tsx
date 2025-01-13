import React, {useMemo} from "react";
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

    const filteredTickets = useMemo(() => {
        return ticketsData.tickets.filter((ticket: any) =>
            stopsFilter.length === 0 ? true : stopsFilter.includes(ticket.stops)
        );
    }, [stopsFilter, ticketsData.tickets]);

    return (
        <div className="app">
            <Sidebar/>
            <TicketsList tickets={filteredTickets} />
        </div>
    );
};

export default App;
