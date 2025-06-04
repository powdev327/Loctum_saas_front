import PageMeta from "../../Components/common/PageMeta.tsx";
import PageBreadcrumb from "../../Components/common/PageBreadCrumb.tsx";
import AllContractCard from "../../Components/contracts/AllContractCard.tsx";

export default function Contract() {
    return(
        <>
            <PageMeta title={'Contract Page'} description='Contract Page that can client create and update them'/>
                <PageBreadcrumb pageTitle="Contract" />

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Contracts</h3>
                <div className="space-y-6">
                        <AllContractCard/>
                </div>
            </div>
            </>
    )
}