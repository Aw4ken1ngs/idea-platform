import styles from "./Sidebar.module.css";
import React from "react";
import CurrencyFilter from "./CurrencyFilter/CurrencyFilter";
import StopsFilter from "./StopsFilter/StopsFilter";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.containerFilter}>
    <CurrencyFilter/>
    <StopsFilter/>
    </div>
  );
};

export default Sidebar