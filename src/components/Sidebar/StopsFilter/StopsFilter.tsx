import React, { useCallback } from "react";
import styles from "./StopsFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setStops } from "../../../store/filters/filtersSlice";
import { STOP_OPTIONS } from "../../../constants/stopOptions";
import {CHECKBOX_ALL_TEST_ID} from "../../../constants/checkboxAllTestId";


const StopsFilter: React.FC = () => {
    const selectedStops = useSelector((store: RootState) => store.filters.stops);
    const dispatch = useDispatch();

    const handleCheckboxChange = useCallback(
        (stop: number, checked: boolean) => {
            if (checked) {
                dispatch(setStops([...selectedStops, stop]));
            } else {
                dispatch(setStops(selectedStops.filter((s) => s !== stop)));
            }
        },
        [selectedStops, dispatch]
    );

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
                        data-testid={CHECKBOX_ALL_TEST_ID}
                    />
                    Все
                </label>
                {STOP_OPTIONS.map((stop) => (
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
