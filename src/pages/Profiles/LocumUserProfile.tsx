import PageBreadcrumb from "../../Components/common/PageBreadCrumb.tsx"
import PageMeta from "../../Components/common/PageMeta.tsx"
import LocumMetaCard from "../../Components/UserProfile/locum/LocumMetaCard.tsx";
import LocumInfoCard from "../../Components/UserProfile/locum/LocumInfoCard.tsx";
import LocumAddressCard from "../../Components/UserProfile/locum/LocumAddressCard.tsx";
import {useLocum} from "../../context/locum/LocumContext.tsx";

export default function LocumUserProfile() {
    const {locum} = useLocum()
    console.log('hdhdh', locum)
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
                    <LocumInfoCard />
                    {/*<LocumAddressCard />*/}
                </div>
            </div>
        </>
    )
}
