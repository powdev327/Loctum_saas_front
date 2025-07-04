import PageBreadcrumb from "../../Components/common/PageBreadCrumb.tsx"
import PageMeta from "../../Components/common/PageMeta.tsx"
import LocumMetaCard from "../../Components/UserProfile/locum/LocumMetaCard.tsx"
import LocumInfoCard from "../../Components/UserProfile/locum/LocumInfoCard.tsx"
import LocumCvSummary from "../../Components/UserProfile/locum/LocumCvSummary.tsx"
import { useLocum } from "../../context/locum/LocumContext.tsx"
import {useEffect} from "react";

export default function LocumUserProfile() {
    const { locum, cvs, refreshLocum } = useLocum()


    const hasCVs = cvs && cvs.length > 0
    useEffect(() => {
        refreshLocum()
    }, []);
    return (
        <>
            <PageMeta
                title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Profile" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Profile</h3>
                <div className="space-y-6">
                    <LocumMetaCard locum={locum} />
                    <div className={`grid grid-cols-1 gap-6 ${hasCVs ? "lg:grid-cols-2" : ""}`}>
                        <LocumInfoCard />
                        {hasCVs && <LocumCvSummary cvs={cvs} />}
                    </div>
                </div>
            </div>
        </>
    )
}
