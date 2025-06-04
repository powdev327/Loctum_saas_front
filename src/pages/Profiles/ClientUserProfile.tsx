import { useEffect } from "react"
import PageBreadcrumb from "../../Components/common/PageBreadCrumb.tsx"
import UserMetaCard from "../../Components/UserProfile/client/UserMetaCard.tsx"
import UserInfoCard from "../../Components/UserProfile/client/UserInfoCard.tsx"
import ClientInstitutionCard from "../../Components/UserProfile/client/ClientInstitutionCard.tsx"
import PageMeta from "../../Components/common/PageMeta.tsx"
import toast from "react-hot-toast"
import institutionService from "../../services/owner/institutionService"
import { useClient } from "../../context/owner/ClientContext.tsx"
import {useManager} from "../../context/owner/ManagerContext.tsx";
import ClientManagers from "../../Components/UserProfile/client/ClientManagers.tsx";

export default function ClientUserProfile() {
    const {client ,institutions, refreshClient } = useClient()
    const {managers, refreshManager} = useManager()
    const buildInstitutionPayload = async (data) => {
        if (!(data instanceof FormData)) {
            toast.error("Invalid form data")
            throw new Error("Invalid form data")
        }

        try {
            await institutionService.storeInstitution(data)
            await refreshClient()
        } catch (error) {
            toast.error("Failed to save institution. Please try again.")
            console.error("Store institution error:", error)
            throw error
        }
    }

    useEffect(() => {
        refreshClient()
        refreshManager()
    }, [])

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
                    <UserMetaCard clientInfo={client} buildInstitutionPayload={buildInstitutionPayload} />
                    <UserInfoCard />
                    {managers && managers.length > 0 && <ClientManagers managers={managers}/> }
                    {institutions && institutions.length > 0 && <ClientInstitutionCard institutions={institutions} />}
                </div>
            </div>
        </>
    )
}
