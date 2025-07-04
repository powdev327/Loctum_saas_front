import { useState } from "react";
import PageMeta from "../../Components/common/PageMeta.tsx";
import PageBreadcrumb from "../../Components/common/PageBreadCrumb.tsx";
import LocumContracts from "../../Components/analytics/LocumContracts.tsx";
import SearchFilterContracts from "../../Components/contracts/SearchFilterContracts.tsx";

export default function ContractLocum() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        startDateFrom: "",
        startDateTo: "",
        hourlyRateMin: null as number | null,
        hourlyRateMax: null as number | null,
    });

    const handleReset = () => {
        setSearchTerm("");
        setFilters({
            startDateFrom: "",
            startDateTo: "",
            hourlyRateMin: null,
            hourlyRateMax: null,
        });
    };

    return (
        <>
            <PageMeta title="Contract Page" description="Contract Page that can client create and update them" />
            <PageBreadcrumb pageTitle="Contract" />
                <SearchFilterContracts
                    onSearch={setSearchTerm}
                    onFilter={setFilters}
                    onReset={handleReset}
                />
                <LocumContracts
                    useGrid={true}
                    searchTerm={searchTerm}
                    filters={filters}
                    onReset={handleReset}
                />
        </>
    );
}