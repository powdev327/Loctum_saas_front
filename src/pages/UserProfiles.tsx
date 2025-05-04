import { useEffect } from "react"
import PageBreadcrumb from "../components/common/PageBreadCrumb"
import UserMetaCard from "../components/UserProfile/UserMetaCard"
import UserInfoCard from "../components/UserProfile/UserInfoCard"
import ClientInstitutionCard from "../components/UserProfile/ClientInstitutionCard"
import PageMeta from "../components/common/PageMeta"
import toast from "react-hot-toast"
import institutionService from "../services/owner/institutionService"
import { useClient } from "../context/owner/ClientContext"

export default function UserProfiles() {
    const {client ,institutions, refreshClient } = useClient()
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
                    {institutions && institutions.length > 0 && <ClientInstitutionCard institutions={institutions} />}
                </div>
            </div>
        </>
    )
}
