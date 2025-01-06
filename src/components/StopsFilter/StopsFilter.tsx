import React from "react";
import styles from "./StopsFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setStops } from "../../store/filters/filtersSlice";

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
                        />
                        {stop === 0 ? "Без пересадок" : `${stop} пересадка(и)`}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default StopsFilter;



// import React from "react";
// import styles from "./StopsFilter.module.css";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../../store/store";
// import {setStops} from "../../store/filters/filtersSlice";
//
// const StopsFilter: React.FC= () => {
//     const selectedStops = useSelector((store:RootState) => {
//         return store.filters.stops
//     } )
//     const dispatch = useDispatch();
//     const handleCheckboxChange = (stop: number, checked: boolean) => {
//         if (checked) {
//             dispatch(setStops([...selectedStops, stop]));
//         } else {
//             dispatch(setStops(selectedStops.filter((s) => s !== stop)));
//         }
//     };
//
//     return (
//         <div className={styles.stopsFilter}>
//             <h3>Фильтр по пересадкам:</h3>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={selectedStops.length === 0}
//                     onChange={() => dispatch(setStops([]))}
//                 />
//                 Все
//             </label>
//             {[0, 1, 2, 3].map((stop) => (
//                 <label key={stop}>
//                     <input
//                         type="checkbox"
//                         checked={selectedStops.includes(stop)}
//                         onChange={(e) => handleCheckboxChange(stop, e.target.checked)}
//                     />
//                     {stop === 0 ? "Без пересадок" : `${stop} пересадка(и)`}
//                 </label>
//             ))}
//         </div>
//     );
// };
//
// export default StopsFilter;
