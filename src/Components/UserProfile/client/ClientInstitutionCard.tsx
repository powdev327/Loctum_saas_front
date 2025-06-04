import Button from "../../ui/button/Button.tsx";
import {Modal} from "../../ui/modal";
import {useModal} from "../../../hooks/useModal.ts";
import {useState} from "react";
import {useClient} from "../../../context/owner/ClientContext.tsx";
import {ClientInstitutionUpdate} from "../popups/ClientInstitutionUpdate.tsx";

export default function ClientInstitutionCard({ institutions }) {
    const {
        isOpen: isEditModalOpen,
        openModal: openEditModal,
        closeModal: closeEditModal,
    } = useModal();

    const {
        isOpen: isDeleteModalOpen,
        openModal: openDeleteModal,
        closeModal: closeDeleteModal,
    } = useModal();
    const {deleteInstitution} = useClient()
    const [selectedInstitution, setSelectedInstitution] = useState({ id: null, name: "", institution_type: '' });

    const handleOpenDeleteModal = (id, name) => {
        setSelectedInstitution({ id, name, institution_type: '' });
        openDeleteModal();
    };

    const handleOpenEditModal = (id, name, institution_type) => {
        setSelectedInstitution({ id, name, institution_type });
        openEditModal();
    };
    const renderSpecificFieldsDisplay = (institution) => {
        if (!institution?.specific_fields) return null;
        const { specific_fields, institution_type } = institution;

        if (institution_type === "pharmacy") {
            return (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Type of Pharmacy</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.type_of_pharmacy || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Pharmacy Phone Number</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.pharmacy_phone_number || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Weekday Traffic Patients</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.weekday_traffic_patients ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Weekend Traffic Patients</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.weekend_traffic_patients ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Number of Pharmacists</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.number_of_pharmacists ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Number of Assistants</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.number_of_assistants ?? "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Additional Information</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.additional_information ?? "N/A"}
                        </p>
                    </div>
                </div>
            );
        } else if (institution_type === "dental_clinic") {
            return (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Type of Clinic</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.type_of_clinic || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Clinic Phone Number</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.clinic_phone_number || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Charting Systems</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.charting_systems?.join(", ") || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Ultrasonic Types</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.ultrasonic_types?.join(", ") || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Radiography Types</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.radiography_types?.join(", ") || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Parking Options</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.parking_options?.join(", ") || "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Number of Current Dentists</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.number_of_current_dentists ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Number of Current Hygienists</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.number_of_current_hygienists ?? "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Traffic in Week</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.traffic_in_week ?? "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                            Additional Info Visible Before
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.additional_info_visible_before ? "Yes" : "No"}
                        </p>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="w-full">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Institution Information</h4>

                    <div className="grid gap-6">
                        {institutions?.map((institution, index) => (
                            <div key={index} className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800">
                                <div className={'flex justify-between items-center'}>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4"> <span className={'font-extrabold'}>{institution.institution_name || "N/A"}</span> Institution</h4>
                                    <div className="flex items-center gap-7">
                                        <button
                                            onClick={() => handleOpenEditModal(institution?.institution_id, institution?.institution_name, institution?.institution_type)}                                            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                                        >
                                            <svg
                                                className="fill-current"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                                                    fill=""
                                                />
                                            </svg>
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleOpenDeleteModal(institution?.institution_id, institution?.institution_name)
                                            }
                                            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                 height="18" viewBox="0 0 32 32">
                                                <path d="M 16 1.796875 C 14.609842 1.796875 13.220056 2.0236183 11.886719 2.4765625 C 10.790918 2.8487493 9.9716454 3.8186096 9.8457031 4.9960938 L 9.8476562 4.9960938 C 9.823717 5.2192366 9.8260965 5.4407699 9.828125 5.6621094 C 8.6980388 5.5366353 7.5698981 5.3884329 6.4472656 5.1933594 A 1.0001 1.0001 0 1 0 6.1054688 7.1640625 C 6.5016683 7.2329079 6.899652 7.2832828 7.296875 7.34375 C 5.9795828 12.790056 5.7276747 18.426446 6.5605469 23.943359 L 6.5625 23.953125 L 6.5644531 23.960938 C 7.0525932 26.828298 9.6277992 28.984375 12.318359 28.984375 L 19.679688 28.984375 C 22.370967 28.984375 24.947453 26.828026 25.435547 23.960938 L 25.435547 23.953125 L 25.4375 23.943359 C 26.271986 18.422306 26.018991 12.782034 24.699219 7.3320312 C 25.098396 7.2707183 25.498349 7.2181869 25.896484 7.1484375 A 1.0001 1.0001 0 0 0 25.71875 5.1621094 A 1.0001 1.0001 0 0 0 25.550781 5.1796875 C 24.427324 5.3765064 23.298946 5.5252061 22.167969 5.6523438 C 22.169913 5.4337969 22.177511 5.2160141 22.154297 4.9960938 C 22.028354 3.8186097 21.209082 2.8487493 20.113281 2.4765625 C 18.779944 2.0236183 17.390158 1.796875 16 1.796875 z M 16 3.7988281 C 17.17302 3.7988281 18.346041 3.989038 19.470703 4.3710938 C 19.852902 4.5009068 20.124005 4.8344685 20.164062 5.2089844 C 20.186312 5.4207522 20.190168 5.6293404 20.177734 5.84375 C 17.397306 6.0553891 14.604823 6.0570824 11.824219 5.8496094 C 11.811413 5.6332896 11.813154 5.4213588 11.835938 5.2089844 C 11.875998 4.8344685 12.147098 4.5009068 12.529297 4.3710938 C 13.653959 3.989038 14.82698 3.7988281 16 3.7988281 z M 22.710938 7.6035156 C 24.010616 12.857557 24.26434 18.303453 23.460938 23.630859 C 23.152658 25.42598 21.191214 26.984375 19.679688 26.984375 L 12.318359 26.984375 C 10.809306 26.984375 8.8496668 25.427822 8.5390625 23.634766 C 7.7364274 18.309833 7.9895689 12.867062 9.2871094 7.6152344 C 13.746791 8.1354052 18.251746 8.1302836 22.710938 7.6035156 z"></path>
                                            </svg>
                                            Delete

                                        </button>
                                    </div>

                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <div>
                                        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">Institution Type</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {institution.institution_type || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Institution Name</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {institution.institution_name || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Business Legal Name</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {institution.business_legal_name || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Address</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {institution.address || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">City</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">{institution?.city || "N/A"}</p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Type Contract</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {Array.isArray(institution?.type_of_contract)
                                                ? institution.type_of_contract.join(", ")
                                                : institution?.type_of_contract || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Software</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {Array.isArray(institution?.software)
                                                ? institution.software.join(", ")
                                                : institution?.software || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Services</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {Array.isArray(institution?.services)
                                                ? institution.services.join(", ")
                                                : institution?.services || "N/A"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Fees Enabled</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">{institution?.fees_enabled ? "Yes" : "No"}</p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Languages</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                            {Array.isArray(institution?.languages)
                                                ? institution.languages.join(", ")
                                                : institution?.languages || "N/A"}
                                        </p>
                                    </div>
                                </div>

                                {renderSpecificFieldsDisplay(institution)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Modal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                showCloseButton={false}
                className="max-w-[507px] p-6 lg:p-10"
            >
                <div className="text-center">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                        Delete institution
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete             <span className="font-semibold ">{selectedInstitution.name}</span> institution ?

                    </p>

                    <div className="flex items-center justify-center w-full gap-3 mt-8">
                        <Button size="sm" variant="outline" onClick={closeDeleteModal}>
                            Close
                        </Button>
                        <Button size="sm" onClick={() => deleteInstitution(selectedInstitution.id, closeDeleteModal)}>
                            Delete
                        </Button>

                    </div>
                </div>
            </Modal>
            {isEditModalOpen && (
                <ClientInstitutionUpdate
                    isOpen={isEditModalOpen}
                    closeModal={closeEditModal}
                    institution={selectedInstitution}
                />
            )}
        </div>
    );
}