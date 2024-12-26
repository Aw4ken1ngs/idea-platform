import React from "react";

interface StopsFilterProps {
    selectedStops: number[];
    onStopsChange: (stops: number[]) => void;
}

const StopsFilter: React.FC<StopsFilterProps> = ({ selectedStops, onStopsChange }) => {
    const handleCheckboxChange = (stop: number, checked: boolean) => {
        if (checked) {
            onStopsChange([...selectedStops, stop]);
        } else {
            onStopsChange(selectedStops.filter((s) => s !== stop));
        }
    };

    return (
        <div className="stops-filter">
            <h3>Фильтр по пересадкам:</h3>
            <label>
                <input
                    type="checkbox"
                    checked={selectedStops.length === 0}
                    onChange={() => onStopsChange([])}
                />
                Все
            </label>
            {[0, 1, 2, 3].map((stop) => (
                <label key={stop}>
                    <input
                        type="checkbox"
                        checked={selectedStops.includes(stop)}
                        onChange={(e) => handleCheckboxChange(stop, e.target.checked)}
                    />
                    {stop === 0 ? "Без пересадок" : `${stop} пересадка(и)`}
                </label>
            ))}
        </div>
    );
};

export default StopsFilter;
