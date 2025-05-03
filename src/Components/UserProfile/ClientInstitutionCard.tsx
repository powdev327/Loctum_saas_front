export default function ClientInstitutionCard({ institutions }) {
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
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Fees Enabled</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.fees_enabled ? "Yes" : "No"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Max Travel Expense</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.max_travel_expense ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Per Diem Per Day</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.per_diem_per_day ?? "N/A"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Accommodation Cost Per Night</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                            {specific_fields.accommodation_cost_per_night ?? "N/A"}
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
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Institution {index + 1}</h4>

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
        </div>
    );
}