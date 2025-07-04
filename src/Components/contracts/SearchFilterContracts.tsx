import { useState } from "react";

interface SearchFilterContractsProps {
    onSearch: (searchTerm: string) => void;
    onFilter: (filters: {
        startDateFrom: string;
        startDateTo: string;
        hourlyRateMin: number | null;
        hourlyRateMax: number | null;
    }) => void;
    onReset: () => void;
}

export default function SearchFilterContracts({ onSearch, onFilter, onReset }: SearchFilterContractsProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDateFrom, setStartDateFrom] = useState("");
    const [startDateTo, setStartDateTo] = useState("");
    const [hourlyRateMin, setHourlyRateMin] = useState("");
    const [hourlyRateMax, setHourlyRateMax] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleFilterChange = () => {
        onFilter({
            startDateFrom,
            startDateTo,
            hourlyRateMin: hourlyRateMin ? parseFloat(hourlyRateMin) : null,
            hourlyRateMax: hourlyRateMax ? parseFloat(hourlyRateMax) : null,
        });
    };

    const handleReset = () => {
        setSearchTerm("");
        setStartDateFrom("");
        setStartDateTo("");
        setHourlyRateMin("");
        setHourlyRateMax("");
        onReset();
    };

    return (
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white dark:bordered-gray-800 dark:bg-white/[0.03] p-5 lg:p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Search & Filter Contracts</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search by Position or Location</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Enter position title or location"
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date From</label>
                    <input
                        type="date"
                        value={startDateFrom}
                        onChange={(e) => {
                            setStartDateFrom(e.target.value);
                            handleFilterChange();
                        }}
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date To</label>
                    <input
                        type="date"
                        value={startDateTo}
                        onChange={(e) => {
                            setStartDateTo(e.target.value);
                            handleFilterChange();
                        }}
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Min Hourly Rate (€/h)</label>
                    <input
                        type="number"
                        value={hourlyRateMin}
                        onChange={(e) => {
                            setHourlyRateMin(e.target.value);
                            handleFilterChange();
                        }}
                        placeholder="Min rate"
                        min="0"
                        step="0.01"
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Max Hourly Rate (€/h)</label>
                    <input
                        type="number"
                        value={hourlyRateMax}
                        onChange={(e) => {
                            setHourlyRateMax(e.target.value);
                            handleFilterChange();
                        }}
                        placeholder="Max rate"
                        min="0"
                        step="0.01"
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
                <div className="flex items-end">
                    <button
                        onClick={handleReset}
                        className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
}