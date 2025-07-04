import { ContractProvider } from "../../context/owner/ContractContext";
import PageMeta from "../../Components/common/PageMeta";
import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import AllContractCard from "../../Components/contracts/AllContractCard";

export default function Contract() {
    return (
        <ContractProvider>
            <PageMeta title="Contract Page" description="Client contracts page" />
            <PageBreadcrumb pageTitle="Contracts" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Contracts</h3>
                <AllContractCard />
            </div>
        </ContractProvider>
    );
}
