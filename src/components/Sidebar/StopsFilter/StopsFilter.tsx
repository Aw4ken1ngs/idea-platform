import React from "react";
import styles from "./StopsFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setStops } from "../../../store/filters/filtersSlice";

const StopsFilter: React.FC = () => {
    const selectedStops = useSelector((store: RootState) => store.filters.stops);
    const dispatch = useDispatch();

    const handleCheckboxChange = (stop: number, checked: boolean) => {
        if (checked) {
            dispatch(setStops([...selectedStops, stop]));
        } else {
            dispatch(setStops(selectedStops.filter((s) => s !== stop)));
        }
    };

    return (
        <div className={styles.stopsFilter}>
            <h3 className={styles.filterTitle}>Количество пересадок:</h3>
            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={selectedStops.length === 0}
                        onChange={() => dispatch(setStops([]))}
                        className={styles.checkbox}
                        data-testid="checkbox-all"
                    />
                    Все
                </label>
                {[0, 1, 2, 3].map((stop) => (
                    <label key={stop} className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={selectedStops.includes(stop)}
                            onChange={(e) => handleCheckboxChange(stop, e.target.checked)}
                            className={styles.checkbox}
                            data-testid={`checkbox-${stop}`}
                        />
                        {stop === 0 ? "Без пересадок" : `${stop} пересадка(и)`}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default StopsFilter;
